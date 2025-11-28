import React from 'react';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import SpecialOffers from './SpecialOffers';
import SEO from './SEO';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cpu, ArrowRight, Layout, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Trang Chủ" 
        description="TDT Studio - Công ty công nghệ hàng đầu chuyên Thiết kế Website, Lập trình App Mobile và Game Unity chất lượng cao tại Việt Nam. Đối tác tin cậy cho chuyển đổi số."
        keywords="TDT Studio, thiết kế web chuyên nghiệp, lập trình app mobile, làm game unity, công ty công nghệ hcm"
      />

      {/* 1. The Main Hero Section */}
      <Hero />

      {/* 2. Value Proposition / Features */}
      <section className="py-24 bg-dark-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Tại sao chọn TDT Studio</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Công Nghệ Dẫn Lối Thành Công</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={Zap} 
                    title="Tốc Độ Xử Lý" 
                    desc="Tối ưu hóa code và hạ tầng server, đảm bảo sản phẩm vận hành mượt mà, load nhanh dưới 1s." 
                />
                <FeatureCard 
                    icon={Shield} 
                    title="Bảo Mật Tuyệt Đối" 
                    desc="Quy trình DevSecOps nghiêm ngặt, bảo vệ dữ liệu doanh nghiệp khỏi các cuộc tấn công mạng." 
                />
                <FeatureCard 
                    icon={Cpu} 
                    title="Công Nghệ Mới Nhất" 
                    desc="Luôn cập nhật AI, Blockchain và Cloud Computing vào sản phẩm để tạo lợi thế cạnh tranh." 
                />
            </div>
        </div>
      </section>

      {/* 3. Tech Parallax Banner */}
      <section className="relative py-32 bg-fixed bg-center bg-cover overflow-hidden group" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-dark-900/80 group-hover:bg-dark-900/70 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Sẵn Sàng Cho Kỷ Nguyên Số?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Chúng tôi không chỉ viết code, chúng tôi xây dựng nền tảng cho tương lai doanh nghiệp của bạn.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 font-bold rounded-full transition-all duration-300 uppercase tracking-wider">
                Tư vấn miễn phí <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>

      {/* 4. Secondary Services Preview */}
      <section className="py-24 bg-dark-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white">Giải Pháp Thiết Kế & <br/><span className="text-gold-500">Trải Nghiệm Người Dùng</span></h3>
                    <p className="text-gray-400 text-lg">
                        Giao diện không chỉ cần đẹp, mà cần phải hiệu quả. Đội ngũ UI/UX của chúng tôi tập trung vào hành vi người dùng để tối ưu hóa tỷ lệ chuyển đổi.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-300">
                            <Layout className="w-5 h-5 text-gold-500 mr-3" /> Thiết kế chuẩn Responsive Mobile-First
                        </li>
                        <li className="flex items-center text-gray-300">
                            <BarChart className="w-5 h-5 text-gold-500 mr-3" /> Phân tích dữ liệu hành vi người dùng
                        </li>
                    </ul>
                    <Link to="/services/web" className="text-gold-400 font-semibold hover:text-white transition-colors inline-flex items-center">
                        Khám phá dịch vụ thiết kế <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                        alt="Analytics Dashboard" 
                        className="relative z-10 rounded-2xl border border-gray-700 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>
         </div>
      </section>

      {/* 5. Pricing Section */}
      <Pricing />
      
      {/* 6. Special Offers & Gratitude */}
      <SpecialOffers />

      {/* 7. Testimonials Section */}
      <Testimonials />

      {/* 8. Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-600 to-yellow-500 text-dark-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-dark-900">
                Biến ý tưởng của bạn thành hiện thực ngay hôm nay
            </h2>
            <Link to="/contact" className="inline-block px-10 py-4 bg-dark-900 text-white font-bold rounded-xl shadow-xl hover:bg-dark-800 hover:scale-105 transition-all">
                Liên hệ ngay
            </Link>
        </div>
      </section>
    </div>
  );
};

// Helper Component for Features
const FeatureCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
    <div className="group p-8 rounded-2xl bg-dark-800 border border-gray-800 hover:border-gold-500/50 hover:bg-dark-800/80 transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-dark-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-gold-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

export default Home;