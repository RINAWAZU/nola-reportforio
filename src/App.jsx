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
  ChevronDown,
  Terminal,
  Cpu,
  Globe,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter italic hover:opacity-70 transition-opacity cursor-pointer">Nola.</div>
        <div className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#works" className="hover:text-indigo-600 transition-colors">Works</a>
          <a href="#contact" className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-black transition-all">Contact</a>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden p-2 text-gray-600">
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-4 h-0.5 bg-current ml-auto"></div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#f8f9ff] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] opacity-40 animate-sway"></div>
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-30 animate-sway" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10 text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px]">Available for Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-gray-900 animate-slide-up">
              Engineering <br />
              <span className="italic text-indigo-600 font-light">Digital Aesthetics.</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              理系大学生としての論理的思考と、洗練されたUI/UXデザイン。
              ただ動くだけでなく、美しく、使いやすいWeb体験を提供します。
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#works" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-2xl hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-black/10">
                Explore Works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl hover:border-indigo-600 transition-all flex items-center justify-center">
                My Story
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <ChevronDown className="text-gray-400 w-8 h-8" />
      </div>
    </section>
  );
};

const About = () => {
  const stack = [
    { name: "C / C++", category: "Low-level" },
    { name: "Java", category: "Object-oriented" },
    { name: "Python", category: "Scripting / AI" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Strict Logic" },
    { name: "Tailwind", category: "Styling" },
  ];

  return (
    <section id="about" className="py-32 md:py-48 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-indigo-50 rounded-[40px] overflow-hidden relative group">
              {/* Profile Image - unified source */}
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Info Card - Now visible on mobile and using Age */}
            <div className="absolute -top-6 -right-4 md:top-10 md:-right-10 p-5 md:p-8 bg-white shadow-2xl rounded-3xl border border-gray-50 z-20">
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-indigo-600 rounded-2xl text-white">
                  <User size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold font-serif">22</div>
                  <div className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 font-bold">Years Old</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-xs font-black tracking-[0.5em] text-indigo-600 uppercase">Introduction</h2>
              <h3 className="text-4xl md:text-6xl font-serif leading-tight">Beyond Code <br /> Is Reality.</h3>
            </div>
            <div className="space-y-6 text-gray-500 leading-loose text-lg font-light">
              <p>
                理系大学の4年生として、計算機科学と数学の美しさを学んでいます。
                私の開発プロセスは、常に「なぜそうなるのか」という論理的な問いから始まります。
              </p>
              <p>
                複雑な問題をシンプルなコードに落とし込み、それを洗練されたUIに昇華させること。
                その一連の流れが、私のクリエイティブの源泉です。
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stack.map((item, idx) => (
                <div key={idx} className="group p-4 md:p-5 border border-gray-100 bg-gray-50/50 rounded-2xl hover:bg-white hover:border-indigo-100 hover:shadow-lg transition-all">
                  <div className="text-gray-900 font-bold mb-1 text-sm md:text-base">{item.name}</div>
                  <div className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.category}</div>
                </div>
              ))}
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
      icon: <Globe className="w-8 h-8" />,
      title: "Strategy",
      desc: "どのような技術選定が最適か、ビジネスと技術の橋渡しとなる設計を提案します。"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Development",
      desc: "ReactやTypeScriptを駆使し、保守性とパフォーマンスを両立したコードを実装します。"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI Design",
      desc: "単に綺麗なだけでなく、ユーザーの思考プロセスを妨げない直感的なインターフェースを。"
    }
  ];

  return (
    <section id="services" className="py-32 md:py-48 bg-gray-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-24 space-y-4">
          <h2 className="text-xs font-black tracking-[0.5em] text-indigo-400 uppercase">Expertise</h2>
          <h3 className="text-5xl font-serif">Comprehensive Web Solutions.</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group p-10 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/[0.08] transition-all hover:-translate-y-2">
              <div className="mb-10 p-4 bg-indigo-500/20 rounded-2xl w-fit text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light text-sm">
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
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-xs font-black tracking-[0.5em] text-indigo-600 uppercase">Selected Works</h2>
            <h3 className="text-5xl font-serif">Creative Archive.</h3>
          </div>
          <button className="text-gray-400 hover:text-indigo-600 transition-colors flex items-center space-x-2 font-bold tracking-widest text-[10px] uppercase">
            <span>View All Projects</span>
            <ExternalLink size={14} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          {[1, 2].map(i => (
            <div key={i} className="group">
              <div className="aspect-[16/10] bg-gray-50 rounded-[40px] overflow-hidden mb-8 relative border border-gray-100">
                 <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                    <span className="text-gray-400 font-serif italic text-xl">Project In Progress</span>
                 </div>
                 <div className="absolute top-8 right-8 px-4 py-2 bg-white/80 backdrop-blur shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {i === 1 ? 'Design' : 'Development'}
                 </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-serif mb-2 group-hover:text-indigo-600 transition-colors">Digital Ecosystem 0{i}</h4>
                  <p className="text-gray-400 text-sm font-light">Interactive branding and web development.</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h3 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none">Let's <br /> Connect.</h3>
            <p className="text-gray-500 text-xl font-light">
              プロジェクトに関するご相談や、<br />
              最新の技術トレンドについての雑談も歓迎です。
            </p>
            <div className="flex space-x-8">
              <a href="mailto:hello@nola.dev" className="text-gray-400 hover:text-indigo-600 transition-colors"><Mail size={24} /></a>
              <a href="https://www.instagram.com/nola.webdev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Instagram size={24} /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 text-white space-y-8 mt-10 lg:mt-0">
            <div className="space-y-2">
              <div className="text-indigo-400 text-xs font-bold tracking-widest uppercase">Contact Direct</div>
              <div className="text-2xl font-serif">hello@nola.dev</div>
            </div>
            <div className="h-px bg-white/10 w-full"></div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs text-gray-500 mb-1 tracking-widest uppercase">Location</div>
                <div className="text-sm">Tokyo, Japan</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold italic tracking-tighter">Nola.</div>
                <p className="text-[10px] text-gray-500 mt-2 tracking-widest uppercase">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
            </div>
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
    50% { transform: translateY(-15px) rotate(1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
  .animate-slide-up { animation: slide-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-sway { animation: sway 8s ease-in-out infinite; }
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