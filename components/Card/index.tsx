import Image from "next/image";
import { CardProps } from "./types";
import styles from "./index.module.css";

const Card: React.FC<CardProps> = ({ imageSrc, title, positions }) => {
  return (
    <div className={styles.card}>
      <div className="flex justify-center">
        <Image
          className="rounded-2xl"
          src={imageSrc}
          alt="content"
          width={280}
          height={280}
        />
      </div>
      <h2 className="text-black font-semibold text-xl mt-4">{title}</h2>
      <div className="mt-4 text-black">
        {positions.map((position) => {
          return <p key={position}>{position}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
