import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-20"
        >
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-tight">
                Let's Build the <span className="text-accent">Future</span> Together
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Interested in collaborating or building innovative solutions with us? We'd love to
                hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground">
                  Connect With Us
                </h3>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 border border-border/50 group-hover:border-accent flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 border border-border/50 group-hover:border-accent flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 border border-border/50 group-hover:border-accent flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 border border-border/50 group-hover:border-accent flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">contact@nex.innovation</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs tracking-widest uppercase text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs tracking-widest uppercase text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-widest uppercase text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your idea or collaboration..."
                />
              </div>

              <button
                type="submit"
                className="group relative px-8 py-4 border border-accent text-accent overflow-hidden transition-all hover:text-background w-full"
              >
                <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2 text-sm tracking-wider uppercase">
                  Send Message
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-sm text-muted-foreground">
            © 2024 Nex. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            Built by students
          </div>
        </motion.div>
      </div>
    </section>
  );
}
