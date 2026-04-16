import { motion } from "framer-motion";

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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📍 Address</h3>
              <p className="mt-2 text-muted-foreground">
                Daniel St, Oldham OL1 3NS
              </p>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📞 Phone</h3>
              <a href="tel:01616284711" className="mt-2 block text-lg text-primary hover:underline">
                0161 628 4711
              </a>
            </div>

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📧 Email</h3>
              <a href="mailto:info@totalfitnessoldham.co.uk" className="mt-2 block text-lg text-primary hover:underline">
                info@totalfitnessoldham.co.uk
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

            <div className="rounded-xl bg-card p-6">
              <h3 className="text-2xl text-foreground">📱 Socials</h3>
              <div className="mt-3 flex items-center gap-4">
                <a href="https://www.instagram.com/totalfitnessoldham1?igsh=MThkajdvMmU4aDBuag==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/share/1Fzcn6KGgZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
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
