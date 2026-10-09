import { motion } from "framer-motion";
import { reveal } from "../utils";
import { Divider, SectionLabel } from "./Shared";

const experience = [
  {
    company: "ORBIT LABS",
    date: "JUN — AUG 2025",
    role: "Software Engineering Intern",
    description:
      "Built internal tools and reusable React components, working closely with engineers to ship reliable product features.",
  },
  {
    company: "NORTHSTAR DIGITAL",
    date: "JAN — MAY 2025",
    role: "Full-Stack Development Intern",
    description:
      "Developed API integrations and responsive web interfaces, with a focus on performance and maintainable code.",
  },
  {
    company: "VERTEX STUDIO",
    date: "JUN — AUG 2024",
    role: "Frontend Engineering Intern",
    description:
      "Translated design systems into accessible interfaces and learned the craft of building for real users.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container-shell scroll-mt-24">
      <Divider />
      <div className="grid gap-12 py-20 lg:grid-cols-[360px_1fr] lg:gap-12 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <SectionLabel>03 / INTERNSHIP EXPERIENCE</SectionLabel>
          <h2 className="section-title mt-6">
            Built on real
            <br />
            experience.
          </h2>
          <p className="mt-7 text-[15px] leading-7 text-accent">
            Learning by building, collaborating, and shipping with talented
            teams.
          </p>
        </motion.div>
        <div className="relative space-y-10 pl-10 before:absolute before:left-[5px] before:top-3 before:h-[calc(100%-30px)] before:w-px before:bg-accent">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-page" />
              <div className="flex justify-between gap-4 text-[11px] tracking-[0.08em] text-muted">
                <span>{item.company}</span>
                <span className="whitespace-nowrap">{item.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                {item.role}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
