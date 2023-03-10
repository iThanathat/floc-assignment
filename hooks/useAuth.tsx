import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const login = async (username: string, password: string): Promise<any> => {
    try {
      const response = await fetch(`${window.location.origin}/api/login`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();
      if (result.token) {
        setIsLogin(true);
        localStorage.setItem("token", result.token);
      } else {
        setIsLogin(false);
      }
      return result;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return {
    isLogin,
    setIsLogin,
    login,
  };
};

export default useAuth;
