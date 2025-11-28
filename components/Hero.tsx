import React from 'react';
import { ArrowRight, Code2, ShieldCheck, Zap, Server, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TECH_STACK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-900 pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[150px]"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex items-center pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Technology & Design Studio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Biến Ý Tưởng <br/>
              Thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-yellow-200">Kiệt Tác Số</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              TDT Studio cung cấp giải pháp lập trình Web, App và Game chuẩn quốc tế. Chúng tôi kết hợp tư duy thẩm mỹ hiện đại với công nghệ lõi vững chắc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="group relative px-8 py-4 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] flex items-center justify-center">
                Bắt đầu dự án
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="px-8 py-4 border border-gray-700 hover:border-gold-500/50 text-gray-300 hover:text-gold-400 font-semibold rounded-xl transition-all hover:bg-white/5 flex items-center justify-center">
                Xem hồ sơ năng lực
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-800/50">
                <div>
                    <h4 className="text-3xl font-bold text-white">150+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Dự án Global</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white">98%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sự hài lòng</p>
                </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Banner */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto transition-transform duration-700 hover:rotate-y-6">
                
                {/* Glow behind image */}
                <div className="absolute inset-4 bg-gradient-to-tr from-gold-500 to-transparent opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>

                {/* Main Image: Circuit/Motherboard style */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl bg-dark-800 group">
                    <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                        alt="High Tech Circuit Board" 
                        className="object-cover w-full h-full opacity-60 group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Tech Overlay lines */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute inset-0 border-[1px] border-white/5 m-4 rounded-2xl"></div>
                </div>

                {/* HUD Element 1: Top Right */}
                <div className="absolute top-8 right-[-20px] bg-dark-900/90 backdrop-blur-xl border-l-4 border-gold-500 p-4 rounded shadow-2xl animate-[float_4s_ease-in-out_infinite]">
                    <div className="flex items-center gap-3">
                        <Activity className="text-gold-500 h-5 w-5 animate-pulse" />
                        <div>
                            <div className="text-xs text-gray-400 uppercase">System Status</div>
                            <div className="text-white font-mono font-bold">ONLINE</div>
                        </div>
                    </div>
                </div>

                {/* HUD Element 2: Bottom Left */}
                <div className="absolute bottom-10 left-[-30px] bg-dark-900/90 backdrop-blur-xl border border-gray-700 p-4 rounded-xl shadow-2xl animate-[float_5s_ease-in-out_infinite_delay-500ms]">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Server className="text-blue-400 h-8 w-8" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900"></div>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-20 bg-gray-700 rounded overflow-hidden">
                                <div className="h-full bg-gold-500 w-[85%] animate-[pulse_2s_infinite]"></div>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">Loading Core...</div>
                        </div>
                    </div>
                </div>

                {/* HUD Element 3: Floating Code */}
                 <div className="absolute top-1/2 -right-8 bg-dark-800/90 backdrop-blur-md border border-gray-700 p-3 rounded-lg shadow-xl translate-y-12">
                    <ShieldCheck className="w-8 h-8 text-gold-400" />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Ticker (Marquee) */}
      <div className="relative w-full border-t border-gray-800 bg-dark-950/50 backdrop-blur-sm py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-8">
            <span className="text-gray-500 text-sm font-semibold uppercase whitespace-nowrap hidden md:block border-r border-gray-800 pr-6">
                Công nghệ
            </span>
            <div className="flex overflow-hidden relative w-full">
                <div className="flex animate-marquee whitespace-nowrap items-center gap-12">
                    {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-400 font-medium text-lg hover:text-gold-400 transition-colors cursor-default">
                           <Code2 className="w-5 h-5 opacity-50" /> {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;