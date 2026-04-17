import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import davidCliffordImg from "@/assets/lifter-david-clifford.jpeg";
import davidCliffordCert from "@/assets/lifter-david-clifford-cert.jpeg";

type Social = {
  type: "instagram" | "facebook" | "tiktok" | "youtube";
  url: string;
};

type Lifter = {
  name: string;
  title: string;
  image: string;
  certificate: string;
  socials: Social[];
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
  </svg>
);

// Placeholder lifters — replace with real photos, certificates and socials.
const lifters: Lifter[] = [
  {
    name: "David Clifford",
    title: "British Masters Divisional Champion 2021",
    image: davidCliffordImg,
    certificate: davidCliffordCert,
    socials: [{ type: "instagram", url: "https://instagram.com/dacdac65" }],
  },
  {
    name: "Add Name",
    title: "Regional Record Holder",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80",
    certificate: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80",
    socials: [{ type: "instagram", url: "https://instagram.com/" }],
  },
];

function SocialIcon({ social }: { social: Social }) {
  const className = "h-5 w-5";
  switch (social.type) {
    case "instagram":
      return <Instagram className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "youtube":
      return <Youtube className={className} />;
    case "tiktok":
      return <TikTokIcon className={className} />;
  }
}

export default function PowerliftingSection() {
  return (
    <section id="powerlifting" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">POWERLIFTING</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Meet the lifters repping Total Fitness Oldham on the platform. Strength built here, proven on competition day.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {lifters.map((lifter, i) => (
            <motion.div
              key={lifter.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={lifter.image}
                    alt={lifter.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={lifter.certificate}
                    alt={`${lifter.name} certificate`}
                    className="h-full w-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl text-foreground">{lifter.name}</h3>
                <p className="text-sm text-muted-foreground">{lifter.title}</p>
                <div className="mt-3 flex gap-3">
                  {lifter.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${lifter.name} on ${social.type}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <SocialIcon social={social} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
