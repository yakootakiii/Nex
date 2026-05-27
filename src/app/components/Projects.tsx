import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Anchor",
      tagline: "AI-Powered Contract Protection",
      description:
        "AI-powered contract analysis platform protecting overseas workers from predatory contracts using intelligent document analysis and clause detection.",
      focus: ["AI", "Legal Tech", "NLP", "Worker Protection"],
      color: "#7C3AED",
    },
    {
      name: "Verdent",
      tagline: "Smart Campus Sustainability",
      description:
        "An IoT-powered smart campus platform that detects campus hotspots and autonomously manages electricity usage using environmental and human-density data.",
      focus: ["IoT", "Sustainability", "Automation", "Smart Campus"],
      color: "#00FFB2",
    },
    {
      name: "Persona",
      tagline: "Adaptive Sensory Experience",
      description:
        "A smart sensory device capable of generating adaptive scents based on the user's mood, weather conditions, and environmental temperature.",
      focus: ["Wellness Tech", "Smart Devices", "Human-Centered Design"],
      color: "#00D1FF",
    },
    {
      name: "Pulse",
      tagline: "AI-Augmented Healthcare Management",
      description:
        "An AI-augmented hospital management and emergency routing platform providing real-time visibility into healthcare capacity with smart chatbot, predictive analytics, and digital twin simulations.",
      focus: ["Healthcare AI", "Smart Cities", "Emergency Response"],
      color: "#EF4444",
    },
    {
      name: "Aurora",
      tagline: "Intelligent Traffic Optimization",
      description:
        "An AI-powered traffic management system that dynamically manages traffic lights using real-time traffic density analysis.",
      focus: ["AI", "Urban Mobility", "Smart Cities", "Traffic Optimization"],
      color: "#A78BFA",
    },
    {
      name: "Civilian",
      tagline: "Blockchain-Powered Disaster Resilience",
      description:
        "An IoT-based disaster resilience platform using ESP32 sensors, LoRa connectivity, and blockchain technology for secure emergency monitoring and disaster response.",
      focus: ["IoT", "Blockchain", "Disaster Tech", "Emergency Systems"],
      color: "#60A5FA",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-20"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Projects
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight max-w-4xl">
              Innovation in <span className="text-accent">Action</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-muted-foreground tracking-wider">
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight">{project.name}</h3>
                      <p className="text-sm text-muted-foreground italic">{project.tagline}</p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed min-h-[4.5rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.focus.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 border border-border/50 text-muted-foreground tracking-wide uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="group/btn flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors uppercase tracking-wide">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: project.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
