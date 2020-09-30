import { useState, useCallback, useEffect } from "react";

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const signIn = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    setIsAuth(true);
    console.log(token, userId);
    localStorage.setItem(storageName, JSON.stringify({ userId: id, token: jwtToken }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setIsAuth(false);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName));
      if(data && data.token) {
          signIn(data.token, data.userId);
      }
  }, []);

  return { signIn, logout, token, userId, isAuth };
};
