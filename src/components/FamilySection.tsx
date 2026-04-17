import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import imranImg from "@/assets/family-imran.png";
import mariuszImg from "@/assets/family-mariusz.png";

type Social = {
  type: "instagram" | "facebook" | "tiktok" | "youtube";
  url: string;
};

type Member = {
  name: string;
  role: string;
  image: string;
  socials: Social[];
};

// TikTok icon (lucide doesn't ship one)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
  </svg>
);

const family: Member[] = [
  {
    name: "Add Name",
    role: "Head Coach",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    socials: [
      { type: "instagram", url: "https://instagram.com/" },
      { type: "facebook", url: "https://facebook.com/" },
    ],
  },
  {
    name: "Mariusz Jotejko",
    role: "Personal Trainer",
    image: mariuszImg,
    socials: [
      { type: "instagram", url: "https://instagram.com/imstrongcoaching" },
    ],
  },
  {
    name: "FitnessFreakImran",
    role: "Member",
    image: imranImg,
    socials: [
      { type: "instagram", url: "https://instagram.com/fitness.freak.imran" },
      { type: "tiktok", url: "https://tiktok.com/@fitnessfreakimran" },
    ],
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

export default function FamilySection() {
  return (
    <section id="family" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">PART OF THE FAMILY</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Meet the coaches, members and regulars who make Total Fitness Oldham what it is. Give them a follow.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {family.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl text-white">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.role}</p>
                  <div className="mt-3 flex gap-3">
                    {member.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.type}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <SocialIcon social={social} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
