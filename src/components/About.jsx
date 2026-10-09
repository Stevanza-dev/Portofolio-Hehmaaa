import { motion } from "framer-motion";
import { reveal } from "../utils";
import { Divider, SectionLabel } from "./Shared";

export default function About() {
  return (
    <section id="about" className="container-shell scroll-mt-24">
      <Divider />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
        className="grid gap-12 py-20 lg:grid-cols-[360px_1fr] lg:gap-12 lg:py-24"
      >
        <div>
          <SectionLabel>01 / ABOUT ME</SectionLabel>
          <h2 className="section-title mt-6">
            An engineer’s mind.
            <br />A founder’s drive.
          </h2>
        </div>
        <div className="space-y-6 text-[15px] leading-7 text-muted">
          <p className="text-lg leading-7 text-accent sm:text-xl">
            I build at the intersection of technology and business — where a
            useful idea becomes a reliable product.
          </p>
          <p>
            My focus is full-stack development, clear systems thinking, and
            the small details that make software feel effortless. Through my
            independent startup studio, I help early-stage teams move from a
            rough concept to a launch-ready product.
          </p>
          <p>
            My toolkit: <span className="text-accent">TypeScript</span>,{" "}
            <span className="text-accent">React</span>,{" "}
            <span className="text-accent">Node.js</span>, and{" "}
            <span className="text-accent">cloud architecture</span>. My
            approach: keep it simple, build it well.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
