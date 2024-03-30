export default function ServiceCard({
  service,
  onSelect,
}: {
  service: any;
  onSelect: () => void;
}) {
  return (
    <div className="border border-[#E5E5E5] py-[1.875rem] px-5 flex items-center mb-[1.875rem]">
      <div className="px-[.625rem] relative w-[67%] border-r border-r-[#E5E5E5] mr-[1.25rem]">
        <div className="mb-[.9375rem] w-full text-center">
          <img
            className="block max-w-full "
            src="https://creativelayers.net/themes/luxride-html/assets/imgs/page/booking/img-vehicle.png"
            alt=""
          />
        </div>
        <div className="flex flex-wrap items-center mx-[--0.625rem]">
          <div className="text-[.875rem] leading-[2.1875rem] inline-block pr-[.625rem] pl-[1.5625rem] w-[50%]">
            Meet & Greet included
          </div>
          <div className="text-[.875rem] leading-[2.1875rem] inline-block pr-[.625rem] pl-[1.5625rem] w-[50%]">
            Free cancellation
          </div>
          <div className="text-[.875rem] leading-[2.1875rem] inline-block pr-[.625rem] pl-[1.5625rem] w-[50%]">
            Free Waiting time
          </div>
          <div className="text-[.875rem] leading-[2.1875rem] inline-block pr-[.625rem] pl-[1.5625rem] w-[50%]">
            Safe and secure travel
          </div>
          <div className="mt-10 pl-[1.5625rem]">
            <a
              href="#"
              className="underline text-[.9375rem] leading-6 font-medium"
            >
              Show more information
            </a>
          </div>
        </div>
      </div>
      <div className="w-[33%] px-[.625rem] relative">
        <div className="mb-[.625rem] text-[1.25rem] leading-[2rem] font-medium text-[#181A1F]">
          Bussiness Class
        </div>
        <div className="flex justify-between mb-[.625rem]">
          <span className="inline-block pb-[1.125rem]">Pasajeros 4</span>
          <span className="inline-block pb-[1.125rem]">Equipaje 2</span>
        </div>
        <div className="text-[#181A1F] font-medium text-[1.875rem] leading-[3.625rem]">
          $125.25
        </div>
        <div className="mb-[1.25rem]">All prices include VAT. fees & tip.</div>
        <button className="bg-black w-full rounded-[.375rem] py-[.875rem] px-6 text-zinc-50 text-[1rem] leading-[1.75rem] font-medium">
          Select
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}
