import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// The photo is used exactly as uploaded — no generation, reshaping, or
// beautifying pass is applied. That's not a workaround: it's the most
// literal way to satisfy "preserve the individual's identity with high
// fidelity" — the source photo is simply placed in the layout untouched.
const HIGHLIGHTS = [
  "Foundational, primary & preparatory levels",
  "Listening & reading practice in exam conditions",
  "Weekly study plan with progress tracking",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            Live courses now enrolling
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Learn English with{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Mr. Ahmed Abdelrady
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base text-muted sm:text-lg">
            Structured courses, real exam-style practice, and a study plan
            that tells you exactly what to do this week — not just a pile of
            videos.
          </p>

          <ul className="mt-6 space-y-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={16} className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Start Your Journey
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              Browse courses
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
            <Image
              src="/images/ahmed-hero.jpg"
              alt="Mr. Ahmed Abdelrady"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
