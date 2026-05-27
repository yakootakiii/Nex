import { motion } from "motion/react";
import { Trophy, Award, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "First Runner-Up & Best Pitch Presentation",
      event: "DICT Philippine Startup Challenge X (CALABARZON)",
      year: "2024",
      icon: Trophy,
    },
    {
      title: "Champion",
      event: "Philippine Innovation Conference 2025: HACK THE FUTURE – Smart Batangas Province",
      year: "2025",
      icon: Award,
    },
    {
      title: "Top 10 Finalists",
      event: "ImaGnation 2025",
      year: "2025",
      icon: Star,
    },
    {
      title: "Second Prize",
      event: "10th Huawei ICT Competition National Finals (Innovation Track)",
      year: "2024",
      icon: Award,
    },
    {
      title: "Champion",
      event: "SustainaXion: The X-Factor to Sustainability in Action Pitching Competition",
      year: "2024",
      icon: Trophy,
    },
  ];

  return (
    <section id="achievements" className="relative py-32 px-6 border-t border-border/30">
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
                Achievements
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-tight max-w-4xl">
              Recognized for <span className="text-accent">Excellence</span>
            </h2>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 p-8 items-center">
                  <div className="flex items-center gap-6">
                    <achievement.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    <div className="text-6xl font-mono text-muted-foreground/20 group-hover:text-accent/20 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold leading-tight">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.event}</p>
                  </div>

                  <div className="text-sm font-mono text-accent tracking-wider">
                    {achievement.year}
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
