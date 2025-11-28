import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from './SEO';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service || !service.detailContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900 text-white">
        <SEO title="Dịch vụ không tồn tại" description="Trang bạn tìm kiếm không tồn tại." />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Dịch vụ không tồn tại</h2>
          <Link to="/services" className="text-gold-400 hover:underline">Quay lại trang dịch vụ</Link>
        </div>
      </div>
    );
  }

  const { detailContent } = service;

  return (
    <div className="bg-dark-950 min-h-screen">
      <SEO 
        title={service.title} 
        description={service.description}
        image={detailContent.heroImage}
        keywords={`${service.title}, dịch vụ ${service.title.toLowerCase()}, thuê làm ${service.title.toLowerCase()}, tdt studio`}
      />
      
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={detailContent.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/50 to-dark-950"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-gold-400 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại danh sách
            </Link>
            <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-dark-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-gold-500/30">
                     <service.icon className="w-10 h-10 text-gold-500" />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{service.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Description Text */}
                <div>
                    <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Tổng quan</h2>
                    <h3 className="text-3xl font-bold text-white mb-6">Tại sao chọn dịch vụ này?</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {detailContent.longDescription}
                    </p>
                    <div className="flex gap-4">
                        <Link to="/contact" className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold rounded-lg transition-colors flex items-center">
                            Liên hệ tư vấn <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                         <Link to="/portfolio" className="px-8 py-3 border border-gray-700 text-gray-300 hover:text-white hover:border-white rounded-lg transition-colors">
                            Xem dự án mẫu
                        </Link>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {detailContent.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-dark-800 p-6 rounded-xl border border-gray-800 hover:border-gold-500/30 transition-colors">
                            <CheckCircle2 className="w-8 h-8 text-gold-500 mb-4" />
                            <h4 className="text-white font-bold text-lg mb-2">{benefit.title}</h4>
                            <p className="text-gray-400 text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Specialized Process */}
      <section className="py-20 bg-dark-950 border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Quy trình triển khai</h2>
                <p className="text-gray-400 mt-4">Các bước thực hiện cụ thể cho {service.title}</p>
            </div>
            
            <div className="relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {detailContent.processSteps.map((step, idx) => (
                        <div key={idx} className="bg-dark-900 p-6 rounded-lg border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 bg-dark-800 border-2 border-gold-500 rounded-full flex items-center justify-center text-gold-500 font-bold text-lg mx-auto mb-4">
                                {idx + 1}
                            </div>
                            <h4 className="text-white font-bold mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
      </section>

    </div>
  );
};

export default ServiceDetail;