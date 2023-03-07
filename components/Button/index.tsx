import { ButtonProps } from "./types";
import styles from "./index.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className,
}) => {
  function styleSelector() {
    switch (type) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "outline-secondary":
        return styles["outline-secondary"];
      default:
        return styles.primary;
    }
  }
  return (
    <button
      className={`${styles.button} ${styleSelector()} ${
        className ? className : ""
      } py-4 px-6 rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
