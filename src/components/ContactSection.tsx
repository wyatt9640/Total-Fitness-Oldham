import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/totalfitnessoldham1?igsh=MThkajdvMmU4aDBuag==";
const FACEBOOK_URL = "https://www.facebook.com/share/1Fzcn6KGgZ/?mibextid=wwXIfr";
const EMAIL = "info@totalfitnessoldham.co.uk";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">COME SEE US</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We're right in the heart of Oldham. Pop in for a tour, grab a day pass,
            or just say hello — the kettle's always on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-card p-5 text-left"
        >
          <h3 className="text-xl text-foreground">Socials</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:text-primary"
            >
              Facebook
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-lg bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📍 Address</h3>
              <p className="mt-2 text-muted-foreground">Daniel St, Oldham OL1 3NS</p>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📞 Phone</h3>
              <a href="tel:01616284711" className="mt-2 block text-lg text-primary hover:underline">
                0161 628 4711
              </a>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📧 Email</h3>
              <a href={`mailto:${EMAIL}`} className="mt-2 block text-lg text-primary hover:underline">
                {EMAIL}
              </a>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">🕐 Opening Hours</h3>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Monday – Friday: 6am – 10pm</p>
                <p>Saturday: 8am – 6pm</p>
                <p>Sunday: 8am – 4pm</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.8!2d-2.1087!3d53.5409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb7e8c4d4e9d3%3A0x5e2f0e6e9c8e8d4a!2sDaniel%20St%2C%20Oldham%20OL1%203NS!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Total Fitness Oldham location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
