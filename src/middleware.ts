// File: src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();

    const url = new URL(context.request.url);
    if (
        url.pathname.startsWith('/_astro') || 
        url.pathname.includes('.') ||
        url.pathname.startsWith('/api/') ||  
        url.pathname.startsWith('/admin/')   
    ) {
        return response;
    }
    
    if (context.cookies.has('CF_Authorization')) {
        return response;
    }

    const req = context.request;
    const userAgent = req.headers.get('User-Agent') || 'unknown';
    
    if (userAgent.toLowerCase().includes('uptime-kuma')) {
        return response;
    }
    
    const runtime = context.locals.runtime;
    if (!runtime || !runtime.env.DB) return response; 

    const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
    const cf = runtime.cf;
    const country = cf?.country || 'unknown';
    const city = cf?.city || 'unknown';
    const latitude = cf?.latitude || 0;
    const longitude = cf?.longitude || 0;

    const query = runtime.env.DB.prepare(
        `INSERT INTO visits (ip, country, city, longitude, latitude, path, user_agent) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(ip, country, city, longitude, latitude, url.pathname, userAgent);

    runtime.ctx.waitUntil(
        query.run().catch((err) => console.error("D1 Insert Error:", err))
    );

    if (Math.random() < 0.01) {
        const cleanupQuery = runtime.env.DB.prepare(
            `DELETE FROM visits WHERE timestamp <= datetime('now', '-30 days')`
        );
        runtime.ctx.waitUntil(
            cleanupQuery.run().catch((err) => console.error("D1 Cleanup Error:", err))
        );
    }

    return response;
});