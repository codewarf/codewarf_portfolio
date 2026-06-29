import { motion } from "motion/react";
import { GithubIcon, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  index: number;
}

export function ProjectCard({ title, description, image, tags, github, demo, index }: ProjectCardProps) {
  const colors = ["var(--pixel-pink)", "var(--pixel-blue)", "var(--pixel-purple)", "var(--pixel-cyan)"];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-opacity-50 transition-all"
      style={{
        boxShadow: `0 4px 20px ${accentColor}10`,
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${accentColor}15, transparent 40%)`,
        }}
      />

      <div className="aspect-video overflow-hidden bg-[var(--muted)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-['DM_Sans']" style={{ fontSize: '20px', fontWeight: '600' }}>
            {title}
          </h3>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                className="w-8 h-8 rounded-lg bg-[var(--muted)] hover:bg-[var(--pixel-pink)] hover:text-[var(--background)] flex items-center justify-center transition-colors"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                className="w-8 h-8 rounded-lg bg-[var(--muted)] hover:bg-[var(--pixel-blue)] hover:text-[var(--background)] flex items-center justify-center transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-[var(--muted-foreground)] mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg font-['Press_Start_2P']"
              style={{
                fontSize: '8px',
                backgroundColor: `${accentColor}20`,
                color: accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}