import Image from "next/image";
import { CardProps } from "./types";
import styles from "./index.module.css";

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
