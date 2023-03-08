import { useState } from "react";
import { SelectProps } from "./types";
import styles from "./index.module.css";

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showValue, setShowValue] = useState<string>(
    placeholder ? placeholder : ""
  );
  return (
    <div
      className={`${isOpen ? styles["dropdown-open"] : styles["dropdown"]}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <label className={`px-2 w-full`} tabIndex={0}>
        <span
          className={`${styles.label} ${
            isOpen ? "border-b-[3px] border-secondary flex justify-center" : ""
          }`}
        >
          {showValue}
        </span>
      </label>
      {isOpen && (
        <ul className={styles["dropdown-options"]}>
          {options.map((option) => {
            return (
              <li
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setShowValue(option.label);
                  setValue(option.value);
                  onChange(value);
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
