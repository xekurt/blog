import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | string;
  Icon?: any;
  onClick: () => void;
};
const Button: FC<ButtonProps> = ({ children, Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 items-center justify-end rounded-3xl bg-[#4F73D0] px-4 py-2 text-sm font-bold text-white active:bg-[#224DBA]"
    >
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
