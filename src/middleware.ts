// File: src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    // 1. Process the actual page request first
    const response = await next();

    // 2. Ignore assets, static files, or internal API calls to prevent DB spam
    const url = new URL(context.request.url);
    if (
        url.pathname.startsWith('/_astro') || 
        url.pathname.includes('.') ||
        url.pathname.startsWith('/api/') ||  // Stops the 5-second polling from logging
        url.pathname.startsWith('/admin/')   // Stops your dashboard visits from logging
    ) {
        return response;
    }

    // 3. Extract Cloudflare runtime
    const runtime = context.locals.runtime;
    if (!runtime || !runtime.env.DB) return response; // Failsafe for local dev without bindings

    // 4. Gather Visitor Data
    const req = context.request;
    const ip = req.headers.get('CF-Connecting-IP') || 'unknown';
    const userAgent = req.headers.get('User-Agent') || 'unknown';
    
    // Cloudflare specific Geo data
    const cf = runtime.cf;
    const country = cf?.country || 'unknown';
    const city = cf?.city || 'unknown';
    const latitude = cf?.latitude || 0;
    const longitude = cf?.longitude || 0;

    // 5. Save to D1 Database in the background!
    // We use waitUntil so the database insert doesn't delay the user receiving the webpage
    const query = runtime.env.DB.prepare(
        `INSERT INTO visits (ip, country, city, longitude, latitude, path, user_agent) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(ip, country, city, longitude, latitude, url.pathname, userAgent);

    runtime.ctx.waitUntil(query.run());

    return response;
});