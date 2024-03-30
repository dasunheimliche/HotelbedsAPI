import useResultStore from "@/stores/useResultStore";
import BookingTab from "./components/tab";

import vehicleIconHover from "@/assets/icons/vehicle-hover.svg";
import pax from "@/assets/icons/pax.svg";
import payment from "@/assets/icons/payment.svg";
import ServiceCard from "./components/service-card";
import { useState } from "react";

const tabs = ["start", "details", "payment"];

export default function Results() {
  const { data, isLoading, error, fetchData } = useResultStore();
  const [tabIndex, setTabIndex] = useState(0);
  const [bookingData, setBookingData] = useState({});

  console.log("RESULTS PAGE DATA: ", data);

  function handleSelect() {}

  return (
    <main>
      <section>
        <div className="max-w-[73.125rem] w-full px-3 mr-auto ml-auto relative mt-12">
          <div className="w-full flex">
            <BookingTab
              iconSrc={vehicleIconHover}
              label="Vehículo"
              number={1}
            />
            <BookingTab iconSrc={pax} label="Detalles" number={2} />
            <BookingTab iconSrc={payment} label="Pago" number={3} />
          </div>
          <div className="flex flex-wrap mt-[50px]">
            {tabIndex === 0 && (
              <div className="pt-[.625rem] w-[71%]">
                <div className="pr-[2.5rem]">
                  <h3 className="mb-[1.875rem] font-medium text-[1.5rem] leading-[2rem]">
                    Selecciona un servicio
                  </h3>
                  <div className="relative">
                    {data.services.map((s: any, i: number) => {
                      return (
                        <ServiceCard
                          service={s}
                          onSelect={handleSelect}
                        ></ServiceCard>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            <div className="px-[.625rem] w-[29%]">
              <div className="p-[1.875rem] rounded-[.375rem] w-full border border-[#E5E5E5] mb-[1.875rem]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
