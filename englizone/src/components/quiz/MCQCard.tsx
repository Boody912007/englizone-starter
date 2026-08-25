"use client";

import { useState } from "react";

export interface MCQOption {
  id: string;
  text: string;
}

interface MCQCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  options: MCQOption[];
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}

export function MCQCard({
  questionNumber,
  totalQuestions,
  questionText,
  options,
  selectedOptionId,
  onSelect,
}: MCQCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{questionText}</h3>

      <div className="mt-5 space-y-3" role="radiogroup" aria-label={questionText}>
        {options.map((option) => {
          const checked = option.id === selectedOptionId;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={checked}
              onClick={() => onSelect(option.id)}
              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                checked
                  ? "border-accent bg-accent/10 font-medium text-foreground"
                  : "border-border bg-background text-foreground hover:border-accent/50"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  checked ? "border-accent" : "border-border"
                }`}
              >
                {checked && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
              </span>
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
