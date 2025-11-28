import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';
import { useNavigate } from 'react-router-dom';
import { DBService } from '../services/db';
import { Order, Application } from '../types';
import { Package, Settings as SettingsIcon, Save, RefreshCw, CheckCircle, Clock, XCircle, Search, Upload, Image as ImageIcon, Users, Briefcase, ExternalLink, Mail, Phone } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { settings, updateSetting } = useSettings();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'orders' | 'settings' | 'recruitment'>('orders');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Orders State
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Applications State
  const [applications, setApplications] = useState<Application[]>([]);
  const [appSearchTerm, setAppSearchTerm] = useState('');

  // Settings State
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    // Security check
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }
    loadData();
    setLocalSettings(settings);
  }, [user, navigate, settings]);

  const loadData = () => {
    loadAllOrders();
    loadApplications();
  };

  const loadAllOrders = () => {
    const allOrders = DBService.getAllOrders();
    setOrders(allOrders as Order[]);
  };

  const loadApplications = () => {
    const apps = DBService.getApplications();
    setApplications(apps as Application[]);
  };

  const handleStatusUpdate = (id: number, status: string) => {
    DBService.updateOrderStatus(id, status);
    loadAllOrders();
  };

  const handleAppStatusUpdate = (id: number, status: string) => {
    DBService.updateApplicationStatus(id, status);
    loadApplications();
  };

  const handleSettingSave = () => {
    updateSetting('logoUrl', localSettings.logoUrl);
    updateSetting('hotline', localSettings.hotline);
    updateSetting('email', localSettings.email);
    updateSetting('address', localSettings.address);
    alert('Cập nhật cài đặt thành công!');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 500 * 1024) { // 500KB limit
        alert("File quá lớn! Vui lòng chọn ảnh < 500KB để tối ưu tốc độ tải trang.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setLocalSettings(prev => ({ ...prev, logoUrl: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const filteredOrders = orders.filter(o => 
    o.userName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.userPhone?.includes(searchTerm) ||
    o.id.toString().includes(searchTerm)
  );

  const filteredApplications = applications.filter(a => 
    a.name.toLowerCase().includes(appSearchTerm.toLowerCase()) ||
    a.position.toLowerCase().includes(appSearchTerm.toLowerCase()) ||
    a.phone.includes(appSearchTerm)
  );

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="bg-dark-950 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            Trang Quản Trị <span className="text-gold-500">Admin</span>
          </h1>
          <div className="bg-dark-800 px-4 py-2 rounded-lg border border-gray-700">
            <span className="text-gray-400 text-sm mr-2">Xin chào,</span>
            <span className="text-white font-bold">{user.name}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center pb-4 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'orders' 
                ? 'text-gold-500 border-gold-500' 
                : 'text-gray-500 border-transparent hover:text-white'
            }`}
          >
            <Package className="w-5 h-5 mr-2" /> Quản Lý Đơn Hàng
          </button>
          <button
            onClick={() => setActiveTab('recruitment')}
            className={`flex items-center pb-4 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'recruitment' 
                ? 'text-gold-500 border-gold-500' 
                : 'text-gray-500 border-transparent hover:text-white'
            }`}
          >
            <Users className="w-5 h-5 mr-2" /> Tuyển Dụng
            {applications.filter(a => a.status === 'New').length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {applications.filter(a => a.status === 'New').length}
                </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center pb-4 px-4 font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'settings' 
                ? 'text-gold-500 border-gold-500' 
                : 'text-gray-500 border-transparent hover:text-white'
            }`}
          >
            <SettingsIcon className="w-5 h-5 mr-2" /> Cài Đặt Trang Web
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && (
          <div className="bg-dark-900 rounded-2xl border border-gray-800 p-6 shadow-xl animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Tìm theo tên, SĐT hoặc mã đơn..." 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-dark-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500"
                />
              </div>
              <button onClick={loadAllOrders} className="p-2 bg-dark-800 rounded-lg hover:text-gold-500 transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400 text-xs uppercase border-b border-gray-800">
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Khách Hàng</th>
                    <th className="py-3 px-4">Dịch Vụ</th>
                    <th className="py-3 px-4">Giá</th>
                    <th className="py-3 px-4">Ngày Tạo</th>
                    <th className="py-3 px-4">Trạng Thái</th>
                    <th className="py-3 px-4 text-right">Hành Động</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-300">
                  {filteredOrders.map(order => (
                    <tr key={order.id} className="border-b border-gray-800/50 hover:bg-dark-800">
                      <td className="py-4 px-4">#{order.id}</td>
                      <td className="py-4 px-4">
                        <div className="font-bold text-white">{order.userName}</div>
                        <div className="text-xs text-gray-500">{order.userPhone}</div>
                      </td>
                      <td className="py-4 px-4">{order.planName}</td>
                      <td className="py-4 px-4 text-gold-400">{order.price}</td>
                      <td className="py-4 px-4">{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${
                           order.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                           order.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                           'bg-yellow-500/10 text-yellow-500'
                        }`}>
                           {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right space-x-2">
                        {order.status === 'Pending' && (
                          <button 
                            onClick={() => handleStatusUpdate(order.id, 'In Progress')}
                            className="text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 px-2 py-1 rounded transition-colors"
                            title="Bắt đầu xử lý"
                          >
                            <Clock className="w-4 h-4" />
                          </button>
                        )}
                         {order.status !== 'Completed' && (
                          <button 
                            onClick={() => handleStatusUpdate(order.id, 'Completed')}
                            className="text-green-400 hover:text-white bg-green-500/10 hover:bg-green-600 px-2 py-1 rounded transition-colors"
                             title="Hoàn thành"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        {order.status !== 'Pending' && (
                             <button 
                             onClick={() => handleStatusUpdate(order.id, 'Pending')}
                             className="text-yellow-400 hover:text-white bg-yellow-500/10 hover:bg-yellow-600 px-2 py-1 rounded transition-colors"
                              title="Đặt lại Pending"
                           >
                             <RefreshCw className="w-4 h-4" />
                           </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'recruitment' && (
             <div className="bg-dark-900 rounded-2xl border border-gray-800 p-6 shadow-xl animate-fade-in">
             <div className="flex justify-between items-center mb-6">
               <div className="relative w-full max-w-md">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                 <input 
                   type="text" 
                   placeholder="Tìm ứng viên, vị trí..." 
                   value={appSearchTerm}
                   onChange={e => setAppSearchTerm(e.target.value)}
                   className="w-full bg-dark-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500"
                 />
               </div>
               <button onClick={loadApplications} className="p-2 bg-dark-800 rounded-lg hover:text-gold-500 transition-colors">
                 <RefreshCw className="w-5 h-5" />
               </button>
             </div>
 
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="text-gray-400 text-xs uppercase border-b border-gray-800">
                     <th className="py-3 px-4">Ứng Viên</th>
                     <th className="py-3 px-4">Vị Trí</th>
                     <th className="py-3 px-4">Liên Hệ</th>
                     <th className="py-3 px-4">CV / Message</th>
                     <th className="py-3 px-4">Ngày Nộp</th>
                     <th className="py-3 px-4">Trạng Thái</th>
                     <th className="py-3 px-4 text-right">Hành Động</th>
                   </tr>
                 </thead>
                 <tbody className="text-sm text-gray-300">
                   {filteredApplications.map(app => (
                     <tr key={app.id} className="border-b border-gray-800/50 hover:bg-dark-800">
                       <td className="py-4 px-4">
                         <div className="font-bold text-white">{app.name}</div>
                       </td>
                       <td className="py-4 px-4">
                           <span className="flex items-center text-xs bg-dark-800 px-2 py-1 rounded border border-gray-700 text-gray-300">
                               <Briefcase className="w-3 h-3 mr-1" /> {app.position}
                           </span>
                       </td>
                       <td className="py-4 px-4 space-y-1">
                           <div className="flex items-center text-xs"><Phone className="w-3 h-3 mr-1 text-gray-500" /> {app.phone}</div>
                           <div className="flex items-center text-xs"><Mail className="w-3 h-3 mr-1 text-gray-500" /> {app.email}</div>
                       </td>
                       <td className="py-4 px-4">
                           <div className="max-w-[200px] truncate text-xs text-gray-400 mb-1" title={app.message}>{app.message}</div>
                           {app.cvLink && (
                               <a href={app.cvLink} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-white text-xs flex items-center font-bold">
                                   <ExternalLink className="w-3 h-3 mr-1" /> Xem CV
                               </a>
                           )}
                       </td>
                       <td className="py-4 px-4">{new Date(app.createdAt).toLocaleDateString('vi-VN')}</td>
                       <td className="py-4 px-4">
                         <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${
                            app.status === 'Contacted' ? 'bg-green-500/10 text-green-500' :
                            app.status === 'Rejected' ? 'bg-red-500/10 text-red-500' :
                            'bg-blue-500/10 text-blue-500'
                         }`}>
                            {app.status === 'New' ? 'Mới' : app.status === 'Contacted' ? 'Đã liên hệ' : 'Từ chối'}
                         </span>
                       </td>
                       <td className="py-4 px-4 text-right space-x-2">
                         {app.status === 'New' && (
                           <button 
                             onClick={() => handleAppStatusUpdate(app.id, 'Contacted')}
                             className="text-green-400 hover:text-white bg-green-500/10 hover:bg-green-600 px-2 py-1 rounded transition-colors"
                             title="Đánh dấu đã liên hệ"
                           >
                             <CheckCircle className="w-4 h-4" />
                           </button>
                         )}
                          {app.status !== 'Rejected' && (
                           <button 
                             onClick={() => handleAppStatusUpdate(app.id, 'Rejected')}
                             className="text-red-400 hover:text-white bg-red-500/10 hover:bg-red-600 px-2 py-1 rounded transition-colors"
                              title="Từ chối"
                           >
                             <XCircle className="w-4 h-4" />
                           </button>
                         )}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-dark-900 rounded-2xl border border-gray-800 p-8 shadow-xl max-w-2xl animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-6">Chỉnh sửa thông tin Website</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Logo</label>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        {localSettings.logoUrl ? (
                            <div className="w-24 h-24 bg-dark-800 rounded-lg border border-gray-700 p-2 flex items-center justify-center relative group">
                                <img src={localSettings.logoUrl} alt="Preview" className="max-w-full max-h-full" />
                                <button 
                                    onClick={() => setLocalSettings(prev => ({...prev, logoUrl: ''}))}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <XCircle className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="w-24 h-24 bg-dark-800 rounded-lg border border-gray-700 border-dashed flex flex-col items-center justify-center text-gray-500">
                                <ImageIcon className="w-8 h-8 mb-1" />
                                <span className="text-xs">Mặc định</span>
                            </div>
                        )}
                        
                        <div className="flex-1 flex flex-col justify-center">
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            <div className="flex gap-2 mb-2">
                                <button 
                                    onClick={triggerFileInput}
                                    className="px-4 py-2 bg-dark-800 hover:bg-dark-700 text-white border border-gray-600 rounded-lg flex items-center transition-colors"
                                >
                                    <Upload className="w-4 h-4 mr-2" /> Tải ảnh lên
                                </button>
                            </div>
                            <input 
                                type="text" 
                                value={localSettings.logoUrl}
                                onChange={e => setLocalSettings({...localSettings, logoUrl: e.target.value})}
                                placeholder="Hoặc dán URL ảnh tại đây..."
                                className="w-full bg-dark-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-gold-500"
                            />
                            <p className="text-xs text-gray-500 mt-2">Hỗ trợ định dạng JPG, PNG, WEBP (Max 500KB)</p>
                        </div>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Số Hotline</label>
                    <input 
                    type="text" 
                    value={localSettings.hotline}
                    onChange={e => setLocalSettings({...localSettings, hotline: e.target.value})}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Liên Hệ</label>
                    <input 
                    type="text" 
                    value={localSettings.email}
                    onChange={e => setLocalSettings({...localSettings, email: e.target.value})}
                    className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Địa Chỉ</label>
                <input 
                type="text" 
                value={localSettings.address}
                onChange={e => setLocalSettings({...localSettings, address: e.target.value})}
                className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              <button 
                onClick={handleSettingSave}
                className="w-full bg-gold-500 hover:bg-gold-400 text-dark-900 font-bold py-3 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-gold-500/20"
              >
                <Save className="w-5 h-5 mr-2" /> Lưu Thay Đổi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;