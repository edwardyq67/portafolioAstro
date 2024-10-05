// src/pages/api/proyectos.js

import { lenguajes } from '@/lib/data';

export async function GET() {
  return new Response(JSON.stringify(lenguajes), {
    headers: { "Content-Type": "application/json" },
  });
}
