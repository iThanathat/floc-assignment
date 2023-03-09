import Button from "@/components/Button";
import Layout from "@/components/Layouts/page";
import { ALL_PACKAGES } from "constants/content";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Filter from "scenes/Filters";
import Footer from "scenes/Footer";
import PackageCard from "scenes/PackageCard";

const Profile: NextPage = () => {
  const [filters, setFilters] = useState({
    contentType: "",
    objective: "",
    value: "",
    hiringModel: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }

    return () => {};
  }, []);

  return (
    <Layout>
      <div className="bg-[#F6F3EE] max-w-[1600px] m-auto">
        <div className="px-20 py-10">
          <div className="border-b border-[#B9B8B7] pb-6 flex items-center justify-between">
            <h2 className="text-primary text-[32px] font-bold">
              browse package
            </h2>
            <div className="flex gap-10">
              <Button className="w-[150px]" type="primary" onClick={() => ""}>
                create brief
              </Button>
              <Button className="w-[190px]" type="primary" onClick={() => ""}>
                find me package
              </Button>
            </div>
          </div>
          <Filter filters={filters} setFilters={setFilters} />
          <div className="py-8 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
            {ALL_PACKAGES.map((list) => {
              return (
                <PackageCard
                  key={list.id}
                  detail={list}
                  className="w-[300px] justify-self-center"
                />
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
