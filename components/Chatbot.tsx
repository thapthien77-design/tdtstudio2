import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const { settings } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý ảo của TDT Studio. Tôi có thể giúp gì cho bạn hôm nay?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const newUserMsg: Message = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      let botResponseText = "Cảm ơn bạn đã quan tâm. Chuyên viên của chúng tôi sẽ liên hệ lại sớm nhất.";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("giá") || lowerText.includes("chi phí")) {
        botResponseText = "Bạn có thể xem chi tiết bảng giá dịch vụ của chúng tôi tại mục 'Dịch Vụ'. Gói cơ bản bắt đầu từ 5.000.000 VNĐ.";
      } else if (lowerText.includes("liên hệ") || lowerText.includes("sdt") || lowerText.includes("hotline")) {
        botResponseText = `Bạn có thể liên hệ trực tiếp qua Hotline: ${settings.hotline} hoặc để lại thông tin tại trang Liên Hệ.`;
      } else if (lowerText.includes("tuyển dụng") || lowerText.includes("việc làm")) {
        botResponseText = "Hiện tại TDT Studio đang tuyển dụng các vị trí Dev và Designer. Bạn vui lòng truy cập trang Tuyển Dụng để xem chi tiết nhé!";
      } else if (lowerText.includes("game") || lowerText.includes("app")) {
        botResponseText = "Chúng tôi chuyên phát triển Game 2D/3D (Unity/Unreal) và Mobile App đa nền tảng. Bạn đang có ý tưởng gì không?";
      }

      const newBotMsg: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <div className="fixed bottom-28 left-8 z-[60]">
      {/* Chat Window */}
      <div 
        className={`absolute bottom-16 left-0 w-[300px] bg-dark-900 border border-gold-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-bottom-left ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-900 p-3 border-b border-gray-800 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-500/5"></div>
          <div className="flex items-center relative z-10">
            <div className="relative mr-3">
              <div className="w-8 h-8 bg-dark-800 rounded-full border border-gold-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-gold-500" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-dark-900 rounded-full animate-pulse"></span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">TDT Support</h4>
              <p className="text-[10px] text-gold-500 uppercase tracking-wider">Trực tuyến</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white relative z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-60 overflow-y-auto p-4 space-y-4 bg-dark-950/50 backdrop-blur-sm scrollbar-thin scrollbar-thumb-gray-700">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-2.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-gold-500 text-dark-900 rounded-br-none font-bold' 
                    : 'bg-dark-800 text-gray-200 border border-gray-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
               <div className="bg-dark-800 border border-gray-700 p-2.5 rounded-2xl rounded-bl-none flex space-x-1 items-center">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-0"></div>
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-300"></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions (Only show if not typing) */}
        {!isTyping && messages.length < 3 && (
            <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
                <button onClick={() => handleQuickAction('Bảng giá?')} className="text-[10px] bg-dark-800 border border-gray-700 hover:border-gold-500 text-gray-300 px-2 py-1 rounded-full whitespace-nowrap transition-colors">
                    Bảng giá
                </button>
                <button onClick={() => handleQuickAction('Tư vấn')} className="text-[10px] bg-dark-800 border border-gray-700 hover:border-gold-500 text-gray-300 px-2 py-1 rounded-full whitespace-nowrap transition-colors">
                    Tư vấn
                </button>
                 <button onClick={() => handleQuickAction('Tuyển dụng')} className="text-[10px] bg-dark-800 border border-gray-700 hover:border-gold-500 text-gray-300 px-2 py-1 rounded-full whitespace-nowrap transition-colors">
                    Tuyển dụng
                </button>
            </div>
        )}

        {/* Input Area */}
        <div className="p-3 bg-dark-900 border-t border-gray-800">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
            className="flex items-center gap-2"
          >
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 bg-dark-950 border border-gray-700 rounded-full px-3 py-1.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="p-1.5 bg-gold-500 text-dark-900 rounded-full hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center transition-all duration-300 hover:scale-110 relative group ${
            isOpen ? 'bg-dark-800 text-gold-500 rotate-90' : 'bg-gradient-to-tr from-gold-500 to-yellow-300 text-dark-900'
        }`}
      >
        {isOpen ? (
            <X className="w-5 h-5" />
        ) : (
            <>
                <MessageSquare className="w-6 h-6" />
                <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
            </>
        )}
      </button>
    </div>
  );
};

export default Chatbot;