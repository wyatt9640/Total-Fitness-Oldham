import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import shinseiPartnership from "@/assets/shinsei-partnership.jpeg";

const features = [
  { icon: "🤝", title: "Community First", desc: "We're a family, not just a gym. Everyone knows your name here." },
  { icon: "🧖", title: "Sauna & Recovery", desc: "Wind down after your workout in our relaxing sauna." },
  { icon: "🚴", title: "Group Classes", desc: "Cycling, HIIT, yoga and more — train together, grow together." },
  { icon: "🍎", title: "Nutrition Advice", desc: "Free nutrition consulting to help you reach your goals." },
  { icon: "💪", title: "Personal Training", desc: "Expert PTs who genuinely care about your progress." },
  { icon: "👋", title: "Friendly Staff", desc: "Red carpet treatment from the moment you walk in." },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">YOUR LOCAL GYM FAMILY</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We've teamed up with <span className="text-foreground font-semibold">Shinsei Academy</span>,
            a local martial arts gym, to bring even more to the Oldham fitness community. Together
            we're building a place where strength, discipline and friendship come first — a real
            community where everyone is welcome, supported and known by name.
          </p>
          <a
            href="https://www.instagram.com/shinsei_academy_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Instagram className="h-4 w-4 text-primary" />
            @shinsei_academy_official
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl"
        >
          <img
            src={shinseiPartnership}
            alt="Total Fitness Oldham team with Shinsei Academy at reception"
            className="h-80 w-full object-contain object-top md:h-auto md:max-h-[40rem]"
          />
        </motion.div>


        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 transition-colors hover:bg-secondary"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-3 text-xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
