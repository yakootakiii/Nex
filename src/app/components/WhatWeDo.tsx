import { motion } from "motion/react";
import { Brain, Cpu, Building2, FlaskConical, Factory, Sprout } from "lucide-react";

export function WhatWeDo() {
  const areas = [
    {
      icon: Brain,
      title: "AI & Emerging Technologies",
      description: "Pioneering artificial intelligence solutions for tomorrow's challenges",
    },
    {
      icon: Cpu,
      title: "IoT & Smart Systems",
      description: "Building connected devices that transform how we interact with our environment",
    },
    {
      icon: Building2,
      title: "Smart-City Innovation",
      description: "Creating intelligent urban solutions for sustainable city infrastructure",
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
      description: "Pushing the boundaries of technology through experimental research",
    },
    {
      icon: Factory,
      title: "Hackathons & Competitions",
      description: "Competing at the highest level to solve real-world problems under pressure",
    },
    {
      icon: Sprout,
      title: "Sustainability Solutions",
      description: "Developing eco-friendly technologies for a sustainable future",
    },
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                What We Do
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight">
              Areas of <span className="text-accent">Innovation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-border/50 p-8 hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/30">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-6">
                  <area.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold leading-tight">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
