"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Introduction({ id }: { id: string }) {
  return (
    <Card id={id} className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Introduction</CardTitle>
        <CardDescription>
          The Base Mini App Factory is a tool that lets anyone build a mini app in minutes by describing it in natural language.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
