import { CardProps } from "./types";
import styles from "./index.module.css";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className ? className : ""} ${styles.card}`}>
      {children}
    </div>
  );
};

export default Card;
