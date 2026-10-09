import { motion } from "framer-motion";
import { reveal } from "../utils";
import { Divider, SectionLabel } from "./Shared";
import { CodeBracketIcon, ShareIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const services = [
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "Fast, accessible websites and full-stack applications built to work beautifully at every scale.",
    meta: "WEBSITES / WEB APPS / APIS",
  },
  {
    icon: ShareIcon,
    title: "IT Consulting",
    description:
      "Practical guidance on architecture, infrastructure, and the technology decisions that matter.",
    meta: "ARCHITECTURE / CLOUD / STRATEGY",
  },
  {
    icon: RocketLaunchIcon,
    title: "MVP & Product Engineering",
    description:
      "From idea to first release. Focused product development for founders ready to test and launch.",
    meta: "PROTOTYPES / SAAS / LAUNCHES",
  },
];

export default function Services() {
  return (
    <section id="services" className="container-shell scroll-mt-24">
      <Divider />
      <div className="py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mb-12 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end"
        >
          <div>
            <SectionLabel>02 / STARTUP &amp; SERVICES</SectionLabel>
            <h2 className="section-title mt-6 max-w-xl">
              Small teams. Big possibilities.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-accent">
            Through my independent studio, I partner with ambitious people to
            build what comes next.
          </p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
              className="service-card"
            >
              <service.icon className="h-7 w-7 text-white" />
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-muted">
                  {service.description}
                </p>
              </div>
              <p className="mt-auto text-[10px] tracking-[0.08em] text-muted">
                {service.meta}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
