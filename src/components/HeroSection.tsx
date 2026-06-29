import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/codewarf",
    icon: Github,
    color: "var(--pixel-pink)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewarf",
    icon: Linkedin,
    color: "var(--pixel-blue)",
  },
  {
    label: "Twitter",
    href: "https://x.com/codewarf",
    icon: Twitter,
    color: "var(--pixel-cyan)",
  },
  {
    label: "Email",
    href: "mailto:park1bum@gmail.com",
    icon: Mail,
    color: "var(--pixel-purple)",
  },
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[var(--pixel-pink)] to-[var(--pixel-purple)] rounded-3xl p-1 shadow-lg shadow-[var(--pixel-pink)]/20">
            <div className="w-full h-full bg-[var(--card)] rounded-3xl flex items-center justify-center">
              <div className="text-6xl">👾</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-['Press_Start_2P'] text-[var(--pixel-pink)] mb-4" style={{ fontSize: '14px', lineHeight: '1.8' }}>
            &lt;developer /&gt;
          </div>
          <h1 className="font-['DM_Sans'] mb-4" style={{ fontSize: '56px', fontWeight: '700', lineHeight: '1.2' }}>
            Hi, I'm <span className="bg-gradient-to-r from-[var(--pixel-pink)] via-[var(--pixel-purple)] to-[var(--pixel-blue)] bg-clip-text text-transparent">Codewarf</span>
          </h1>
          <p className="font-['DM_Sans'] text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            최신 웹 기술을 활용하여 픽셀 단위까지 완벽한 사용자 경험을 구현하는 풀스택 개발자입니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a href="#skills" className="px-8 py-4 bg-[var(--pixel-pink)] hover:bg-[var(--pixel-pink)]/80 text-[var(--background)] font-['Press_Start_2P'] rounded-xl shadow-lg shadow-[var(--pixel-pink)]/30 hover:shadow-[var(--pixel-pink)]/50 transition-all hover:-translate-y-1" style={{ fontSize: '10px' }}>
            START GAME
          </a>
          <a href="#projects" className="px-8 py-4 bg-transparent border-2 border-[var(--pixel-blue)] text-[var(--pixel-blue)] hover:bg-[var(--pixel-blue)]/10 font-['Press_Start_2P'] rounded-xl transition-all hover:-translate-y-1" style={{ fontSize: '10px' }}>
            VIEW PROJECTS
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map(({ label, href, icon: Icon, color }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              whileHover={{ scale: 1.2, y: -4 }}
              className="w-12 h-12 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center hover:shadow-lg transition-shadow"
              style={{
                boxShadow: `0 0 20px ${color}30`,
              }}
            >
              <Icon size={20} style={{ color }} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
