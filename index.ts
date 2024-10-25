import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const port = parseInt(Deno.env.get("PORT") || "8000");
const server = serve({ hostname: "0.0.0.0", port });

console.log(`Server is running on http://0.0.0.0:${port}`);

for await (const req of server) {
  req.respond({ body: "Hello, Deno Deploy!\n" });
}