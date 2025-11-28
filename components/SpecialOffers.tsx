import React from 'react';
import { PROMOTIONS } from '../constants';
import { Gift, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Quà tặng đặc biệt</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Ưu Đãi Dành Cho Khách Hàng</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Đăng ký dịch vụ ngay hôm nay để nhận trọn bộ quà tặng trị giá lên đến 5.000.000 VNĐ.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PROMOTIONS.map((promo) => (
            <div key={promo.id} className="bg-dark-800 rounded-xl p-8 border border-gold-500/20 hover:border-gold-500 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
               {/* Decorative Gradient */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 to-gold-300"></div>
               
               <div className="w-16 h-16 bg-dark-900 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-gold-500/10 group-hover:scale-110 transition-transform">
                    <promo.icon className="w-8 h-8 text-gold-500" />
               </div>

               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                   {promo.title}
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                   {promo.desc}
               </p>

               <div className="absolute top-4 right-4">
                   <Gift className="w-5 h-5 text-gold-500/20 group-hover:text-gold-500/50 transition-colors" />
               </div>
            </div>
          ))}
        </div>

        {/* Thank You Section */}
        <div className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-12 text-center border border-gray-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-6 fill-red-500 animate-pulse-slow" />
                
                <h2 className="text-3xl font-bold text-white mb-6">Lời Tri Ân Từ TDT Studio</h2>
                
                <div className="text-gray-300 text-lg leading-relaxed space-y-4 mb-8">
                    <p>
                        "Kính gửi Quý Khách Hàng,
                    </p>
                    <p>
                        Sự thành công của bạn chính là niềm tự hào lớn nhất của chúng tôi. 
                        Cảm ơn bạn đã tin tưởng lựa chọn <span className="text-gold-400 font-bold">TDT Studio</span> là đối tác công nghệ trên hành trình chinh phục thị trường số.
                    </p>
                    <p>
                        Chúng tôi cam kết sẽ không ngừng nỗ lực, sáng tạo và hoàn thiện hơn nữa để mang đến những sản phẩm chất lượng, 
                        góp phần vào sự phát triển bền vững của doanh nghiệp bạn."
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-gold-500 font-signature text-3xl mb-2">Đức Thiên</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Founder & CEO</div>
                </div>

                <div className="mt-10">
                    <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white/5 hover:bg-gold-500 hover:text-dark-900 border border-gold-500/50 rounded-full transition-all duration-300 font-bold text-gold-400">
                        Hợp tác cùng chúng tôi
                    </Link>
                </div>
            </div>
        </div>

      </div>
      
      {/* Add font-signature class style if needed locally or assume tailwind extension */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .font-signature {
            font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </section>
  );
};

export default SpecialOffers;