import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Hook để dễ dàng dùng Auth trong các component
export function useAuth() {
  return useContext(AuthContext);
  // Trả về { user, login, logout }
}
