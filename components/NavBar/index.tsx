import Image from "next/image";

const NavBar = () => {
  return (
    <div className="relative w-full flex justify-between p-4 shadow-lg z-[9999]">
      <div className="w-1/2">
        <Image src="/images/floc-logo.svg" alt="floc" width={50} height={50} />
      </div>
      <div className="flex w-1/2 justify-evenly text-primary">
        <p>Creatives</p>
        <p>Package</p>
        <p>Jobs</p>
        <p>About</p>
        <p>Profile</p>
      </div>
    </div>
  );
};

export default NavBar;
