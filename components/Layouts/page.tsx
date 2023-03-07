import NavBar from "../NavBar";
import { PageLayoutProps } from "./types";

const Layout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
