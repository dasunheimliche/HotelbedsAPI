interface BookingTapProps {
  iconSrc: any;
  label: string;
  number: number;
}

export default function BookingTab({
  iconSrc,
  label,
  number,
}: BookingTapProps) {
  return (
    <div className="w-[33.666666%] px-[.9375rem]">
      <button className="text-[#181A1F] w-full">
        <div className="w-full py-[1.875rem] flex items-center justify-between border-b-2 border-[#E5E5E5] cursor-pointer">
          <div className="flex items-center">
            <span className="relative bg-[#181A1F] inline-block h-[3.75rem] w-[3.75rem] mr-5 rounded-full text-center leading-[3.75rem]">
              <img
                src={iconSrc}
                alt=""
                className="w-full h-full object-cover object-center obje p-[0.85rem]"
              />
            </span>
            <span className="text-[1.125rem] leading-[1.75rem] text-[#181A1F] font-medium">
              {label}
            </span>
          </div>
          <div>
            <span className="font-medium text-[1.875rem] leading-[3.625rem]">
              0{number}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
