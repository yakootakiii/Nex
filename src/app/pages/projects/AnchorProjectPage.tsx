import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

export function AnchorProjectPage() {
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
              aria-label="Anchor GitHub repository"
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
                Anchor
              </h1>
              <p className="text-base md:text-lg text-muted-foreground italic">
                AI-Powered Contract Protection
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Anchor is a web and mobile platform that functions as a continuous financial and
              safety companion for migrant workers—delivering preventive protection, personalized
              financial guidance, and community-driven risk intelligence across the migration
              lifecycle.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 border border-border/50 p-6">
                <div className="text-xs font-mono text-muted-foreground tracking-wider">FOCUS</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "AI",
                    "Legal Tech",
                    "NLP",
                    "Worker Protection",
                    "Financial Health",
                    "Crisis Guidance",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border border-border/50 text-muted-foreground tracking-wide uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 border border-border/50 p-6">
                <div className="text-xs font-mono text-muted-foreground tracking-wider">
                  TARGET AUDIENCE + BENEFICIARIES
                </div>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Anchor is designed to support migrant workers across Southeast Asia,
                    particularly Overseas Filipino Workers and other low- to middle-income labor
                    migrants deployed to high-risk employment destinations.
                  </p>
                  <p>
                    Primary beneficiaries include first-time migrant workers, domestic workers,
                    construction workers, caregivers, and service-sector employees who may lack
                    strong legal literacy, financial planning capacity, or access to timely
                    support while abroad.
                  </p>
                  <p>
                    Secondary beneficiaries include migrant families dependent on remittances,
                    ethical recruitment agencies seeking transparency tools, civil society
                    organizations advocating for labor rights, and government institutions
                    responsible for migrant welfare and protection.
                  </p>
                  <p>
                    Southeast Asia remains one of the most migration-intensive regions globally.
                    According to the International Organization for Migration, labor migration
                    continues to expand while structural vulnerabilities persist. Anchor seeks
                    to provide continuous protection throughout the migration lifecycle rather
                    than limiting support to pre-departure seminars or post-crisis intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border/50 p-8">
              <div className="text-xs font-mono text-muted-foreground tracking-wider">
                OVERVIEW OF THE AI-INTEGRATED SOLUTION
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-4xl">
                Anchor is a web and mobile platform that functions as a continuous financial and
                safety companion for migrant workers across four stages of migration:
                pre-departure, arrival, employment, and crisis response. The system integrates
                artificial intelligence across multiple functional layers to deliver preventive
                protection, personalized financial guidance, and community-driven risk
                intelligence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent" />
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Core Features & AI Integration
                </h2>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "AI-Powered Contract Analysis and Simplification",
                    body: [
                      "Users upload their employment contract through image capture or PDF submission. Anchor uses Natural Language Processing models to extract clauses, identify key employment terms, and simplify complex legal language into plain, understandable summaries.",
                      "The system performs AI-driven clause classification to detect potentially risky provisions such as unclear overtime policies, ambiguous termination penalties, salary inconsistencies, or benefit omissions.",
                      "A risk scoring engine evaluates overall contract risk based on predefined labor standards and historical pattern recognition. The output includes a structured summary, flagged clauses, and recommended clarification questions for the worker to raise before signing.",
                      "AI integration: document parsing, semantic analysis, automated clause tagging, and risk modeling.",
                    ],
                  },
                  {
                    title: "AI-Based Wage Monitoring and Anomaly Detection",
                    body: [
                      "After deployment, users input promised compensation details and record actual payments received. The system applies machine learning and rule-based anomaly detection models to identify discrepancies between expected and actual salary.",
                      "Patterns such as delayed payments, recurring unexplained deductions, or underpayment trends are flagged automatically. The system generates contextual alerts and suggests documentation or next steps.",
                      "AI integration: financial anomaly detection, pattern recognition, and predictive risk identification.",
                    ],
                  },
                  {
                    title: "AI-Driven Financial Health and Budgeting Assistant",
                    body: [
                      "Anchor includes a financial management module that helps users track expenses, remittances, savings goals, and debt obligations. AI analyzes spending behavior and income consistency to generate personalized financial health insights.",
                      "If financial stress indicators appear, such as declining savings ratios or increasing debt reliance, the system provides adaptive recommendations to improve resilience.",
                      "AI integration: behavioral analysis, predictive financial stress detection, and personalized advisory generation.",
                    ],
                  },
                  {
                    title: "Community Intelligence and Risk Aggregation",
                    body: [
                      "Anchor aggregates anonymized contract flags, wage discrepancies, and user-reported issues to generate community-level insights.",
                      "AI processes aggregated data to detect emerging risk patterns associated with specific employers, job categories, or destination countries. Without revealing personal data, the platform can notify users if repeated complaints or contract risks are linked to a particular employer.",
                      "This transforms individual reports into collective early-warning intelligence.",
                      "AI integration: pattern clustering, trend detection, and predictive risk modeling at the community level.",
                    ],
                  },
                  {
                    title: "AI-Assisted Crisis Guidance and Triage",
                    body: [
                      "In situations of distress, users describe their circumstances within the app. An AI-driven triage assistant categorizes the severity of the issue and recommends structured next steps, including documentation preparation, embassy contact guidance, or referral to official support channels.",
                      "The system does not replace legal authorities but functions as an intelligent navigation tool that directs workers efficiently toward appropriate institutional support.",
                      "AI integration: text classification, intent detection, and structured response generation.",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="p-8 space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="space-y-3 text-muted-foreground leading-relaxed">
                        {item.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 text-sm text-accent uppercase tracking-wide">
                          Learn more
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-accent/0 group-hover:bg-accent/60 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
