import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Website' | 'Mobile App' | 'Game'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  const categories = ['All', 'Website', 'Mobile App', 'Game'];

  return (
    <section className="min-h-screen pt-32 pb-24 bg-dark-900">
      <SEO 
        title="Hồ Sơ Năng Lực" 
        description="Xem qua các dự án tiêu biểu mà TDT Studio đã thực hiện: E-commerce, Fintech App, Game RPG 3D và nhiều hơn nữa."
        keywords="dự án tiêu biểu, portfolio tdt studio, hồ sơ năng lực công ty công nghệ, mẫu website đẹp"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Hồ Sơ Năng Lực</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Các Dự Án Tiêu Biểu</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Khám phá những sản phẩm công nghệ chất lượng cao mà chúng tôi đã thực hiện cho khách hàng trên toàn thế giới.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-gold-500 text-dark-900 border-gold-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                  : 'bg-dark-800 text-gray-400 border-gray-700 hover:border-gold-500 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-gold-500/50 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-sm">
                   <Link to="#" className="p-3 bg-gold-500 rounded-full text-dark-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6" />
                   </Link>
                </div>

                <div className="absolute top-4 left-4 z-20">
                   <span className="bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{project.title}</h4>
                <p className="text-gray-500 text-sm mb-4">Client: <span className="text-gray-300">{project.client}</span></p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-gray-400 bg-dark-900 px-2 py-1 rounded border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center space-x-2 text-gold-400 font-bold hover:text-white transition-colors border-b-2 border-gold-500 hover:border-white pb-1">
                <span>Bạn muốn có một dự án tương tự?</span>
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;