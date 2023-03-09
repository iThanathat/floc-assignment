import useAuth from "../../hooks/useAuth";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import NavBar from "../NavBar";
import TextField from "../TextField";
import { PageLayoutProps } from "./types";

const Layout: React.FC<PageLayoutProps> = ({ children }) => {
  const { isLogin, setIsLogin } = useAuth();
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [userForm, setUserForm] = useState({ username: "", password: "" });
  const [isValid, setIsValid] = useState<boolean>(true);

  const login = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: userForm.username,
          password: userForm.password,
        }),
      });

      const result = await response.json();
      if (result.token) {
        setIsLogin(true);
        localStorage.setItem("token", result.token);
        setOpenLoginModal(false);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <>
      <div className="min-h-screen relative z-10 bg-[#F6F3EE]">
        <NavBar
          isLogin={isLogin}
          onClickLogin={() => {
            setOpenLoginModal(true);
          }}
        />
        {children}
      </div>
      <Modal isOpen={openLoginModal}>
        <div className="p-10">
          <div className="flex flex-col items-center">
            <p className="text-primary text-2xl font-semibold">Log in</p>
            <div className="mt-4 flex flex-col w-full gap-4">
              <TextField
                value={userForm.username}
                placeholder="Your email"
                invalid={!isValid}
                onChange={(e) => {
                  setIsValid(true);
                  setUserForm({ ...userForm, username: e.target.value });
                }}
                icon={
                  <Image
                    src="/icons/Icon2.png"
                    alt="email"
                    width={20}
                    height={20}
                  />
                }
              />
              <TextField
                type="password"
                invalid={!isValid}
                value={userForm.password}
                placeholder="Password"
                onChange={(e) => {
                  setIsValid(true);
                  setUserForm({ ...userForm, password: e.target.value });
                }}
                icon={
                  <Image
                    src="/icons/Icon1.png"
                    alt="email"
                    width={20}
                    height={20}
                  />
                }
              />
              <Button
                className={`btn rounded-lg`}
                type="secondary"
                onClick={() => {
                  login();
                }}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Layout;
