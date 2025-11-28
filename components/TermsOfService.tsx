import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-800 pb-6">Điều Khoản Sử Dụng</h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-300">
            <p className="lead text-xl text-gray-400 mb-8">
                Chào mừng bạn đến với website của TDT Studio. Khi truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản dưới đây.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Quyền sở hữu trí tuệ</h3>
            <p className="mb-6">
                Toàn bộ nội dung trên website (hình ảnh, logo, bài viết, mã nguồn) thuộc bản quyền của TDT Studio. Nghiêm cấm sao chép, chỉnh sửa hoặc sử dụng cho mục đích thương mại mà không có sự đồng ý bằng văn bản.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Trách nhiệm người dùng</h3>
            <p className="mb-4">Khi sử dụng website, bạn cam kết:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Không thực hiện các hành vi phá hoại, tấn công (DDoS, hack) hệ thống.</li>
                <li>Không sử dụng thông tin trên website vào các mục đích lừa đảo hoặc vi phạm pháp luật.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Giới hạn trách nhiệm</h3>
            <p className="mb-6">
                TDT Studio không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh trực tiếp hoặc gián tiếp từ việc sử dụng thông tin trên website này.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Thay đổi điều khoản</h3>
            <p className="mb-6">
                Chúng tôi có quyền thay đổi các điều khoản này bất cứ lúc nào mà không cần báo trước. Việc bạn tiếp tục sử dụng website đồng nghĩa với việc chấp nhận các thay đổi đó.
            </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;