import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Student Innovation
              </span>
            </motion.div>

            <h1 className="text-[clamp(4rem,12vw,10rem)] leading-[0.9] tracking-tighter">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                Nex
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-[clamp(1.5rem,3.5vw,3rem)] leading-tight max-w-4xl"
            >
              The Next Generation of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Student Innovators</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20" />
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Building AI, IoT, and Smart Systems That Matter.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 border border-accent text-accent overflow-hidden transition-all hover:text-background"
            >
              <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2 text-sm tracking-wider uppercase">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="#team"
              className="group relative px-8 py-4 border border-border text-foreground overflow-hidden transition-all hover:border-foreground"
            >
              <span className="relative flex items-center gap-2 text-sm tracking-wider uppercase">
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="pt-20 grid grid-cols-3 gap-8 max-w-3xl"
          >
            {[
              { value: "5+", label: "Championships" },
              { value: "6", label: "Active Projects" },
              { value: "10+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-mono text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
