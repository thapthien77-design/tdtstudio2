import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Star, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Pricing: React.FC = () => {
  const { createOrder, user, setShowAuthModal } = useAuth();
  const navigate = useNavigate();
  const [processingId, setProcessingId] = useState<string | null>(null);

  const handleChoosePlan = async (plan: typeof PRICING_PLANS[0]) => {
    // Enterprise plan usually requires custom contact
    if (plan.id === 'enterprise') {
      navigate('/contact');
      return;
    }

    if (!user) {
        setShowAuthModal(true);
        return;
    }

    // Set loading state
    setProcessingId(plan.id);

    // Simulate network delay for professional feel
    setTimeout(() => {
        createOrder(plan.name, plan.price);
        setProcessingId(null);
        // Explicitly navigate to orders page to show the new order
        navigate('/orders');
    }, 1500);
  };

  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">Chi phí minh bạch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Bảng Giá Dịch Vụ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Lựa chọn gói dịch vụ phù hợp với ngân sách và nhu cầu của bạn. Chúng tôi cam kết không phát sinh chi phí ẩn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-dark-900 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.isPopular 
                  ? 'border-gold-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-105 z-10' 
                  : 'border-gray-800 hover:border-gold-500/50 hover:bg-dark-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-dark-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-lg">
                  <Star className="w-3 h-3 mr-1 fill-dark-900" />
                  Phổ biến nhất
                </div>
              )}

              <div className="p-8 border-b border-gray-800">
                <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-gold-400' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-dark-800 border border-gold-500/30 flex items-center justify-center mr-3 mt-0.5">
                         <Check className="w-3 h-3 text-gold-500" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button 
                  onClick={() => handleChoosePlan(plan)}
                  disabled={processingId === plan.id}
                  className={`block w-full py-3 px-6 rounded-xl font-bold text-center transition-all flex items-center justify-center ${
                    plan.isPopular
                      ? 'bg-gold-500 text-dark-900 hover:bg-gold-400 shadow-lg shadow-gold-500/20'
                      : 'bg-dark-800 text-white hover:bg-white hover:text-dark-900 border border-gray-700 hover:border-white'
                  } ${processingId === plan.id ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {processingId === plan.id ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Đang xử lý...
                      </>
                  ) : (
                      plan.buttonText
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;