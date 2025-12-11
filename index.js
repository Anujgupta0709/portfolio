import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 'nexus',
    title: 'Nexus AI Assistant',
    desc: 'Conversational AI assistant (Flask / JS) — voice, contextual memory, code & debug helper.',
    img: '/projects/nexus.webp',
    bullets: [
      'Voice & text chat with context windows',
      'Contextual memory & session persistence',
      'Deploy-ready UI with conversational flows'
    ],
    tech: 'Flask • JS • WebSocket • GPT-style API',
    outcome: 'Improved developer productivity in pilot flows (estimated +25%).'
  },
  {
    id: 'arogya',
    title: 'Arogya Nexus',
    desc: 'AI-powered healthcare booking & provider matching platform with admin dashboards.',
    img: '/projects/arogya.webp',
    bullets: [
      'Intelligent provider matching & availability sync',
      'Secure appointment flows & role-based dashboards',
      'Admin analytics & performance reports'
    ],
    tech: 'React • Node.js • PostgreSQL • OAuth',
    outcome: 'Pilot improved booking efficiency by ~20%.'
  },
  {
    id: 'portfolio',
    title: 'This Portfolio (Current Project)',
    desc: 'Animated, SEO-optimized portfolio built with Next.js + Tailwind + Framer Motion.',
    img: '/projects/portfolio.webp',
    bullets: [
      'Animated hero + micro-interactions',
      '3 deep case studies with demo assets',
      'Optimized for Core Web Vitals & SEO'
    ],
    tech: 'Next.js • Tailwind • Framer Motion',
    outcome: 'Designed to convert recruiters & drive interviews.'
  }
]

