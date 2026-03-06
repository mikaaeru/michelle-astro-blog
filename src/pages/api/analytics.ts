import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
    const db = locals.runtime?.env?.DB;
    if (!db) return new Response("DB not found", { status: 500 });

    try {
        // Fetch the last 50 visits
        const { results } = await db.prepare(
            "SELECT * FROM visits ORDER BY timestamp DESC LIMIT 50"
        ).all();

        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response("Error fetching data", { status: 500 });
    }
}