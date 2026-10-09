import { motion } from "framer-motion";
import { ArrowUpRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import foto from "../assets/foto.png";
import { ease, reveal } from "../utils";

export default function Hero() {
  return (
    <section id="home" className="container-shell pb-0 pt-28 scroll-mt-24">
      <div className="grid gap-12 py-14 lg:grid-cols-[1fr_430px] lg:items-end lg:gap-16 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="max-w-2xl"
        >
          <div className="mb-8 flex items-center gap-2 text-[11px] tracking-[0.1em] text-muted">
            <div className="h-1.5 w-1.5 rounded-full bg-current" /> OPEN TO IDEAS. READY TO BUILD.
          </div>
          <h1 className="max-w-2xl text-[clamp(3.8rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            M. Stevanza Sylvester
          </h1>
          <p className="mt-7 text-xl tracking-[-0.02em] sm:text-2xl">
            Graphic Designer, Web Developer &amp; Tech Entrepreneur
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            I turn complex problems into thoughtful software.
            <br />
            From the first idea to a product people love to use.
          </p>
          <a
            href="#work"
            className="mt-8 inline-flex h-14 items-center gap-6 rounded-[2px] bg-accent px-6 text-sm font-semibold transition hover:bg-white hover:text-page"
          >
            View My Work <ArrowUpRightIcon className="h-5 w-5" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="portrait-frame"
        >
          <img src={foto} alt="M. Stevanza Sylvester" />
        </motion.div>
      </div>
      <div className="flex items-center justify-between border-t border-accent/10 bg-accent/[0.04] py-7 text-[11px]">
        <span className="tracking-[0.08em] text-accent">
          HEHMAAA PORTFOLIO / 2026
        </span>
        <a
          href="#about"
          className="flex items-center gap-3 text-muted hover:text-white"
        >
          Scroll to explore <ArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
