import { TextFieldProps } from "./types";
import styles from "./index.module.css";

const TextField: React.FC<TextFieldProps> = ({
  value,
  placeholder,
  type,
  onChange,
  icon,
  invalid,
}) => {
  return (
    <div className={styles["text-field"]}>
      {icon && (
        <div className="bg-transparent absolute top-[12px] left-[16px] m-auto">
          {icon}
        </div>
      )}
      <input
        className={`p-2 w-full text-primary border-2 ${
          invalid ? "border-error" : "border-[#E0E2E9]"
        }  ${
          icon ? "pl-12" : ""
        } outline-none rounded-lg  focus:border-primary`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
