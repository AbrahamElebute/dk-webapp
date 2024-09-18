import React, { ReactNode } from "react";
interface LabelProps {
  children: ReactNode;
  className: string;
}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={`${className}`} {...props}>
      {children}
    </label>
  );
};

export default Label;
