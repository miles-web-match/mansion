// Cloudflare Pages Functions endpoint: POST /api/describe
// Note: This is a minimal working version. Move your generation logic here.
// Environment variable: OPENAI_API_KEY (set in Cloudflare Pages > Settings > Environment Variables)

export const onRequestPost: PagesFunction = async (ctx) => {
  try {
    const body = await ctx.request.json();

    // --- Minimal stub to verify deployment works ---
    // Replace this with your real generation pipeline (ported from route.ts).
    // Example: call OpenAI via REST using fetch (not Node SDK).
    return new Response(JSON.stringify({
      ok: true,
      echo: body ?? null,
      message: "Cloudflare Pages Functions is running. Implement your generation logic in /functions/api/describe.ts"
    }), { headers: { "content-type": "application/json" } });

    // --- Example (commented): OpenAI REST call ---
    // const OPENAI_API_KEY = ctx.env.OPENAI_API_KEY as string;
    // if (!OPENAI_API_KEY) {
    //   return new Response(JSON.stringify({ error: "OPENAI_API_KEY is not set" }), { status: 500 });
    // }
    // const r = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "authorization": `Bearer ${OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-4o-mini",
    //     temperature: 0.1,
    //     response_format: { type: "json_object" },
    //     messages: [
    //       { role: "system", content: "Return ONLY {\"text\": string} in JSON." },
    //       { role: "user", content: "Hello" }
    //     ]
    //   })
    // });
    // const data = await r.json();
    // return new Response(JSON.stringify(data), { headers: { "content-type": "application/json" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || "server error" }), { status: 500 });
  }
};
