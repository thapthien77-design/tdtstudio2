import React, { useState } from 'react';
import { X, Phone, Lock, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal, login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ phone: '', pass: '', name: '' });
  const [error, setError] = useState('');

  if (!showAuthModal) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (isLogin) {
      const success = await login(formData.phone, formData.pass);
      if (success) {
        setShowAuthModal(false);
      } else {
        setError('Số điện thoại hoặc mật khẩu không đúng.');
      }
    } else {
      if (!formData.name) {
        setError('Vui lòng nhập tên.');
        return;
      }
      const success = await register(formData.phone, formData.pass, formData.name);
      if (success) {
        setShowAuthModal(false);
      } else {
        setError('Số điện thoại đã tồn tại.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-dark-900 border border-gold-500/30 rounded-2xl w-full max-w-md overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h3 className="text-xl font-bold text-white">
            {isLogin ? 'Đăng Nhập' : 'Đăng Ký Tài Khoản'}
          </h3>
          <button 
            onClick={() => setShowAuthModal(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button 
            onClick={() => { setIsLogin(true); setError(''); }}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${isLogin ? 'text-gold-500 bg-dark-800' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Đăng Nhập
          </button>
          <button 
            onClick={() => { setIsLogin(false); setError(''); }}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${!isLogin ? 'text-gold-500 bg-dark-800' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Đăng Ký
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {!isLogin && (
              <div className="relative group">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-dark-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-all"
                />
              </div>
            )}

            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                required
                className="w-full bg-dark-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-gold-500 transition-colors" />
              <input 
                type="password" 
                placeholder="Mật khẩu"
                value={formData.pass}
                onChange={e => setFormData({...formData, pass: e.target.value})}
                required
                className="w-full bg-dark-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-500 transition-all"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-gold-500 text-dark-900 font-bold py-3 rounded-xl hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              {isLogin ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
