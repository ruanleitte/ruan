import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[hsl(var(--dark))] to-gray-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-sans font-bold text-4xl md:text-6xl mb-4"
        >
          Alex Morgan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl"
        >
          Web Developer & UI/UX Designer crafting beautiful digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-blue-600"
          >
            <a href="#projects">View My Work</a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white hover:text-[hsl(var(--dark))]"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex space-x-6"
        >
          <a
            href="#"
            className="text-white hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition"
            aria-label="Dribbble"
          >
            <FaDribbble className="text-2xl" />
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(var(--light))] to-transparent"></div>
    </section>
  );
}
