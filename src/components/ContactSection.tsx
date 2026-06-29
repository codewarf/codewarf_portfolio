import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="px-6 py-20 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--pixel-cyan)]/10 border border-[var(--pixel-cyan)]/20 mb-4">
            <span className="font-['Press_Start_2P'] text-[var(--pixel-cyan)]" style={{ fontSize: '10px' }}>
              📮 CONTACT
            </span>
          </div>
          <h2 className="font-['DM_Sans'] mb-4" style={{ fontSize: '40px', fontWeight: '700' }}>
            함께 만들어가요!
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto" style={{ fontSize: '18px' }}>
            좋은 서비스들, 재밌고 놀라운 것을 만들고싶습니다!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]"
            style={{
              boxShadow: "0 4px 20px var(--pixel-cyan)10",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-['Press_Start_2P'] text-[var(--foreground)]" style={{ fontSize: '10px' }}>
                  NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--pixel-cyan)] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-['Press_Start_2P'] text-[var(--foreground)]" style={{ fontSize: '10px' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--pixel-cyan)] transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-['Press_Start_2P'] text-[var(--foreground)]" style={{ fontSize: '10px' }}>
                  MESSAGE
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--muted)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--pixel-cyan)] transition-all resize-none"
                  placeholder="Tell me about your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[var(--pixel-cyan)] to-[var(--pixel-blue)] text-[var(--background)] font-['Press_Start_2P'] rounded-xl shadow-lg shadow-[var(--pixel-cyan)]/30 hover:shadow-[var(--pixel-cyan)]/50 transition-all flex items-center justify-center gap-3"
                style={{ fontSize: '10px' }}
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--pixel-pink)]/20 flex items-center justify-center mb-4">
                <Mail className="text-[var(--pixel-pink)]" size={24} />
              </div>
              <h4 className="font-['DM_Sans'] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                Email
              </h4>
              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '14px' }}>
                park1bum@gmail.com
              </p>
            </div>

            <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--pixel-purple)]/20 flex items-center justify-center mb-4">
                <MapPin className="text-[var(--pixel-purple)]" size={24} />
              </div>
              <h4 className="font-['DM_Sans'] mb-2" style={{ fontSize: '16px', fontWeight: '600' }}>
                Location
              </h4>
              <p className="text-[var(--muted-foreground)]" style={{ fontSize: '14px' }}>
                서울시, 노원구
                <br />
                화상면접 가능
              </p>
            </div>

            <div className="bg-gradient-to-br from-[var(--pixel-pink)]/20 via-[var(--pixel-purple)]/20 to-[var(--pixel-blue)]/20 rounded-2xl p-6 border border-[var(--border)]">
              <p className="font-['Press_Start_2P'] text-center" style={{ fontSize: '10px', lineHeight: '1.8' }}>
                🎮 Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-[var(--muted-foreground)]"
          style={{ fontSize: '14px' }}
        >
          <div className="mb-4 font-['Press_Start_2P']" style={{ fontSize: '10px' }}>
            ⭐ ⭐ ⭐
          </div>
          <p>© 2026 codewarf. Crafted</p>
        </motion.footer>
      </div>
    </section>
  );
}