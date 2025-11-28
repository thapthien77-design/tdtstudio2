import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Logo } from './Logo';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, setShowAuthModal } = useAuth();
  const { settings } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const navbarBg = !isHome || scrolled 
    ? 'bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-gold-500/10' 
    : 'bg-transparent';

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            {settings.logoUrl ? (
                <img src={settings.logoUrl} alt="Logo" className="h-10 w-auto mr-3 rounded-md" />
            ) : (
                <Logo className="h-10 w-10 mr-3 rounded-md shadow-lg shadow-gold-500/20" />
            )}
            <span className="font-bold text-xl tracking-tighter text-white">
              TDT <span className="text-gold-400">STUDIO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`${
                      isActive ? 'text-gold-400 font-bold' : 'text-gray-300 hover:text-gold-400'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors focus:outline-none"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium max-w-[100px] truncate">{user.name}</span>
                  </button>

                  {/* Dropdown */}
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-dark-900 border border-gray-700 rounded-xl shadow-xl py-1 overflow-hidden z-50 animate-fade-in">
                       {user.role === 'admin' && (
                           <Link 
                           to="/admin"
                           onClick={() => setShowProfileMenu(false)}
                           className="flex items-center px-4 py-3 text-sm text-gold-400 hover:bg-dark-800 transition-colors font-bold"
                         >
                           <ShieldCheck className="w-4 h-4 mr-2" /> Quản trị Admin
                         </Link>
                       )}
                       <Link 
                        to="/orders"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-dark-800 hover:text-gold-400 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" /> Đơn hàng
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-3 text-sm text-red-400 hover:bg-dark-800 transition-colors border-t border-gray-800"
                      >
                        <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gold-500 hover:bg-gold-400 text-dark-900 px-5 py-2 rounded-full font-bold text-sm transition-transform transform hover:scale-105 flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Đăng Nhập
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-dark-800 border-b border-gold-500/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => {
             const isActive = location.pathname === item.href;
             return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`${
                   isActive ? 'text-gold-400 bg-dark-900' : 'text-gray-300'
                } hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.label}
              </Link>
             );
          })}
          {user ? (
            <>
               {user.role === 'admin' && (
                   <Link 
                   to="/admin"
                   onClick={() => setIsOpen(false)}
                   className="text-gold-400 block px-3 py-2 rounded-md text-base font-bold"
                 >
                   Trang Quản Trị
                 </Link>
               )}
               <Link 
                to="/orders"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Đơn hàng của tôi
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left text-red-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setShowAuthModal(true);
                setIsOpen(false);
              }}
              className="w-full text-left text-gold-400 block px-3 py-2 rounded-md text-base font-bold"
            >
              Đăng Nhập / Đăng Ký
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;