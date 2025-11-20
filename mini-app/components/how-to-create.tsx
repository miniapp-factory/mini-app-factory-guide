"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function HowToCreate({ id }: { id: string }) {
  return (
    <Card id={id} className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>How to Create a Mini App</CardTitle>
        <CardDescription>
          <ol className="list-decimal pl-4 space-y-2">
            <li>Describe your app idea clearly.</li>
            <li>Submit the description.</li>
            <li>The generation process creates the app.</li>
            <li>When ready, deploy the app.</li>
          </ol>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
