"use client";

import { type ReactNode } from "react";

interface ReadingComprehensionSplitProps {
  passageTitle: string;
  passageText: string;
  /** Rendered question cards (e.g. a list of <MCQCard />). */
  questions: ReactNode;
}

// Split-screen so the passage stays visible while answering — the brief
// calls this out specifically to avoid the back-and-forth scrolling that a
// stacked layout would force. Each pane scrolls independently; on small
// screens it stacks (passage first) rather than trying to force a
// side-by-side layout onto a narrow viewport.
export function ReadingComprehensionSplit({
  passageTitle,
  passageText,
  questions,
}: ReadingComprehensionSplitProps) {
  return (
    <div className="grid gap-4 md:h-[calc(100vh-8rem)] md:grid-cols-2 md:gap-0">
      <div className="overflow-y-auto rounded-2xl border border-border bg-surface p-6 md:rounded-r-none md:border-r-0">
        <h2 className="font-display text-lg font-semibold">{passageTitle}</h2>
        <div className="prose prose-sm mt-4 max-w-none whitespace-pre-line text-foreground/90">
          {passageText}
        </div>
      </div>

      <div className="overflow-y-auto rounded-2xl border border-border bg-background p-6 md:rounded-l-none">
        <div className="space-y-6">{questions}</div>
      </div>
    </div>
  );
}
