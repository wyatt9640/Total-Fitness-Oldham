import { motion } from "framer-motion";
import gymCommunity from "@/assets/gallery-3.jpeg";

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
            Total Fitness Oldham isn't your typical gym. We're a tight-knit community where
            everyone supports each other — whether you're just starting out or you've been
            training for years. Pop in, have a chat, and feel at home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl"
        >
          <img
            src={gymCommunity}
            alt="Community atmosphere at Total Fitness Oldham"
            className="h-80 w-full object-cover object-top md:h-96"
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
