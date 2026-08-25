"use client";

import { useRef, useState } from "react";
import { Headphones } from "lucide-react";
import { MCQCard, type MCQOption } from "./MCQCard";

interface ListeningQuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  audioSrc: string;
  options: MCQOption[];
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
  /** Exam-style listening sections often only allow the clip to be played once or twice. */
  maxPlays?: number;
}

export function ListeningQuestionCard({
  audioSrc,
  maxPlays,
  ...mcqProps
}: ListeningQuestionCardProps) {
  const [playCount, setPlayCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const exhausted = Boolean(maxPlays) && playCount >= (maxPlays as number);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
          <Headphones size={18} />
        </div>
        <div className="flex-1">
          <audio
            ref={audioRef}
            controls
            controlsList="nodownload noplaybackrate"
            src={audioSrc}
            className="w-full"
            onPlay={(e) => {
              if (exhausted) {
                e.currentTarget.pause();
                return;
              }
              setPlayCount((c) => c + 1);
            }}
          >
            Your browser doesn&apos;t support embedded audio.
          </audio>
          {maxPlays && (
            <p className="mt-1 text-xs text-muted">
              {exhausted
                ? "You've used all your plays for this clip."
                : `Plays used: ${playCount} of ${maxPlays}.`}
            </p>
          )}
        </div>
      </div>

      <MCQCard {...mcqProps} />
    </div>
  );
}
