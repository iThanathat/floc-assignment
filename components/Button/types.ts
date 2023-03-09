export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: "primary" | "secondary" | "outline-secondary" | "outline-primary";
  onClick: () => void;
};
