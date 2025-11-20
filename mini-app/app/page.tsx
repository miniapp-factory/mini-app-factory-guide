import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

import { generateMetadata } from "@/lib/farcaster-embed";
import { Introduction } from "@/components/introduction";
import { HowToCreate } from "@/components/how-to-create";
import { KeyConcepts } from "@/components/key-concepts";
import { FAQ } from "@/components/faq";

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <Introduction id="introduction" />
      <HowToCreate id="how-to-create" />
      <KeyConcepts id="key-concepts" />
      <FAQ id="faq" />
    </main>
  );
}
