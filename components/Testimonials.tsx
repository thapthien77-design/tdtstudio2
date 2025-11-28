import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Đánh Giá Từ Khách Hàng</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Niềm Tin Được Khẳng Định</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gold-500/30 transition-all duration-300 relative group">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 leading-relaxed min-h-[80px]">
                "{item.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-gold-500/50 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-xs text-gold-400 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;