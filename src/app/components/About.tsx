import { motion } from "motion/react";

export function About() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                About Nex
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight">
              A Collective of
              <br />
              <span className="text-accent">CS Students</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a collective of Computer Science students united by a passion for innovation,
              technology, and real-world impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nex, we compete in hackathons, build cutting-edge technologies, and push the
              boundaries of what's possible with AI, IoT, and smart systems. We're not just
              students — we're researchers, builders, and innovators creating solutions that
              matter.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                "Hackathon Competitors",
                "AI Researchers",
                "IoT Engineers",
                "System Builders",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent mt-2 shrink-0" />
                  <span className="text-sm text-foreground tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
