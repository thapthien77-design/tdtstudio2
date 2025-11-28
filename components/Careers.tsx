import React, { useState } from 'react';
import { Briefcase, Heart, Coffee, Zap, ArrowRight, UserPlus, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApplicationModal from './ApplicationModal';

const Careers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-dark-950 min-h-screen">
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        position={selectedPosition} 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950 z-0"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm mb-6">
                <UserPlus className="w-4 h-4 text-gold-500" />
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider">Tuyển Dụng</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Gia Nhập Đội Ngũ <span className="text-gold-500">TDT Studio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Chúng tôi không chỉ tìm kiếm nhân viên, chúng tôi tìm kiếm những đồng đội cùng đam mê chinh phục công nghệ.
            </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Tại Sao Chọn TDT Studio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <BenefitCard 
                    icon={Zap}
                    title="Thử Thách Công Nghệ"
                    desc="Làm việc với các công nghệ mới nhất: Blockchain, AI, Unity, Flutter. Không bao giờ nhàm chán."
                />
                <BenefitCard 
                    icon={Heart}
                    title="Phúc Lợi Hấp Dẫn"
                    desc="Lương thưởng cạnh tranh, review lương 2 lần/năm, bảo hiểm sức khỏe cao cấp."
                />
                <BenefitCard 
                    icon={Coffee}
                    title="Môi Trường Cởi Mở"
                    desc="Văn phòng sáng tạo, đồ uống miễn phí, hoạt động team building hàng tháng."
                />
            </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-dark-900 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                <Briefcase className="mr-3 text-gold-500" /> Vị Trí Đang Tuyển
            </h2>
            
            <div className="space-y-6">
                <JobCard 
                    title="Senior Frontend Developer (React/Next.js)"
                    type="Full-time"
                    location="TP. Hồ Chí Minh"
                    salary="$1500 - $2500"
                    onApply={() => handleApply("Senior Frontend Developer")}
                />
                <JobCard 
                    title="Unity Game Developer (Mobile)"
                    type="Full-time"
                    location="TP. Hồ Chí Minh"
                    salary="$1000 - $2000"
                    onApply={() => handleApply("Unity Game Developer")}
                />
                 <JobCard 
                    title="UI/UX Designer"
                    type="Full-time"
                    location="TP. Hồ Chí Minh"
                    salary="$800 - $1500"
                    onApply={() => handleApply("UI/UX Designer")}
                />
                <JobCard 
                    title="Thực tập sinh Marketing / Content"
                    type="Internship"
                    location="Remote / Hybrid"
                    salary="Hỗ trợ thực tập"
                    onApply={() => handleApply("Marketing Intern")}
                />
            </div>

            <div className="mt-12 p-8 bg-dark-800 rounded-2xl border border-gold-500/20 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Bạn không thấy vị trí phù hợp?</h3>
                <p className="text-gray-400 mb-6">Đừng lo, chúng tôi luôn chào đón nhân tài. Hãy gửi CV của bạn cho chúng tôi.</p>
                <button 
                  onClick={() => handleApply("Ứng Tuyển Tự Do")}
                  className="inline-flex items-center px-6 py-3 bg-gold-500 text-dark-900 font-bold rounded-lg hover:bg-gold-400 transition-colors"
                >
                    Gửi CV Ngay <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
    <div className="p-6 bg-dark-800 rounded-xl border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
        <div className="w-14 h-14 bg-dark-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/30">
            <Icon className="w-6 h-6 text-gold-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

const JobCard: React.FC<{ title: string, type: string, location: string, salary: string, onApply: () => void }> = ({ title, type, location, salary, onApply }) => (
    <div className="group bg-dark-950 p-6 rounded-xl border border-gray-800 hover:border-gold-500 transition-colors flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">{title}</h4>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {type}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {location}</span>
                <span className="text-gold-500 font-medium">{salary}</span>
            </div>
        </div>
        <button 
            onClick={onApply}
            className="px-5 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500 transition-all font-medium"
        >
            Ứng tuyển
        </button>
    </div>
);

export default Careers;