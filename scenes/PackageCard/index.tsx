import Card from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";
import { PackageCardProps } from "./types";

const PackageCard: React.FC<PackageCardProps> = ({ detail, className }) => {
  return (
    <Card key={detail.id} className={className ? className : ""}>
      <div className="flex flex-col">
        <Image
          className="self-center"
          src={detail.image}
          alt={detail.name}
          width={250}
          height={250}
        />
        <p className="mt-2 text-primary font-semibold">{detail.name}</p>
        <div className="mt-2 flex flex-col gap-2">
          {detail.jobs.map((job) => {
            return (
              <Fragment key={job.name}>
                <p className="text-primary text-sm">
                  x{job.qty}&nbsp;
                  {job.name}
                </p>
                {job.additional && (
                  <p className="text-primary text-sm">(+{job.additional})</p>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
