import React, { createContext, useState, useEffect } from "react";

// Tạo Context để chia sẻ dữ liệu login/logout
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user từ localStorage khi component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Đồng bộ localStorage mỗi khi user thay đổi
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (username) => {
    const userData = { name: username };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Giá trị context được chia sẻ
//   const value = { user, login, logout };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
