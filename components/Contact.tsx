import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import SEO from './SEO';

const Contact: React.FC = () => {
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu và sẽ liên hệ lại trong 24h.");
    // In a real app, send data to backend here
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-dark-800 relative overflow-hidden">
        <SEO 
            title="Liên Hệ" 
            description={`Liên hệ TDT Studio qua Hotline ${settings.hotline} để được tư vấn miễn phí về thiết kế web và lập trình ứng dụng.`}
            keywords="liên hệ tdt studio, tư vấn thiết kế web, báo giá làm app"
        />
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
            <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Liên Hệ</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Bắt Đầu Dự Án Của Bạn</h3>
            <p className="text-gray-400 mb-8">
              Đừng ngần ngại chia sẻ ý tưởng. TDT Studio luôn sẵn sàng lắng nghe và đồng hành cùng bạn biến ý tưởng thành hiện thực.
            </p>

            <div className="space-y-6 mb-10">
                <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-gold-500 mr-4" />
                    <span>{settings.hotline}</span>
                </div>
                <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-gold-500 mr-4" />
                    <span>{settings.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 text-gold-500 mr-4" />
                    <span>{settings.address}</span>
                </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Họ và tên</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="Nguyễn Văn A"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                        placeholder="email@example.com"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Loại dự án</label>
                <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                >
                    <option value="Website">Thiết kế Website</option>
                    <option value="Mobile App">Ứng dụng Di động</option>
                    <option value="Game">Phát triển Game</option>
                    <option value="Blockchain">Blockchain / Web3</option>
                    <option value="Other">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Chi tiết yêu cầu</label>
                <textarea 
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Mô tả ý tưởng, tính năng mong muốn..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-yellow-600 text-dark-900 py-3 px-6 rounded-lg font-bold hover:brightness-110 transition-all flex items-center justify-center shadow-lg shadow-gold-500/20"
                >
                    <Send className="h-5 w-5 mr-2" />
                    Gửi yêu cầu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;