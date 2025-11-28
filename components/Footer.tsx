import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useSettings } from '../context/SettingsContext';

const Footer: React.FC = () => {
  const { settings } = useSettings();

  return (
    <footer className="bg-dark-950 pt-16 pb-8 border-t border-gray-900 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              {settings.logoUrl ? (
                   <img src={settings.logoUrl} alt="Logo" className="h-8 w-auto mr-3 rounded-md" />
              ) : (
                  <Logo className="h-8 w-8 mr-3 rounded-md" />
              )}
              <span className="font-bold text-2xl text-white tracking-tight">
                TDT <span className="text-gold-500">STUDIO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tiên phong trong lĩnh vực chuyển đổi số. Chúng tôi kiến tạo các giải pháp công nghệ bền vững, giúp doanh nghiệp bứt phá doanh thu và khẳng định vị thế.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Instagram} href="#" />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gold-500 rounded-full mr-3"></span>
              Dịch Vụ
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/services/web" label="Thiết Kế Website" />
              <FooterLink to="/services/app" label="Phát Triển Mobile App" />
              <FooterLink to="/services/game" label="Lập Trình Game Unity" />
              <FooterLink to="/services/app" label="Blockchain & Web3" />
              <FooterLink to="/services/web" label="UI/UX Design" />
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gold-500 rounded-full mr-3"></span>
              Về TDT Studio
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/about" label="Câu Chuyện Thương Hiệu" />
              <FooterLink to="/process" label="Quy Trình Làm Việc" />
              <FooterLink to="/portfolio" label="Hồ Sơ Năng Lực" />
              <FooterLink to="/careers" label="Tuyển Dụng (Careers)" />
              <FooterLink to="/privacy" label="Chính Sách Bảo Mật" />
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-gold-500 rounded-full mr-3"></span>
              Liên Hệ
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{settings.address}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium hover:text-white cursor-pointer transition-colors">{settings.hotline}</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium hover:text-white cursor-pointer transition-colors">{settings.email}</span>
              </li>
            </ul>
            
            {/* Newsletter Input */}
            <div className="mt-6 pt-6 border-t border-gray-800">
               <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Đăng ký nhận tin</h5>
               <div className="flex">
                 <input type="email" placeholder="Email của bạn" className="bg-dark-900 text-white text-sm px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:border-gold-500 w-full placeholder-gray-600" />
                 <button className="bg-gold-600 hover:bg-gold-500 text-dark-900 px-3 py-2 rounded-r-md transition-colors">
                   <ArrowRight className="h-4 w-4" />
                 </button>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TDT Studio Technology Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink: React.FC<{ icon: any, href: string }> = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    className="bg-dark-900 p-2 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gold-500 hover:bg-gold-500 hover:scale-110 transition-all duration-300"
  >
    <Icon className="h-4 w-4" />
  </a>
);

const FooterLink: React.FC<{ to: string, label: string }> = ({ to, label }) => (
  <li>
    <Link to={to} className="group flex items-center text-gray-400 hover:text-gold-400 transition-colors text-sm">
      <ChevronRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold-500" />
      {label}
    </Link>
  </li>
);

export default Footer;