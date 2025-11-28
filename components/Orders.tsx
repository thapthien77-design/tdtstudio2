import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const { user, orders, refreshOrders, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/');
    }
    refreshOrders();
  }, [user, isLoading, navigate]);

  if (!user) return null;

  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Đơn Hàng Của Tôi</h1>
                <p className="text-gray-400">Quản lý các gói dịch vụ bạn đã đăng ký</p>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-gold-500/20">
                <p className="text-sm text-gray-400 uppercase">Xin chào</p>
                <p className="text-gold-400 font-bold text-lg">{user.name}</p>
            </div>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-20 bg-dark-900 rounded-2xl border border-gray-800 border-dashed">
            <ShoppingBag className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Chưa có đơn hàng nào</h3>
            <p className="text-gray-400 mb-6">Bạn chưa đăng ký gói dịch vụ nào của chúng tôi.</p>
            <Link to="/" className="px-6 py-3 bg-gold-500 text-dark-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
              Xem Bảng Giá
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-gray-800">
                  <th className="py-4 px-6 font-medium">Mã Đơn</th>
                  <th className="py-4 px-6 font-medium">Dịch Vụ</th>
                  <th className="py-4 px-6 font-medium">Giá Trị</th>
                  <th className="py-4 px-6 font-medium">Ngày Tạo</th>
                  <th className="py-4 px-6 font-medium">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-800 hover:bg-dark-900 transition-colors">
                    <td className="py-4 px-6">#{order.id.toString().padStart(6, '0')}</td>
                    <td className="py-4 px-6 font-bold text-white">{order.planName}</td>
                    <td className="py-4 px-6 text-gold-400">{order.price}</td>
                    <td className="py-4 px-6">{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                        order.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {order.status === 'Completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'In Progress' && <Clock className="w-3 h-3 mr-1" />}
                        {order.status === 'Pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'Pending' ? 'Chờ xử lý' : 
                         order.status === 'In Progress' ? 'Đang thực hiện' : 'Hoàn thành'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
