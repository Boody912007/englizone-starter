"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface QuizTimerProps {
  /** Total duration in seconds — e.g. 45 * 60 for a 45-minute IELTS-style section. */
  durationSeconds: number;
  onExpire?: () => void;
}

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function QuizTimer({ durationSeconds, onExpire }: QuizTimerProps) {
  const [remaining, setRemaining] = useState(durationSeconds);

  useEffect(() => {
    if (remaining <= 0) {
      onExpire?.();
      return;
    }
    const id = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [remaining, onExpire]);

  const isLow = remaining <= 60;

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold tabular-nums ${
        isLow
          ? "border-red-300 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400"
          : "border-border bg-surface text-foreground"
      }`}
      role="timer"
      aria-live="polite"
    >
      <Clock size={16} />
      {formatTime(remaining)}
    </div>
  );
}
