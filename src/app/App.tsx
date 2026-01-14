import { motion } from "motion/react";
import { ScrollReveal } from "./components/scroll-reveal";
import { AnimatedNumber } from "./components/animated-number";
import { 
  Target,
  Users,
  TrendingUp,
  Shield,
  Brain,
  Eye,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Zap,
  AlertTriangle
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] antialiased">
      
      {/* SECTION 1 - HERO */}
      <section className="bg-white pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <motion.h1 
                className="text-6xl font-semibold mb-6 leading-[1.1] text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Albert Achieves Rapid, High-Quality User Growth with Optivads
              </motion.h1>
              
              <motion.p 
                className="text-lg text-[#8F8F8F] mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Fintech user acquisition scaled with controlled fraud (2–5%) and full MMP validation
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="px-4 py-2 border border-[#E0E0E0] rounded-lg text-sm text-[#8F8F8F] uppercase tracking-wide">
                  Vertical: Fintech / Budgeting
                </span>
                <span className="px-4 py-2 border border-[#E0E0E0] rounded-lg text-sm text-[#8F8F8F] uppercase tracking-wide">
                  Platforms: iOS & Android
                </span>
                <span className="px-4 py-2 border border-[#E0E0E0] rounded-lg text-sm text-[#8F8F8F] uppercase tracking-wide">
                  Market: United States
                </span>
                <span className="px-4 py-2 border border-[#E0E0E0] rounded-lg text-sm text-[#8F8F8F] uppercase tracking-wide">
                  MMP: Branch
                </span>
              </motion.div>
            </div>
            
            {/* Right Column - Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border border-[#E0E0E0] rounded-2xl p-8 bg-white shadow-sm">
                <h3 className="text-base font-semibold mb-6 text-black">Campaign Performance Overview</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="border border-[#E0E0E0] rounded-xl p-6 hover:border-[#007BFF] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-xs text-[#8F8F8F] mb-2 uppercase tracking-wide">Signups</div>
                    <div className="text-4xl font-semibold text-black mb-1">
                      <AnimatedNumber value={140} />
                    </div>
                    <div className="text-xs text-[#8F8F8F]">From 5 baseline</div>
                  </motion.div>
                  
                  <motion.div 
                    className="border border-[#E0E0E0] rounded-xl p-6 hover:border-[#007BFF] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-xs text-[#8F8F8F] mb-2 uppercase tracking-wide">Instant Signups</div>
                    <div className="text-4xl font-semibold text-black mb-1">
                      <AnimatedNumber value={167} />
                    </div>
                    <div className="text-xs text-[#8F8F8F]">From 10 baseline</div>
                  </motion.div>
                  
                  <motion.div 
                    className="border border-[#E0E0E0] rounded-xl p-6 hover:border-[#007BFF] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-xs text-[#8F8F8F] mb-2 uppercase tracking-wide">Fraud Rate</div>
                    <div className="text-4xl font-semibold text-black mb-1">2–5%</div>
                    <div className="text-xs text-[#8F8F8F]">Industry benchmark</div>
                  </motion.div>
                  
                  <motion.div 
                    className="border border-[#E0E0E0] rounded-xl p-6 hover:border-[#007BFF] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-xs text-[#8F8F8F] mb-2 uppercase tracking-wide">Attribution</div>
                    <div className="text-4xl font-semibold text-black mb-1">100%</div>
                    <div className="text-xs text-[#8F8F8F]">MMP validated</div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - OVERVIEW */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Analytical Paragraph */}
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-black mb-6">Overview</h2>
                <p className="text-lg text-[#000000] leading-relaxed">
                  Quality-first acquisition strategy that prioritized high-intent users over volume.
                </p>
                <p className="text-lg text-[#000000] leading-relaxed">
                  One-month controlled scaling period with continuous fraud monitoring and attribution validation.
                </p>
                <p className="text-lg text-[#000000] leading-relaxed">
                  Fraud stability maintained at 2–5% throughout campaign lifecycle.
                </p>
                <p className="text-lg text-[#000000] leading-relaxed">
                  All conversions fully validated through Branch MMP integration.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Right - Key Focus Areas */}
            <ScrollReveal delay={0.2}>
              <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-black mb-6 uppercase tracking-wide text-[#8F8F8F] text-sm">
                  Key Focus Areas
                </h3>
                <div className="space-y-4">
                  {[
                    "High-intent users",
                    "Attribution accuracy",
                    "Predictable scaling",
                    "Risk control"
                  ].map((focus, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3 p-4 hover:bg-[#F5F5F5] rounded-lg transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <CheckCircle className="w-6 h-6 text-[#007BFF] flex-shrink-0" />
                      <span className="text-lg text-black">{focus}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 - OBJECTIVES */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Objectives</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "iOS & Android Growth", desc: "Cross-platform expansion" },
              { icon: CheckCircle, title: "Completed & Instant Signups", desc: "Dual conversion tracking" },
              { icon: TrendingUp, title: "High-LTV Acquisition", desc: "Quality over volume" },
              { icon: Shield, title: "Fraud & Attribution Integrity", desc: "Clean, validated data" }
            ].map((objective, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
                  <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 flex flex-col">
                    <objective.icon className="w-12 h-12 text-[#007BFF] mb-4 stroke-[1.5]" />
                    <h3 className="text-lg font-semibold text-black mb-3 min-h-[3.5rem] flex items-start">{objective.title}</h3>
                    <p className="text-[#8F8F8F]">{objective.desc}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - CHALLENGE */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Challenge</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  "Fintech apps face elevated fraud exposure compared to other verticals",
                  "Balancing quality requirements with growth velocity targets",
                  "Attribution pressure intensifies during rapid scaling phases",
                  "Maintaining campaign discipline while expanding budget allocation"
                ].map((challenge, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-start gap-4 pb-6 border-b border-[#E0E0E0] last:border-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <AlertTriangle className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                    <p className="text-lg text-black leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 - STRATEGY & EXECUTION */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Strategy & Execution</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: 1, 
                title: "Discovery", 
                period: "Days 1–7",
                items: ["Audience & geo signals", "Early quality validation"]
              },
              { 
                step: 2, 
                title: "Testing", 
                period: "Days 1–10",
                items: ["Creative & funnel A/B tests", "Early fraud pattern detection"]
              },
              { 
                step: 3, 
                title: "Scaling", 
                period: "From Day 10",
                items: ["Budget expansion", "Continuous quality governance"]
              }
            ].map((phase, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#007BFF] text-white flex items-center justify-center text-xl font-semibold">
                        {phase.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black">{phase.title}</h3>
                        <p className="text-sm text-[#8F8F8F] uppercase tracking-wide">{phase.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#007BFF] mt-2.5 flex-shrink-0" />
                          <span className="text-[#000000]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FRAUD & QUALITY CONTROLS */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Fraud & Quality Controls</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "CTIT Filtering", detail: "<10s blocked" },
              { title: "Click-per-IP Limits", detail: "Pattern detection" },
              { title: "Device & IP Deduplication", detail: "Automated filtering" },
              { title: "Branch MMP Validation", detail: "Full integration" }
            ].map((control, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
                  <Card className="bg-white border border-[#E0E0E0] rounded-xl p-6 text-center hover:border-[#007BFF] transition-all duration-300 h-full flex flex-col">
                    <CheckCircle className="w-10 h-10 text-[#007BFF] mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-black mb-2 min-h-[3.5rem] flex items-center justify-center">{control.title}</h4>
                    <p className="text-sm text-[#8F8F8F]">{control.detail}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal>
            <div className="bg-[#F5F5F5] border-l-4 border-[#007BFF] rounded-lg p-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <p className="text-lg text-black leading-relaxed">
                  Fraud consistently controlled between <strong>2–5%</strong>, aligned with fintech benchmarks and industry standards.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7 - RESULTS */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Results</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Signups", from: "5", to: "140", change: "+2,700%" },
              { label: "Instant Signups", from: "10", to: "167", change: "+1,570%" },
              { label: "Fraud Rate", value: "2–5%", status: "Controlled" },
              { label: "Attribution", value: "100%", status: "Validated" }
            ].map((result, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div 
                  className="text-center h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-[#8F8F8F] mb-3 uppercase tracking-wide">{result.label}</div>
                      {result.from && result.to ? (
                        <>
                          <div className="text-5xl font-semibold text-[#007BFF] mb-2">
                            <AnimatedNumber value={parseInt(result.to)} />
                          </div>
                          <div className="text-sm text-[#8F8F8F] mb-2">From {result.from} baseline</div>
                        </>
                      ) : (
                        <>
                          <div className="text-5xl font-semibold text-[#007BFF] mb-2">{result.value}</div>
                          <div className="text-sm text-[#8F8F8F] mb-2">{result.status}</div>
                        </>
                      )}
                    </div>
                    {result.change && (
                      <div className="text-lg font-semibold text-[#007BFF] mt-2">{result.change}</div>
                    )}
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - KEY TAKEAWAYS */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-16">Key Takeaways</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Validate Before Scaling", desc: "Quality signals must be established before budget expansion" },
              { icon: Target, title: "Early-Funnel Discipline", desc: "Fraud prevention starts at traffic acquisition" },
              { icon: Shield, title: "Fraud Governance Enables Growth", desc: "Clean attribution unlocks confident scaling" },
              { icon: TrendingUp, title: "LTV Beats Volume", desc: "High-quality users compound over time" }
            ].map((takeaway, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
                  <Card className="bg-white border border-[#E0E0E0] rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 flex flex-col">
                    <takeaway.icon className="w-12 h-12 text-[#007BFF] mb-4 stroke-[1.5]" />
                    <h3 className="text-lg font-semibold text-black mb-3 min-h-[3.5rem] flex items-start">{takeaway.title}</h3>
                    <p className="text-[#8F8F8F] leading-relaxed">{takeaway.desc}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - CONCLUSION */}
      <section className="bg-white py-20 pb-24">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-black text-center mb-12">Conclusion</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-lg text-[#000000] leading-relaxed text-center">
              <p>
                This case study demonstrates the importance of <strong>trust, predictability, and sustainable scaling</strong> in fintech user acquisition.
              </p>
              <p>
                By maintaining strict fraud controls and attribution validation, Albert achieved <strong>28x growth in signups</strong> while keeping fraud within industry benchmarks.
              </p>
              <p>
                The combination of quality-first strategy and continuous optimization enabled Albert to scale with confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}