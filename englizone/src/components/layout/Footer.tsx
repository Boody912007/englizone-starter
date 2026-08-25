import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "01551304993";
const TELEGRAM_NUMBER = "01551304993";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold">EngliZone</p>
            <p className="mt-1 text-sm text-muted">
              English learning, taught by Mr. Ahmed Abdelrady.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/2${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`https://t.me/+2${TELEGRAM_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
            >
              <Send size={16} /> Telegram
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EngliZone. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
