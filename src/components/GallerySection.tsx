import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";

const photos = [
  { src: gallery1, alt: "Members training together on cable machines" },
  { src: gallery2, alt: "Member using the leg press" },
  { src: gallery3, alt: "Members having a chat between sets" },
  { src: gallery5, alt: "Member training with dumbbells" },
  { src: gallery6, alt: "Friends supporting each other during a workout" },
  { src: gallery7, alt: "Personal training session at Total Fitness" },
  { src: gallery8, alt: "Member training in the gym" },
  { src: gallery9, alt: "Member pushing the Hyrox sled" },
  { src: gallery10, alt: "Member boxing training with speed ball" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">THE PEOPLE</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            The heart and soul of Total Fitness Oldham — our amazing members.
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
