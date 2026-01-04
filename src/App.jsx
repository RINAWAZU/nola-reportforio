import React from 'react';
import { 
  User, 
  Code, 
  Zap, 
  Layers, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Mail,
  ChevronDown
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter italic">Nola.</div>
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest text-gray-500 uppercase">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#works" className="hover:text-black transition-colors">Works</a>
          <a href="#contact" className="hover:text-black transition-colors border-b-2 border-indigo-600 pb-1 text-black">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
        <div className="space-y-6 animate-sway">
          <p className="text-indigo-600 font-semibold tracking-[0.3em] uppercase text-sm animate-fade-in">
            Web Developer & Designer
          </p>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight text-gray-900 animate-slide-up">
            Transforming ideas <br />
            <span className="italic text-gray-400 font-light">into digital reality.</span>
          </h1>
          <p className="max-w-xl text-lg text-gray-500 font-light leading-relaxed pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            独学で磨き上げた確かな技術力と、理系大学生ならではの論理的思考で、
            あなたのビジネスを加速させるWebサイトを構築します。
          </p>
          <div className="pt-8 flex space-x-6 items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="px-10 py-5 bg-black text-white rounded-full hover:bg-indigo-600 transition-all duration-300 flex items-center group shadow-xl shadow-black/5">
              View Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 animate-sway" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60 animate-sway" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-300 w-8 h-8" />
      </div>
    </section>
  );
};

const About = () => {
  const skills = [
    "C", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "UI Design", "UX Design"
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden relative group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
                alt="Personal Concept Illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x1000?text=Developer+Portrait"; }}
              />
              <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 p-10 bg-white shadow-2xl rounded-2xl hidden lg:block border border-gray-50">
              <div className="text-5xl font-serif text-indigo-600 mb-2">22</div>
              <div className="text-xs tracking-widest uppercase text-gray-400">Years Old</div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.4em] text-indigo-600 uppercase">Profile</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium">Nola / ノラ</h3>
            </div>
            <div className="space-y-6 text-gray-600 leading-loose">
              <p>
                現在、理系大学に通う学部4年生。学問の傍ら、Web開発の無限の可能性に魅了され、独学でエンジニアリングの道を切り拓いてきました。
              </p>
              <p>
                C言語やJavaといった堅牢な言語での基礎から、Pythonによる効率的なスクリプト、そしてJavaScript/Reactを用いたモダンなフロントエンドまで、多岐にわたる技術に精通しています。
                理系特有の論理的思考を武器に、UXを重視した直感的なUIデザインから、パフォーマンスに妥協しない高度な実装まで一気通貫で対応します。
              </p>
            </div>
            <div className="pt-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span key={skill} className="px-5 py-2 border border-gray-100 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: "Design & Dev",
      subTitle: "デザインから開発まで一気通貫",
      desc: "要件定義からUI/UXデザイン、フロントエンド・バックエンドの実装まで、ワンストップで対応. ブランドの価値を最大化する一貫性のあるWebサイトを構築します。"
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Fast Delivery",
      subTitle: "業界最短クラスの納品スピード",
      desc: "スピードは最大の付加価値. 徹底した無駄の排除と高度な開発フローにより、品質を落とすことなく圧倒的な速さでプロダクトをお届けします。"
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Custom Web Apps",
      subTitle: "オーダーメイドのWebシステム",
      desc: "ビジネスの課題を解決するための最適な技術選定と設計を行います. スケーラビリティを考慮した保守性の高いモダンな構成を提案します。"
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-[#111] text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.4em] text-indigo-400 uppercase">What I Do</h2>
          <h3 className="text-5xl font-serif italic">Expert Services</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s, idx) => (
            <div key={idx} className="group p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500">
              <div className="mb-8">{s.icon}</div>
              <h4 className="text-2xl font-serif mb-2">{s.title}</h4>
              <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">{s.subTitle}</p>
              <p className="text-gray-400 leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  return (
    <section id="works" className="py-32 md:py-48 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.4em] text-indigo-600 uppercase">Works</h2>
            <h3 className="text-5xl font-serif">Selected Projects</h3>
          </div>
          <p className="text-gray-400 max-w-xs font-light italic">
            実績は順次アップデートいたします. 新たな価値創造の過程をご覧ください。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map(i => (
            <div key={i} className="group cursor-wait">
              <div className="aspect-video bg-gray-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center border border-gray-100 group-hover:bg-gray-100 transition-colors">
                 <span className="text-gray-300 font-serif italic text-lg">Coming Soon</span>
              </div>
              <h4 className="text-xl font-medium text-gray-400">Project {i === 1 ? 'Alpha' : 'Beta'}</h4>
              <p className="text-sm text-gray-300 uppercase tracking-widest">Case Study / Development</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-gray-50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <h3 className="text-5xl md:text-7xl font-serif tracking-tighter">Let's build <br /> something great.</h3>
            <p className="text-gray-500 text-lg">お仕事のご相談やお問い合わせはSNS、またはメールまで。</p>
            <div className="flex space-x-6">
              <a href="mailto:your-email@gmail.com" className="p-4 bg-white border border-gray-200 rounded-full hover:shadow-lg transition-shadow" title="Gmail">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-200 rounded-full hover:shadow-lg transition-shadow" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/your-profile" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-gray-200 rounded-full hover:shadow-lg transition-shadow" title="X">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto text-right">
             <div className="text-xs tracking-[0.5em] uppercase text-gray-400 mb-2">Developed By</div>
             <div className="text-2xl font-bold italic tracking-tighter">Nola.</div>
             <p className="text-sm text-gray-400 mt-8">&copy; {new Date().getFullYear()} Nola All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Styles ---
const style = `
  html {
    scroll-behavior: smooth;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes sway {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(0.5deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-fade-in { animation: fade-in 1s ease-out forwards; }
  .animate-slide-up { animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-sway { animation: sway 6s ease-in-out infinite; }
`;

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <style>{style}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
      </main>
      <Footer />
    </div>
  );
}