import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { reveal } from "../utils";
import { Divider, SectionLabel } from "./Shared";

const projects = [
  {
    type: "ANALYTICS PLATFORM",
    name: "Pulse",
    description:
      "A focused dashboard that turns product data into clear, actionable insights.",
    stack: "Next.js / TypeScript / PostgreSQL",
    variant: "chart",
  },
  {
    type: "SAAS STARTER",
    name: "Launchpad",
    description:
      "A launch-ready foundation for founders, from authentication to billing.",
    stack: "React / Node.js / Stripe",
    variant: "landing",
  },
  {
    type: "DEVELOPER TOOLS",
    name: "Stack",
    description:
      "A lightweight workspace for organizing snippets and sharing team knowledge.",
    stack: "TypeScript / Supabase / Tailwind",
    variant: "code",
  },
];

function ArrowLink({ children, className = "" }) {
  return (
    <a
      href="#work"
      className={`inline-flex items-center gap-2 text-[13px] font-medium text-accent transition hover:text-white ${className}`}
    >
      {children}
      <ArrowUpRightIcon className="h-4 w-4" />
    </a>
  );
}

function ProjectPreview({ variant }) {
  if (variant === "chart")
    return (
      <div className="preview-window">
        <div className="preview-top">
          <strong>pulse / overview</strong>
          <i />
        </div>
        <div className="metric-row">
          {["24.8k", "1,204", "8.6%"].map((metric) => (
            <div key={metric}>
              <span />
              {metric}
            </div>
          ))}
        </div>
        <div className="bar-chart">
          {[16, 24, 20, 31, 27, 36, 32, 44, 39, 48, 43, 50].map(
            (height, index) => (
              <i key={index} style={{ height }} />
            ),
          )}
        </div>
      </div>
    );
  if (variant === "landing")
    return (
      <div className="preview-window">
        <div className="preview-top">
          <strong>launchpad.</strong>
          <i />
        </div>
        <div className="landing-preview">
          <b>Your next idea, live.</b>
          <span />
          <em />
        </div>
      </div>
    );
  return (
    <div className="preview-window">
      <div className="preview-top">
        <strong>stack / workspace</strong>
        <i />
      </div>
      <div className="code-preview">
        <div className="file-lines">
          {[40, 52, 32, 44, 36].map((width) => (
            <i key={width} style={{ width }} />
          ))}
        </div>
        <code>
          export async function build() {"{"}
          <br />
          &nbsp;&nbsp;const idea = await create();
          <br />
          &nbsp;&nbsp;return ship(idea);
          <br />
          {"}"}
        </code>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="container-shell scroll-mt-24">
      <Divider />
      <div className="py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <SectionLabel>04 / PORTFOLIO PROJECTS</SectionLabel>
          <h2 className="section-title mt-6">Ideas, made tangible.</h2>
        </motion.div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={reveal}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-preview">
                <ProjectPreview variant={project.variant} />
                <span className="mt-5 block text-[9px] tracking-[0.1em] text-muted">
                  CONCEPT PREVIEW
                </span>
              </div>
              <div className="mt-6">
                <p className="text-[10px] tracking-[0.08em] text-muted">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {project.name}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-muted">{project.stack}</p>
                <ArrowLink className="mt-6">View Project</ArrowLink>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
