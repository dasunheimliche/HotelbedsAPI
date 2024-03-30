import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface SearchItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label: string;
  iconUrl: string;
}

export default function SearchItem({
  children,
  label,
  iconUrl,
  className,
}: SearchItemProps) {
  return (
    <div
      className={cn(
        "w-full flex px-[.9375rem] items-center relative",
        className
      )}
    >
      <div className="max-w-[3.25rem] w-full min-w[3.25rem] mr-[.9375rem]">
        <span className="w-[3.25rem] h-[3.25rem] rounded-full bg-[#F6F6F6] bg-center bg-no-repeat align-middle flex justify-center items-center ">
          <img src={iconUrl} alt="icon" />
        </span>
      </div>
      <div className="w-full">
        <label className="text-[.875rem] font-normal leading-[.875] text-[#626262]">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}
