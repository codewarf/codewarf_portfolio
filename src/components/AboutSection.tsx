import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function AboutSection() {
  const timeline = [
    { year: "2022", event: "코딩 여정을 시작했습니다" },
    { year: "2023", event: "IT 스타트업에 프론트엔드 개발자로 입사했습니다." },
    { year: "2024", event: "첫번째 프리랜서 프로젝트" },
    { year: "2025", event: "인터랙티브한 웹 개발의 다양한 시도 " },
    { year: "2026", event: "현재 멋진 것들을 만들고 있어요 🚀" },
  ];

  return (
    <section className="px-6 py-20 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--pixel-purple)]/10 border border-[var(--pixel-purple)]/20 mb-4">
            <span className="font-['Press_Start_2P'] text-[var(--pixel-purple)]" style={{ fontSize: '10px' }}>
              👾 ABOUT
            </span>
          </div>
          <h2 className="font-['DM_Sans'] mb-4" style={{ fontSize: '40px', fontWeight: '700' }}>
            Developer Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]"
            style={{
              boxShadow: "0 4px 20px var(--pixel-purple)10",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-[var(--pixel-green)]" size={24} />
              <span className="font-['Press_Start_2P'] text-[var(--pixel-green)]" style={{ fontSize: '10px' }}>
                codeworf@portfolio:~$
              </span>
              <span className="w-2 h-4 bg-[var(--pixel-green)] animate-pulse" />
            </div>

            <div className="space-y-4 font-mono" style={{ fontSize: '14px' }}>
              <p className="text-[var(--muted-foreground)]">
                <span className="text-[var(--pixel-cyan)]">const</span>{" "}
                <span className="text-[var(--pixel-yellow)]">developer</span> ={" "}
                <span className="text-[var(--pixel-pink)]">{"{"}</span>
              </p>
              <p className="text-[var(--muted-foreground)] pl-6">
                name: <span className="text-[var(--pixel-green)]">"박일범"</span>,
              </p>
              <p className="text-[var(--muted-foreground)] pl-6">
                role: <span className="text-[var(--pixel-green)]">"Fullstack Developer"</span>,
              </p>
              <p className="text-[var(--muted-foreground)] pl-6">
                location: <span className="text-[var(--pixel-green)]">"서울시, 노원구"</span>,
              </p>
              <p className="text-[var(--muted-foreground)] pl-6">
                passion: <span className="text-[var(--pixel-green)]">"다양한 개발을 하며 성장 중"</span>,
              </p>
              <p className="text-[var(--muted-foreground)] pl-6">
                hobbies: <span className="text-[var(--pixel-cyan)]">[</span>
                <span className="text-[var(--pixel-green)]">"게임"</span>,{" "}
                <span className="text-[var(--pixel-green)]">"디자인"</span>,{" "}
                <span className="text-[var(--pixel-green)]">"요리"</span>
                <span className="text-[var(--pixel-cyan)]">]</span>,
              </p>
              <p className="text-[var(--muted-foreground)]">
                <span className="text-[var(--pixel-pink)]">{"}"}</span>;
              </p>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[var(--muted)] border border-[var(--border)]">
              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                저는 아름답고 기능적인 웹 애플리케이션 개발을 좋아하는 열정적인 개발자입니다. 프런트엔드와 백엔드 기술 모두에 대한 전문성을 바탕으로, 깔끔한 코드와 세심한 디자인을 통해 아이디어를 현실로 구현합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]"
            style={{
              boxShadow: "0 4px 20px var(--pixel-pink)10",
            }}
          >
            <h3 className="font-['DM_Sans'] mb-8" style={{ fontSize: '24px', fontWeight: '600' }}>
              Journey Timeline
            </h3>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: "var(--pixel-pink)",
                        boxShadow: "0 0 10px var(--pixel-pink)",
                      }}
                    />
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-[var(--pixel-pink)] to-transparent mt-2" />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <div className="font-['Press_Start_2P'] text-[var(--pixel-pink)] mb-2" style={{ fontSize: '10px' }}>
                      {item.year}
                    </div>
                    <p className="text-[var(--foreground)]" style={{ fontSize: '14px' }}>
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}