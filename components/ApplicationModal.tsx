import React, { useState } from 'react';
import { X, Send, Briefcase, Paperclip } from 'lucide-react';
import { DBService } from '../services/db';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, position }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cvLink: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      DBService.createApplication(
        formData.name,
        formData.email,
        formData.phone,
        position,
        formData.cvLink,
        formData.message
      );
      
      setTimeout(() => {
        alert("Nộp đơn ứng tuyển thành công! Bộ phận nhân sự sẽ liên hệ với bạn sớm.");
        setLoading(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', cvLink: '', message: '' });
      }, 1000);
    } catch (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-dark-900 border border-gold-500/30 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-dark-800/50">
          <div>
            <h3 className="text-xl font-bold text-white">Ứng Tuyển Vị Trí</h3>
            <p className="text-gold-400 font-medium text-sm mt-1 flex items-center">
               <Briefcase className="w-4 h-4 mr-1" /> {position}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Họ và tên <span className="text-red-500">*</span></label>
                    <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                    <input 
                    type="text" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email <span className="text-red-500">*</span></label>
                <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Link CV / Portfolio</label>
                <div className="relative">
                    <Paperclip className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                    type="text" 
                    value={formData.cvLink}
                    onChange={e => setFormData({...formData, cvLink: e.target.value})}
                    placeholder="Google Drive, LinkedIn, ..."
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg pl-10 pr-3 py-2 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">Dán liên kết đến CV online của bạn.</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Lời nhắn</label>
                <textarea 
                rows={3}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold-500"
                placeholder="Giới thiệu ngắn gọn về bản thân..."
                ></textarea>
            </div>

            <div className="pt-4">
                <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gold-500 text-dark-900 font-bold py-3 rounded-xl hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 flex items-center justify-center"
                >
                {loading ? 'Đang gửi...' : (
                    <>
                        <Send className="w-5 h-5 mr-2" /> Gửi Hồ Sơ
                    </>
                )}
                </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ApplicationModal;