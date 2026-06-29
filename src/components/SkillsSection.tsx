import { motion } from "motion/react";
import { Code2, Database, Palette, Zap, Globe, Shield } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: Palette,
      color: "var(--pixel-pink)",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Storybook", "Motion", "Styled-component"],
    },
    {
      name: "Backend",
      icon: Database,
      color: "var(--pixel-blue)",
      skills: ["Node.js", "ColdFusion", "mySQL", "Firebase", "REST APIs"],
    },
    {
      name: "DevOps",
      icon: Zap,
      color: "var(--pixel-purple)",
      skills: ["Docker", "CI/CD", "IIS", "GitHub Actions", "Nginx"],
    },
    {
      name: "Tools",
      icon: Code2,
      color: "var(--pixel-cyan)",
      skills: ["Git", "VS Code", "Figma", "Chrome DevTools", "Photoshop", "Blender", "SketchUp"],
    },
    {
      name: "Web3",
      icon: Globe,
      color: "var(--pixel-yellow)",
      skills: ["SEO", "GEO", "Web3.js", "i18N", "a11y"],
    },
    {
      name: "Security",
      icon: Shield,
      color: "var(--pixel-green)",
      skills: ["OAuth", "Encryption", "HTTPS", "Input Validation", "CORS"],
    },
  ];

  return (
    <section className="px-6 py-20 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--pixel-blue)]/10 border border-[var(--pixel-blue)]/20 mb-4">
            <span className="font-['Press_Start_2P'] text-[var(--pixel-blue)]" style={{ fontSize: '10px' }}>
              ⚡ SKILLS
            </span>
          </div>
          <h2 className="font-['DM_Sans'] mb-4" style={{ fontSize: '40px', fontWeight: '700' }}>
            Tech Stack
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            제가 사용하는 기술 및 툴들입니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] hover:border-opacity-50 transition-all"
              style={{
                boxShadow: `0 4px 20px ${category.color}10`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${category.color}20`,
                  }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>
                <h3 className="font-['DM_Sans']" style={{ fontSize: '18px', fontWeight: '600' }}>
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 rounded-lg bg-[var(--muted)] text-[var(--foreground)] transition-colors hover:bg-[var(--muted-foreground)]/20"
                    style={{ fontSize: '12px' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}