import { motion } from "motion/react";

export function MissionVision() {
  return (
    <section className="relative py-32 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          <div className="space-y-8 border-l border-accent pl-12">
            <div className="space-y-4">
              <div className="text-xs tracking-[0.3em] text-accent uppercase font-mono">
                01 / Mission
              </div>
              <h3 className="text-4xl leading-tight">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower student innovators through collaboration, technology, and creativity while
              developing solutions that solve real-world challenges.
            </p>
          </div>

          <div className="space-y-8 border-l border-[#00D1FF] pl-12">
            <div className="space-y-4">
              <div className="text-xs tracking-[0.3em] text-[#00D1FF] uppercase font-mono">
                02 / Vision
              </div>
              <h3 className="text-4xl leading-tight">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a globally recognized student-led innovation group creating impactful
              technologies for the future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
