import React from 'react';
import { 
  User, 
  Code, 
  Terminal,
  Globe,
  Layers,
  Cpu,
  Mail,
  Instagram,
  Twitter,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

/**
 * nola-reportforio - Main Component
 * Built with React and Tailwind CSS v4
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter italic">Nola.</div>
          <div className="hidden md:flex space-x-10 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#works" className="hover:text-indigo-600 transition-colors">Works</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors border-b-2 border-indigo-600 pb-1 text-slate-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#f8f9ff] overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-purple-100 rounded-full blur-[100px] opacity-60"></div>

        <div className="max-w-5xl mx-auto px-8 w-full relative z-10 text-center md:text-left">
          <div className="space-y-6">
            <p className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs">
              Web Developer & Designer
            </p>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight text-slate-900">
              Transforming ideas <br />
              <span className="italic text-slate-400 font-light">into digital reality.</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-500 font-light leading-relaxed pt-4 mx-auto md:mx-0">
              理系大学生としての論理的思考と、モダンなWeb技術を融合。
              単なるコードの集合体ではない、美しく直感的な体験を提供します。
            </p>
            <div className="pt-8 flex justify-center md:justify-start space-x-6 items-center">
              <a href="#works" className="px-10 py-5 bg-black text-white rounded-2xl hover:bg-indigo-600 transition-all duration-300 flex items-center group shadow-xl shadow-black/5">
                View Works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden relative border border-slate-100 group">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 p-6 bg-white shadow-2xl rounded-2xl border border-slate-50">
                <div className="text-3xl font-serif text-indigo-600">04</div>
                <div className="text-[10px] tracking-widest uppercase text-slate-400 font-bold">University Year</div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-xs font-black tracking-[0.4em] text-indigo-600 uppercase">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-serif">Nola / ノラ</h3>
              </div>
              <p className="text-slate-500 leading-loose text-lg font-light">
                理系大学4年生。情報科学の知見を活かし、データとデザインの交差点でプロダクトを開発しています。
                「なぜこのUIなのか」を論理的に説明できる、説得力のあるデザインを信条としています。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'TypeScript', 'Tailwind', 'Python', 'C++', 'Java'].map(skill => (
                  <div key={skill} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Terminal size={16} className="text-indigo-500" />
                    <span className="text-sm font-bold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24 space-y-4">
            <h2 className="text-xs font-black tracking-[0.4em] text-indigo-400 uppercase">Expertise</h2>
            <h3 className="text-5xl font-serif italic">Expert Solutions</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Globe />, title: "Web Strategy", desc: "最新のトレンドと技術スタックを組み合わせ、ビジネスに最適なWeb戦略を構築します。" },
              { icon: <Cpu />, title: "Engineering", desc: "React/TypeScriptによる、型安全で保守性の高いフロントエンド実装を提供します。" },
              { icon: <Layers />, title: "Design Systems", desc: "一貫性のあるビジュアル言語を設計し、ブランドのアイデンティティを確立します。" }
            ].map((s, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="mb-8 text-indigo-400">{s.icon}</div>
                <h4 className="text-2xl font-serif mb-4">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <h3 className="text-5xl md:text-7xl font-serif tracking-tighter">Let's build <br /> together.</h3>
            <div className="flex space-x-6 pt-4">
              <a href="mailto:hello@example.com" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Mail />
              </a>
              {/* Instagram link updated to nola.webdev */}
              <a 
                href="https://www.instagram.com/nola.webdev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <Instagram />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold italic">Nola.</div>
            <p className="text-xs text-slate-400 mt-4 tracking-widest uppercase">© {new Date().getFullYear()} nola-reportforio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}