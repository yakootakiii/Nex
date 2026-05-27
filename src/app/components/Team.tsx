import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Team() {
  const roles = [
    "AI Engineers",
    "Full-Stack Developers",
    "UI/UX Designers",
    "Researchers",
    "IoT Engineers",
    "Project Leads",
  ];

  const teamMembers = [
    {
      name: "Team Member",
      role: "AI Engineer",
      specialties: ["Machine Learning", "NLP", "Computer Vision"],
    },
    {
      name: "Team Member",
      role: "Full-Stack Developer",
      specialties: ["React", "Node.js", "Cloud Infrastructure"],
    },
    {
      name: "Team Member",
      role: "IoT Engineer",
      specialties: ["ESP32", "LoRa", "Sensor Networks"],
    },
    {
      name: "Team Member",
      role: "UI/UX Designer",
      specialties: ["Design Systems", "Prototyping", "User Research"],
    },
    {
      name: "Team Member",
      role: "Researcher",
      specialties: ["AI Ethics", "Smart Cities", "Sustainability"],
    },
    {
      name: "Team Member",
      role: "Project Lead",
      specialties: ["Strategy", "Hackathons", "Team Management"],
    },
  ];

  return (
    <section id="team" className="relative py-32 px-6 border-t border-border/30">
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
                The Team
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight max-w-4xl">
              Meet the <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A diverse collective of talented students pushing the boundaries of technology through
              collaboration, creativity, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-8 space-y-6">
                  <div className="aspect-square bg-muted/20 border border-border/30 flex items-center justify-center">
                    <div className="text-6xl text-muted-foreground/20 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-accent">{member.role}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
