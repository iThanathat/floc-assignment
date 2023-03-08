import Button from "@/components/Button";
import Card from "@/components/Card";
import Layout from "@/components/Layouts/page";
import Select from "@/components/Select";
import {
  CONTENT_TYPE_OPTIONS,
  HIRING_MODEL_OPTIONS,
  OBJECTIVE_OPTIONS,
  VALUE_OPTIONS,
} from "../constants/dropdown";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/home.module.css";

const Home = () => {
  const [filter, setFilter] = useState({
    contentType: "",
    objective: "",
    value: "",
    hiringModel: "",
  });

  return (
    <Layout>
      <div className="h-screen">
        <section
          id="banner"
          className="flex items-center justify-center bg-[#E7DFD3] h-1/2"
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
        <section className="px-20 py-10 h-full bg-[#F6F3EE]">
          <div className="border-b border-[#B9B8B7] pb-6">
            <h2 className="text-primary text-[32px] font-medium">
              explore packages
            </h2>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-evenly">
              <p className="text-primary font-semibold p-[10px]">filter</p>
              <div className="w-[200px]">
                <Select
                  options={CONTENT_TYPE_OPTIONS}
                  placeholder="content type"
                  defaultValue={filter.contentType}
                  onChange={(value) =>
                    setFilter({ ...filter, contentType: value })
                  }
                />
              </div>
              <div className="w-[200px]">
                <Select
                  options={OBJECTIVE_OPTIONS}
                  placeholder="objective"
                  defaultValue={filter.contentType}
                  onChange={(value) =>
                    setFilter({ ...filter, contentType: value })
                  }
                />
              </div>
              <div className="w-[200px]">
                <Select
                  options={VALUE_OPTIONS}
                  placeholder="value"
                  defaultValue={filter.contentType}
                  onChange={(value) =>
                    setFilter({ ...filter, contentType: value })
                  }
                />
              </div>
              <div className="w-[200px]">
                <Select
                  options={HIRING_MODEL_OPTIONS}
                  placeholder="hiring model"
                  defaultValue={filter.contentType}
                  onChange={(value) =>
                    setFilter({ ...filter, contentType: value })
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
