import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({ isLogin, onClickLogin }) => {
  const router = useRouter();
  return (
    <div className="relative w-full shadow-lg z-[1]">
      <div className="max-w-[1600px] m-auto flex justify-between items-center px-6 py-4">
        <div className="w-1/2">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src="/images/floc-logo.svg"
            alt="floc"
            width={50}
            height={50}
          />
        </div>
        <div className="flex w-1/2 gap-8 items-center justify-end">
          <Link href="/" className="text-primary hover:underline">
            Creatives
          </Link>
          <Link href="/" className="text-primary hover:underline">
            Package
          </Link>
          <Link href="/" className="text-primary hover:underline">
            Jobs
          </Link>
          <Link href="/" className="text-primary hover:underline">
            About
          </Link>
          {isLogin ? (
            <Link href="/profile" className="text-primary hover:underline">
              Profile
            </Link>
          ) : (
            <Link href="/" className="text-primary hover:underline">
              Sign In
            </Link>
          )}
          {isLogin ? (
            <p
              className="hover:underline cursor-pointer py-2"
              onClick={() => {
                localStorage.removeItem("token");
                location.href = "/";
              }}
            >
              Sign Out
            </p>
          ) : (
            <Button type="outline-secondary" onClick={onClickLogin}>
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
