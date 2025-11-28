import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-dark-900 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-gold-400 font-bold tracking-wide uppercase mb-3 text-sm">Quy Trình Làm Việc</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Chuyên Nghiệp & Minh Bạch</h3>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {PROCESS_STEPS.map((step, index) => (
                    <div key={step.id} className="bg-dark-900 md:bg-transparent p-6 md:p-0 rounded-xl border border-gray-800 md:border-none">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-dark-800 border-2 border-gold-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(234,179,8,0.2)] relative">
                                <step.icon className="h-7 w-7 text-gold-400" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                                    0{step.id}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;