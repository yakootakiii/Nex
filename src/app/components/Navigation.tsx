import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
    { label: "PROJECTS", href: "#projects" },
    { label: "THE TEAM", href: "#team" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div
        className={`flex items-center justify-between gap-4 md:gap-8 px-4 md:px-8 py-3 md:py-4 backdrop-blur-md border border-border/50 rounded-full transition-all duration-300 ${
          scrolled ? "bg-background/80" : "bg-background/30"
        }`}
      >
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight">
          Nex
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.65rem] md:text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
