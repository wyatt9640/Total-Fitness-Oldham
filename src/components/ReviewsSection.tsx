import { motion } from "framer-motion";

const reviews = [
  { text: "Good atmosphere, brilliant equipment and facilities, highly recommend.", author: "Google Review" },
  { text: "Management & staff are very friendly & helpful and offer good advice.", author: "Google Review" },
  { text: "Red carpet treatment from all the staff members from the moment you walk in.", author: "Google Review" },
  { text: "Best local gym I've been to. Feels like a community, not just a place to work out.", author: "Google Review" },
  { text: "The women's section is a game changer. Finally somewhere I feel comfortable training.", author: "Google Review" },
  { text: "Great value for money and the staff genuinely care about your progress.", author: "Google Review" },
];

function Stars() {
  return (
    <div className="flex text-primary">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">WHAT PEOPLE SAY</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars />
            <span className="text-2xl font-bold text-foreground">4.7</span>
            <span className="text-muted-foreground">from 127 reviews on Google</span>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-card p-6"
            >
              <Stars />
              <p className="mt-4 text-foreground">"{r.text}"</p>
              <p className="mt-3 text-xs text-muted-foreground">{r.author}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Total+Fitness+Oldham/@53.5409,-2.1089,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d53.5409!4d-2.1089!9m1!1b1!16s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-opacity hover:opacity-80"
          >
            Show More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
