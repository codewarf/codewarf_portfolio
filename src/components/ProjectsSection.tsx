import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";

export function ProjectsSection() {
  const projects = [
    {
      title: "훌리악 웹사이트",
      description: "훌리악 사내 웹사이트",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["coldFusion", "Node.js", "Typescript", "framer-motion"],
      // github: "#",
      demo: "https:huliac.com",
    },
    {
      title: "국립중앙 과학관 AI 로드맵",
      description: "AI를 활용한 설문조사 및 전시품 추천 경로 웹앱",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["coldFusion", "Node.js", "Typescript", "framer-motion"],
      // github: "#",
      demo: "https://exhibition-ai-roadmap.netlify.app/",
    },
    {
      title: "표창원 범죄연구소 과학수사 체험앱",
      description: "실제 범죄형장 기록으로 체험해보는 간단한 앱",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React-native", "Node.js", "Typescript", "framer-motion"],
      // github: "#",
      demo: "https://pics-forensic.netlify.app/",
    },
    {
      title: "베네치아 게임",
      description: "한컴 소나기 타이핑게임류의 웹 타이핑 게임 6인대전",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "Typescript", "framer-motion", "Soket-io"],
      // github: "#",
      demo: "https://venezia-gmae.netlify.app/",
    },
    {
      title: "사운드브릿지",
      description: "말소리 장애아동을 위한 발음훈련 연구프로그램 녹음 웹앱",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["coldFusion", "Tailwind", "framer-motion", "Typescript", "mySql"],
      // github: "#",
      demo: "https://soundbridge.kr/",
    },
    {
      title: "보물찾기 어드벤처",
      description: "전시장에 숨어잇는 QR을찾아 퀴즈를 풀며 보물을 획득하는 웹앱 게임",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      tags: ["Next.js", "Tailwind", "framer-motion "],
      // github: "#",
      demo: "http://dmec.huliac.com/",
    },
    {
      title: "deep sea",
      description: "심해 생물 스크롤 키오스크",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["React", "Styled-component", "framer-motion"],
      // github: "#",
      demo: "https://into-deep-sea.netlify.app/",
    },
    {
      title: "ii-Yeonhee",
      description: "체험전시 결과지 웹앱",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["React", "Styled-component", "framer-motion","React-query"],
      // github: "#",
      demo: "https://iichapter2.netlify.app/",
    },
  ];

  return (
    <section className="px-6 py-20 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--pixel-pink)]/10 border border-[var(--pixel-pink)]/20 mb-4">
            <span className="font-['Press_Start_2P'] text-[var(--pixel-pink)]" style={{ fontSize: '10px' }}>
              💎 PROJECTS
            </span>
          </div>
          <h2 className="font-['DM_Sans'] mb-4" style={{ fontSize: '40px', fontWeight: '700' }}>
            Featured Work
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            제가 만든 주요 프로젝트 모음입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}