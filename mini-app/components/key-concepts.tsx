"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function KeyConcepts({ id }: { id: string }) {
  return (
    <Card id={id} className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Key Concepts</CardTitle>
        <CardDescription>
          <ul className="list-disc pl-4 space-y-2">
            <li>No‑code creation: build without writing code.</li>
            <li>Automatic generation: the system turns your description into a working app.</li>
            <li>Deploying on Base: publishing the app so it can be used by others.</li>
            <li>Updating: you can edit and redeploy after creation.</li>
          </ul>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
