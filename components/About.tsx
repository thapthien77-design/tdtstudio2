import React from 'react';
import { STATS } from '../constants';
import { Target, Lightbulb, Users } from 'lucide-react';
import SEO from './SEO';

const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-dark-900 relative">
        <SEO 
            title="Về Chúng Tôi" 
            description="Tìm hiểu về TDT Studio - Đội ngũ kỹ sư và nhà thiết kế đam mê công nghệ. Sứ mệnh kiến tạo giá trị thực cho doanh nghiệp."
        />
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Về TDT Studio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Đối Tác Công Nghệ Tin Cậy Của Doanh Nghiệp</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Thành lập với sứ mệnh mang công nghệ đến gần hơn với cuộc sống, TDT Studio không ngừng sáng tạo để tạo ra những sản phẩm số chất lượng nhất. Chúng tôi là tập hợp của những kỹ sư phần mềm đam mê, những nhà thiết kế sáng tạo và những chuyên gia chiến lược nhạy bén.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-lg border border-gold-500/20 mr-4">
                        <Target className="text-gold-500 h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Tầm Nhìn</h4>
                        <p className="text-gray-500 text-sm mt-1">Trở thành công ty công nghệ hàng đầu khu vực về giải pháp chuyển đổi số.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-lg border border-gold-500/20 mr-4">
                        <Lightbulb className="text-gold-500 h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Sứ Mệnh</h4>
                        <p className="text-gray-500 text-sm mt-1">Kiến tạo giá trị thực thông qua các sản phẩm công nghệ đột phá.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="bg-dark-800 p-3 rounded-lg border border-gold-500/20 mr-4">
                        <Users className="text-gold-500 h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Con Người</h4>
                        <p className="text-gray-500 text-sm mt-1">Đội ngũ trẻ, nhiệt huyết và luôn cập nhật xu hướng công nghệ mới nhất.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Stats Side */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-2xl blur-2xl -z-10"></div>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:bg-dark-800 transition-colors duration-300">
                  <div className="text-4xl font-extrabold text-gold-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;