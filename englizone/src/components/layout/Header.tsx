import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Brief is explicit: WhatsApp + Telegram only. No Facebook / TikTok /
// Instagram anywhere in the UI — do not add those back in later passes.
const WHATSAPP_NUMBER = "01551304993";
const TELEGRAM_NUMBER = "01551304993";

const NAV_LINKS = [
  { label: "Courses", href: "/courses" },
  { label: "Study Plan", href: "/dashboard" },
  { label: "About Mr. Ahmed", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="EngliZone home">
          <Image
            src="/images/englizone-logo.png"
            alt="EngliZone"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Engli<span className="bg-brand-gradient bg-clip-text text-transparent">Zone</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/2${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={`https://t.me/+2${TELEGRAM_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message on Telegram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
          >
            <Send size={18} />
          </a>
          <ThemeToggle />
          <Link
            href="/courses"
            className="ml-1 hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Enroll now
          </Link>
        </div>
      </div>
    </header>
  );
}
