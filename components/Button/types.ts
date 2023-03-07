export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: "primary" | "secondary" | "outline-secondary";
  onClick: () => void;
};