function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#061124] to-[#0B1320] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x:-40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{duration:0.6}}>
          <div className="text-sm text-accentA font-semibold mb-3">MCA Student • Software Engineer</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi — I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentA to-accentB">Anuj baby</span>.
            I build production-ready trading & AI frontends.
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            I design animated, data-driven interfaces and developer tools that reduce analysis time and improve decision making.
            Featured projects: Nexus AI Assistant, Arogya Nexus & this portfolio.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#case-studies" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accentA to-accentB rounded-lg font-bold text-black">See case studies</a>
            <a href="mailto:anujgupta0709@gmail.com" className="inline-flex items-center px-4 py-2 border border-white/10 rounded-lg text-white/90">Contact</a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-extrabold">30%</div>
              <div className="text-sm text-slate-300">Avg analysis time reduction</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-extrabold">3+</div>
              <div className="text-sm text-slate-300">Deep case studies</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-extrabold">10+</div>
              <div className="text-sm text-slate-300">Projects & prototypes</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{duration:0.6}} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/hero/hero-loop.webp" width={720} height={420} alt="hero demo" />
          </div>
          <div className="mt-4 text-sm text-slate-300">Short demo — hero animation placeholder (replace with MP4 loop)</div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#071427] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.article whileHover={{ y:-6 }} className="bg-white/3 p-5 rounded-2xl" key={p.id}>
              <div className="w-full h-40 relative rounded-lg overflow-hidden">
                <Image src={p.img} alt={p.title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="font-bold mt-4">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
              <div className="mt-3 text-xs text-slate-300">
                <strong>Tech:</strong> {p.tech}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 bg-gradient-to-b from-[#071427] to-[#041022] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Deep Case Studies</h2>

        {/* Case 1 */}
        <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
          <div className="md:col-span-2 bg-white/3 p-6 rounded-2xl">
            <div className="inline-block bg-gradient-to-r from-accentB to-accentC text-black px-3 py-1 rounded-full font-bold">Case Study 1</div>
            <h3 className="text-2xl font-bold mt-4">Nexus AI Assistant — Contextual Developer Assistant</h3>
            <p className="mt-3 text-slate-300">
              <strong>Problem:</strong> Developers and students needed an assistant that could fetch code snippets, analyze logs and provide contextual help while coding or debugging.
            </p>
            <h4 className="mt-4 font-semibold">Approach</h4>
            <ul className="list-disc ml-6 mt-2 text-slate-300">
              <li>Real-time chat UI with session memory and voice input</li>
              <li>Backend using Flask + WebSocket to bridge model API calls and streaming responses</li>
              <li>Context windows + saved sessions for multi-step debugging</li>
            </ul>
            <h4 className="mt-4 font-semibold">Outcome</h4>
            <p className="text-slate-300">Pilot users reported ~25% faster debugging cycles and higher clarity when resolving errors.</p>
            <p className="mt-4 text-slate-400"><strong>Hindi summary:</strong> Nexus AI Assistant se debugging aur code search tezi se ho paya — users ne time bachaya.</p>
          </div>

          <aside className="bg-white/4 p-5 rounded-2xl">
            <div className="w-full h-40 relative rounded-lg overflow-hidden">
              <Image src="/projects/nexus.webp" alt="nexus" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-sm text-slate-300">Assets: UI screenshots, demo video, GitHub link (attach real links to replace placeholders)</div>
          </aside>
        </div>

        {/* Case 2: Arogya */}
        <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
          <div className="md:col-span-2 bg-white/3 p-6 rounded-2xl">
            <div className="inline-block bg-gradient-to-r from-accentB to-accentC text-black px-3 py-1 rounded-full font-bold">Case Study 2</div>
            <h3 className="text-2xl font-bold mt-4">Arogya Nexus — Smart Healthcare Booking</h3>
            <p className="mt-3 text-slate-300"><strong>Problem:</strong> Patients faced friction finding available providers and booking appointments; admin lacked insights into cancellations.</p>
            <h4 className="mt-4 font-semibold">Approach</h4>
            <ul className="list-disc ml-6 mt-2 text-slate-300">
              <li>Matching algorithm for provider selection and availability sync</li>
              <li>Secure booking flow and OTP-based verification</li>
              <li>Admin dashboard with analytics and exportable reports</li>
            </ul>
            <h4 className="mt-4 font-semibold">Outcome</h4>
            <p className="text-slate-300">Pilot increased booking efficiency by ~20% and reduced no-shows via reminders.</p>
            <p className="mt-4 text-slate-400"><strong>Hindi summary:</strong> Arogya Nexus se bookings zyada sahi hue aur admin ko insights mile.</p>
          </div>

          <aside className="bg-white/4 p-5 rounded-2xl">
            <div className="w-full h-40 relative rounded-lg overflow-hidden">
              <Image src="/projects/arogya.webp" alt="arogya" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-sm text-slate-300">Assets: dashboard screenshots, analytics export (placeholders)</div>
          </aside>
        </div>

        {/* Case 3: Portfolio */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-white/3 p-6 rounded-2xl">
            <div className="inline-block bg-gradient-to-r from-accentB to-accentC text-black px-3 py-1 rounded-full font-bold">Case Study 3</div>
            <h3 className="text-2xl font-bold mt-4">Portfolio — Design & Delivery</h3>
            <p className="mt-3 text-slate-300"><strong>Problem:</strong> Job-seeking students need a professional portfolio that demonstrates depth & production readiness and converts recruiters quickly.</p>
            <h4 className="mt-4 font-semibold">Approach</h4>
            <ul className="list-disc ml-6 mt-2 text-slate-300">
              <li>High-impact hero, animated components, and case studies with metrics</li>
              <li>SEO & OG images for discoverability; PDF export for attachments</li>
              <li>Performance optimizations & accessibility checks</li>
            </ul>
            <h4 className="mt-4 font-semibold">Outcome</h4>
            <p className="text-slate-300">A recruiter-focused site that highlights engineering depth and moves the candidate to interviews quickly.</p>
            <p className="mt-4 text-slate-400"><strong>Hindi summary:</strong> Portfolio se recruiters par achha impression padta hai aur interview calls milte hain.</p>
          </div>

          <aside className="bg-white/4 p-5 rounded-2xl">
            <div className="w-full h-40 relative rounded-lg overflow-hidden">
              <Image src="/projects/portfolio.webp" alt="portfolio" layout="fill" objectFit="cover" />
            </div>
            <div className="mt-4 text-sm text-slate-300">Assets: final portfolio screenshots & PDF (generated)</div>
          </aside>
        </div>

      </div>
    </section>
  )
}

function ResumeContact() {
  return (
    <section id="resume" className="py-16 bg-[#041022] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Resume & Contact</h2>
        <div className="bg-white/5 p-6 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold">Timeline</h3>
              <ul className="mt-4 text-slate-300">
                <li><strong>2024–Present</strong> — MCA Student — Focus: Software Engineering, Data Viz</li>
                <li className="mt-2"><strong>2023</strong> — XAUUSD Dashboard — React + D3</li>
                <li className="mt-2"><strong>2022</strong> — SMC Visualizer — Figma prototype</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Contact</h3>
              <p className="mt-4 text-slate-300">Email: <a href="mailto:anujgupta0709@gmail.com" className="text-accentA">anujgupta0709@gmail.com</a></p>
              <p className="mt-2 text-slate-300">GitHub: <a href="https://github.com/Anujgupta0709" className="text-accentA">Anujgupta0709</a></p>
              <p className="mt-2 text-slate-300">LinkedIn: <a href="https://www.linkedin.com/in/anuj-gupta-620b52379/" className="text-accentA">Anuj Gupta</a></p>
              <div className="mt-4 flex gap-3">
                <a className="px-4 py-2 bg-accentA rounded-lg text-black font-bold" href="/AnujBaby_Resume.pdf" download>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <CaseStudies />
      <ResumeContact />
      <footer className="py-8 text-center bg-[#021124] text-slate-400">
        © {new Date().getFullYear()} Anuj baby — MCA Student & Software Engineer
      </footer>
    </div>
  )
}
