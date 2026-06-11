import { ArrowUp, Github, Linkedin } from "lucide-react";
import { navigation } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="container-shell flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display font-semibold text-ink">Joseph Etim</p>
          <p className="mt-1 text-xs">Built with intention.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/josephetim"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/josephetim"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full border border-line hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
