import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return {
    isLogin,
    setIsLogin,
  };
};

export default useAuth;
