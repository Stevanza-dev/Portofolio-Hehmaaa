import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { reveal } from "../utils";
import { Divider, SectionLabel } from "./Shared";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="container-shell scroll-mt-24">
      <Divider />
      <div className="grid gap-12 pb-24 pt-20 lg:grid-cols-[360px_1fr] lg:gap-12 lg:pt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <SectionLabel>05 / GET IN TOUCH</SectionLabel>
          <h2 className="section-title mt-6">Let’s build something great.</h2>
          <p className="mt-7 text-[15px] leading-7 text-accent">
            Have a project in mind, a question, or an idea worth exploring?
            I’d love to hear about it.
          </p>
          <a
            href="mailto:alex@example.com"
            className="mt-7 inline-flex items-center gap-3 text-base hover:text-accent"
          >
            alex@example.com{" "}
            <ArrowUpRightIcon className="h-[18px] w-[18px]" />
          </a>
        </motion.div>
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="space-y-8 pt-2 lg:pt-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="field">
              <span>Your name</span>
              <input required placeholder="How should I call you?" />
            </label>
            <label className="field">
              <span>Email address</span>
              <input required type="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea
              required
              placeholder="Tell me a little about your project…"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-14 items-center gap-6 rounded-[2px] bg-accent px-6 text-sm font-semibold transition hover:bg-white hover:text-page"
          >
            {sent ? "Message Ready" : "Send Message"}{" "}
            <ArrowUpRightIcon className="h-5 w-5" />
          </button>
        </motion.form>
      </div>
      <Divider />
      <footer className="relative flex flex-col gap-7 py-10 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Alex Morgan</span>
        <span>Built with purpose. Kept simple.</span>
        <div className="flex gap-6">
          <a href="https://github.com" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="mailto:alex@example.com" aria-label="Email">
            <EnvelopeIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="sm:absolute sm:mt-24">
          Illustrative portfolio. Identity, biography, experience, and
          projects are sample content.
        </p>
      </footer>
    </section>
  );
}
