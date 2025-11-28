import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const Services: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-dark-800">
      <SEO 
        title="Dịch Vụ Công Nghệ" 
        description="Khám phá các dịch vụ của TDT Studio: Thiết kế Website chuẩn SEO, Lập trình Mobile App đa nền tảng, Phát triển Game Unity/Unreal và Blockchain."
        keywords="dịch vụ thiết kế web, lập trình app, outsource game, blockchain development, dịch vụ công nghệ"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Dịch Vụ Của Chúng Tôi</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Giải Pháp Toàn Diện Cho Mọi Nhu Cầu</h3>
          <p className="text-gray-400">
            Chúng tôi cung cấp hệ sinh thái dịch vụ công nghệ khép kín, từ ý tưởng đến sản phẩm thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="block h-full">
              <div className="group relative bg-dark-900 rounded-2xl p-8 border border-gray-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-14 h-14 bg-dark-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-gold-500 group-hover:text-dark-900 transition-colors" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h4>
                  <p className="text-gray-400 mb-8 min-h-[80px]">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-gold-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto pt-6 border-t border-gray-800 flex items-center text-gold-400 font-semibold group-hover:text-gold-300">
                    Xem chi tiết <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;