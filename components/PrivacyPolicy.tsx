import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-gray-800 pb-6">Chính Sách Bảo Mật</h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-300">
            <p className="lead text-xl text-gray-400 mb-8">
                Tại TDT Studio, chúng tôi cam kết bảo vệ sự riêng tư và bảo mật thông tin cá nhân của bạn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Thông tin chúng tôi thu thập</h3>
            <p className="mb-4">Chúng tôi có thể thu thập các loại thông tin sau:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Thông tin cá nhân:</strong> Tên, địa chỉ email, số điện thoại khi bạn điền vào form liên hệ.</li>
                <li><strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, thời gian truy cập thông qua cookies.</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Cách sử dụng thông tin</h3>
            <p className="mb-4">Thông tin của bạn được sử dụng để:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Phản hồi các yêu cầu tư vấn và báo giá.</li>
                <li>Cải thiện trải nghiệm người dùng trên website.</li>
                <li>Gửi thông tin cập nhật về dịch vụ (nếu bạn đăng ký nhận tin).</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Chia sẻ thông tin</h3>
            <p className="mb-6">
                Chúng tôi cam kết không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba, trừ khi có sự đồng ý của bạn hoặc theo yêu cầu của pháp luật.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Bảo mật</h3>
            <p className="mb-6">
                Chúng tôi áp dụng các biện pháp an ninh kỹ thuật (SSL, mã hóa) để bảo vệ dữ liệu của bạn khỏi truy cập trái phép.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">5. Liên hệ</h3>
            <p>
                Nếu có bất kỳ thắc mắc nào về chính sách này, vui lòng liên hệ:<br/>
                Email: contact@tdtstudio.tech<br/>
                Hotline: 0908 531 701
            </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;