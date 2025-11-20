import { title, description, url } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    name: "Base Mini App Factory Guide",
    description: "A beginner‑friendly guide to creating your first mini app with the Base Mini App Factory.",
    image: `${url}/logo.png`,
  });
}
