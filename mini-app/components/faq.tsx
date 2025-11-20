"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function FAQ({ id }: { id: string }) {
  return (
    <Card id={id} className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
        <CardDescription>
          <dl className="space-y-4">
            <dt className="font-semibold">How long does it take?</dt>
            <dd>Typically a few minutes after submitting your description.</dd>
            <dt className="font-semibold">Can I edit my app?</dt>
            <dd>Yes, you can update the description and redeploy.</dd>
            <dt className="font-semibold">What happens during deployment?</dt>
            <dd>The app is built, tested, and published to Base.</dd>
            <dt className="font-semibold">Do I need technical experience?</dt>
            <dd>No, the process is designed for non‑technical users.</dd>
          </dl>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
