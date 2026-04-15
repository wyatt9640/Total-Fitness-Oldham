import { motion } from "framer-motion";
import womensImg from "@/assets/gallery-8.jpeg";

export default function WomensSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              Dedicated Space
            </span>
            <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
              WOMEN'S ONLY SECTION
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We understand that comfort matters. Our dedicated women's only area gives you
              the space to train at your own pace, in your own way — with all the same
              great equipment and a supportive atmosphere.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                Full range of cardio & weights
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                Private and comfortable environment
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                Female personal trainers available
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                Included with all memberships
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={womensImg}
              alt="Women's only gym section at Total Fitness Oldham"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
