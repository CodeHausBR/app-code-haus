// src/server/server.ts
import { Context, Hono } from 'hono';
import { cors } from 'hono/cors';
import { z } from 'zod';



const app = new Hono();

// CORS para desenvolvimento
app.use('*', cors({
    origin: ['http://localhost:3000'],
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type'],
}));

// Schema de validação simples
const HelloSchema = z.object({
    name: z.string().optional(),
});

// Rota Hello simples
app.get('/hello', (c) => {
    return c.json({
        message: 'Hello from Hono + Cloudflare Workers! 🚀',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Rota Hello com POST
app.post('/hello', async (c) => {
    try {
        const body = await c.req.json();
        const validated = HelloSchema.parse(body);

        return c.json({
            message: `Hello ${validated.name || 'World'}! 👋`,
            received: validated,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return c.json({
            error: 'Invalid data',
            message: 'Nome deve ser uma string'
        }, 400);
    }
});

// Servir frontend estático
app.get('*', async (c: Context) => {
    return c.env.ASSETS.fetch(c.req.raw);
});

export default app;