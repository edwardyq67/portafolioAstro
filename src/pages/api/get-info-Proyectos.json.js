// src/pages/api/proyectos.js

import { proyectos } from '@/lib/data';

export async function GET({ request }) {
  return new Response(JSON.stringify(proyectos), {
    headers: { "content-type": "application/json" },
  });
}
