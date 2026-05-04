import { Instagram } from "lucide-react";

export default function InstagramAlert() {
  return (
    <a
      href="https://instagram.com/total_fitness_old"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-primary py-2 text-center text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
    >
      <span className="inline-flex items-center gap-2">
        <Instagram className="h-4 w-4" />
        Follow us on Instagram @total_fitness_old for live gym updates
      </span>
    </a>
  );
}
