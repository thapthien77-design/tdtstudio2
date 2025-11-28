import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Order } from '../types';
import { initDB, DBService } from '../services/db';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (phone: string, pass: string) => Promise<boolean>;
  register: (phone: string, pass: string, name: string) => Promise<boolean>;
  logout: () => void;
  createOrder: (planName: string, price: string) => void;
  orders: Order[];
  refreshOrders: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initDB();
        // Check for existing session (simplified: just checking localstorage for a user ID)
        const storedUserId = localStorage.getItem('current_user_id');
        if (storedUserId) {
          const u = DBService.get("SELECT id, phone, name, role FROM users WHERE id = ?", [storedUserId]);
          if (u) {
            setUser(u as User);
            loadOrders(u.id);
          }
        }
      } catch (e) {
        console.error("Failed to init DB", e);
      } finally {
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  const loadOrders = (userId: number) => {
    const res = DBService.exec("SELECT id, user_id as userId, plan_name as planName, price, status, created_at as createdAt FROM orders WHERE user_id = ? ORDER BY id DESC", [userId]);
    setOrders(res as Order[]);
  };

  const login = async (phone: string, pass: string) => {
    // In real app: Hash password. Here: Simple comparison for demo.
    const u = DBService.get("SELECT id, phone, name, role FROM users WHERE phone = ? AND password = ?", [phone, pass]);
    if (u) {
      setUser(u as User);
      localStorage.setItem('current_user_id', u.id.toString());
      loadOrders(u.id);
      return true;
    }
    return false;
  };

  const register = async (phone: string, pass: string, name: string) => {
    try {
      const existing = DBService.get("SELECT id FROM users WHERE phone = ?", [phone]);
      if (existing) return false;

      DBService.run("INSERT INTO users (phone, password, name) VALUES (?, ?, ?)", [phone, pass, name]);
      return login(phone, pass); // Auto login after register
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
    localStorage.removeItem('current_user_id');
  };

  const createOrder = (planName: string, price: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    DBService.run("INSERT INTO orders (user_id, plan_name, price) VALUES (?, ?, ?)", [user.id, planName, price]);
    loadOrders(user.id);
    alert("Đăng ký dịch vụ thành công! Chúng tôi sẽ liên hệ sớm.");
  };

  const refreshOrders = () => {
    if (user) loadOrders(user.id);
  }

  return (
    <AuthContext.Provider value={{ 
      user, isLoading, login, register, logout, 
      createOrder, orders, refreshOrders,
      showAuthModal, setShowAuthModal 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
