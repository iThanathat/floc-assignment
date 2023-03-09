import Button from "@/components/Button";
import Layout from "@/components/Layouts/page";
import Image from "next/image";
import { useState } from "react";
import Filter from "../scenes/Filters";
import { PACKAGES } from "../constants/content";
import { NextPage } from "next";
import Footer from "../scenes/Footer";
import PackageCard from "../scenes/PackageCard";

const Home: NextPage = () => {
  const [filters, setFilters] = useState({
    contentType: "",
    objective: "",
    value: "",
    hiringModel: "",
  });

  return (
    <Layout>
      <div className="max-w-[1600px] m-auto">
        <section
          id="banner"
          className="flex items-center justify-center bg-[#E7DFD3] h-[500px]"
        >
          <div className="">
            <h1 className="text-6xl text-primary leading-snug font-medium">
              Find your flexible <br /> top talent
            </h1>
            <p className="text-primary mt-4">
              lorem ipsum dolor sit amet consectetur. <br />
              Quis integer parturient senectus varius id.
            </p>
          </div>
          <div>
            <Image
              src="/images/Landing-Page-Illus.png"
              alt="banner-illus"
              width={600}
              height={600}
            />
          </div>
        </section>
        <section className="px-20 py-8 h-full bg-[#F6F3EE]">
          <div className="border-b border-[#B9B8B7] pb-6">
            <h2 className="text-primary text-[32px] font-medium">
              explore packages
            </h2>
          </div>
          <Filter filters={filters} setFilters={setFilters} />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-primary text-2xl font-medium">
                create a stunning content
              </h3>
              <Button type="outline-primary" onClick={() => ""}>
                View all
              </Button>
            </div>
            <div
              className={`flex flex-col items-center gap-8 mt-4 lg:flex-row lg:items-stretch lg:justify-between `}
            >
              {PACKAGES.map((list) => {
                return (
                  <PackageCard
                    key={list.id}
                    detail={list}
                    className="w-[300px]"
                  />
                );
              })}
            </div>
          </div>
          <div className="px-4 py-8">
            <div className="flex justify-between items-center">
              <h3 className="text-primary text-2xl font-medium">
                let’s make a big move to our society
              </h3>
              <Button type="outline-primary" onClick={() => ""}>
                View all
              </Button>
            </div>
            <div
              className={`flex flex-col items-center gap-8 mt-4 lg:flex-row lg:items-stretch lg:justify-between `}
            >
              {PACKAGES.map((list) => {
                return (
                  <PackageCard
                    key={list.id}
                    detail={list}
                    className="w-[300px]"
                  />
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
