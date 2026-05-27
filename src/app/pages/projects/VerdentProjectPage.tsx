import { motion } from "motion/react";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router";

export function VerdentProjectPage() {
  return (
    <section className="relative px-6 pt-28 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to home
            </Link>

            {/* GitHub logo placeholder link (user will fill in) */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="Verdent GitHub repository"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-colors"
              title="Add your repo link"
            >
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>

          {/* Header */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Project
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] leading-tight tracking-tight">
                Verdent
              </h1>
              <p className="text-base md:text-lg text-muted-foreground italic">
                Smart Campus Sustainability
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              VERDENT is an integrated IoT and AI-driven system designed to transform campuses
              into adaptive, sustainable, and data-driven environments through closed-loop,
              real-time sensing and automatic intervention.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="border border-border/50 p-8">
              <div className="text-xs font-mono text-muted-foreground tracking-wider">ABSTRACT</div>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VERDENT is an integrated IoT and AI-driven system designed to transform
                  campuses into adaptive, sustainable, and data-driven environments. The system
                  combines distributed environmental sensing with automated control mechanisms
                  to monitor, predict, and actively regulate conditions such as carbon dioxide
                  concentration, temperature, and humidity.
                </p>
                <p>
                  Unlike traditional monitoring systems that only provide data, VERDENT
                  introduces a closed-loop architecture that enables real-time, automatic
                  intervention through controlled airflow regulation and intelligent load
                  management.
                </p>
                <p>
                  In addition, the platform supports green infrastructure by providing
                  data-driven insights for optimizing tree placement, airflow corridors, and
                  cooling strategies.
                </p>
                <p>
                  VERDENT improves comfort, reduces energy waste, enhances climate resilience,
                  and enables institutions to make informed sustainability decisions without
                  requiring costly infrastructure redesign.
                </p>
              </div>
            </div>

            <div className="border border-border/50 p-8">
              <div className="text-xs font-mono text-muted-foreground tracking-wider">
                BACKGROUND
              </div>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Campuses are increasingly affected by environmental challenges such as rising
                  temperatures, poor air quality, and inefficient energy usage. These issues
                  are often caused by high population density, inadequate airflow, and
                  infrastructure that was not designed with sustainability in mind.
                </p>
                <p>
                  While some institutions deploy monitoring tools, these systems typically lack
                  the ability to respond to conditions in real time, resulting in delayed
                  action and continued inefficiency.
                </p>
              </div>
            </div>

            <div className="border border-border/50 p-8">
              <div className="text-xs font-mono text-muted-foreground tracking-wider">
                SYSTEM OVERVIEW
              </div>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VERDENT operates as a closed-loop autonomous system composed of four
                  continuous stages:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Sensing – IoT nodes collect environmental data</li>
                  <li>Analysis – The system processes and evaluates conditions</li>
                  <li>Decision – The system determines appropriate responses</li>
                  <li>Action – IoT nodes execute physical interventions</li>
                </ol>
                <p>
                  This cycle enables the campus to function as an adaptive environment capable
                  of responding to real-time conditions without relying solely on human
                  intervention.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  IoT System Design
                </h2>
              </div>

              <div className="grid gap-6">
                <div className="border border-border/50 p-8">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    Smart Micro-Climate Nodes
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Each VERDENT node functions as both a sensor and an actuator, allowing it to
                    not only detect environmental conditions but also respond to them.
                  </p>

                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="border border-border/50 p-6">
                      <div className="text-xs font-mono text-muted-foreground tracking-wider">
                        HARDWARE COMPONENTS
                      </div>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li>Microcontroller: ESP32</li>
                        <li>CO₂ sensor: MH-Z19 or equivalent</li>
                        <li>Temperature and humidity sensor: DHT22</li>
                        <li>Relay module for load control</li>
                        <li>Ventilation fan or airflow device</li>
                        <li>Indicator LEDs</li>
                        <li>Regulated power supply</li>
                      </ul>
                    </div>

                    <div className="border border-border/50 p-6">
                      <div className="text-xs font-mono text-muted-foreground tracking-wider">
                        FUNCTIONAL CAPABILITIES
                      </div>
                      <div className="mt-4 space-y-5 text-muted-foreground leading-relaxed">
                        <div>
                          <div className="text-sm font-semibold text-foreground">
                            A. Environmental Monitoring
                          </div>
                          <p className="mt-2">
                            Each node continuously measures CO₂ levels (ppm), temperature (°C),
                            and humidity (%). Data is transmitted in real time to the central
                            system.
                          </p>
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-foreground">
                            B. Automated Environmental Control
                          </div>
                          <p className="mt-2">
                            When thresholds are exceeded, nodes automatically perform corrective
                            actions:
                          </p>
                          <ul className="mt-3 space-y-2">
                            <li>
                              <span className="text-foreground">Airflow Regulation:</span>
                              <span className="ml-2">
                                activate ventilation fans to improve local air circulation
                              </span>
                            </li>
                            <li>
                              <span className="text-foreground">Controlled Load Management:</span>
                              <span className="ml-2">
                                disconnect non-critical loads to reduce heat and prevent further
                                degradation
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-border/50 p-8">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    Safety & Control Mechanisms
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    To ensure safe operation, the system includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>Control limited to pre-approved non-critical circuits</li>
                    <li>Protection of essential infrastructure</li>
                    <li>Manual override capability</li>
                    <li>Reversible and time-limited actions</li>
                    <li>Configurable thresholds for intervention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
