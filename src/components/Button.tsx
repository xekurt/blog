import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | string;
  Icon?: any;
};
const Button: FC<ButtonProps> = ({ children, Icon }) => {
  return (
    <button className="flex h-10 items-center justify-end rounded-3xl bg-[#4F73D0] px-4 py-2 text-sm font-bold text-white">
      {children}
      {Icon && (
        <span className="ml-2 rounded-xl bg-white text-[#4F73D0]">
          <Icon />
        </span>
      )}
    </button>
  );
};
export default Button;
