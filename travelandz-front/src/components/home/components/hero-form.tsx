import SearchDate from "./search-date";
import SearchTime from "./search-time";
import SearchDeparture from "./search-departure";
import SearchDestination from "./search-destination";
import SearchButton from "@/components/atoms/search-button";
import useSearchStore from "@/stores/useSearchStore";

export default function HeroForm() {
  const { searchForm, setSearchFormData } = useSearchStore();

  function handleSetAdults(e: React.ChangeEvent<HTMLSelectElement>) {
    setSearchFormData({ ...searchForm, adults: +e.target.value });
  }

  function handleSetChildrens(e: React.ChangeEvent<HTMLSelectElement>) {
    setSearchFormData({ ...searchForm, children: +e.target.value });
  }

  function handleSetInfants(e: React.ChangeEvent<HTMLSelectElement>) {
    setSearchFormData({ ...searchForm, infants: +e.target.value });
  }

  return (
    <form className="absolute bottom-0 mb-36 left-1/2 -translate-x-1/2 bg-zinc-50 py-5 px-1 rounded-[1.5rem] max-w-[73.125rem]">
      <div className=" px-[1.6rem] pb-5 flex items-center font-normal gap-3">
        <label>Pasajeros</label>
        <select
          name="adultos"
          id="adultos"
          className="focus:outline-none"
          onChange={handleSetAdults}
        >
          <option value="1">01 Adulto</option>
          <option value="2">02 Adultos</option>
          <option value="3">03 Adultos</option>
          <option value="4">04 Adultos</option>
          <option value="5">05 Adultos</option>
          <option value="6">06 Adultos</option>
          <option value="7">07 Adultos</option>
          <option value="8">08 Adultos</option>
        </select>
        <select
          onChange={handleSetChildrens}
          name="ninos"
          id="ninos"
          className="focus:outline-none"
        >
          <option value="">00 Niños</option>
          <option value="1">01 Niños</option>
          <option value="2">02 Niños</option>
          <option value="3">03 Niños</option>
          <option value="4">04 Niños</option>
          <option value="5">05 Niños</option>
          <option value="6">06 Niños</option>
          <option value="7">07 Niños</option>
          <option value="8">08 Niños</option>
        </select>
        <select
          onChange={handleSetInfants}
          name="bebes"
          id="bebes"
          className="focus:outline-none"
        >
          <option value="">00 Bebes</option>
          <option value="1">01 Bebes</option>
          <option value="2">02 Bebes</option>
          <option value="3">03 Bebes</option>
          <option value="4">04 Bebes</option>
          <option value="5">05 Bebes</option>
          <option value="6">06 Bebes</option>
          <option value="7">07 Bebes</option>
          <option value="8">08 Bebes</option>
        </select>
      </div>
      <div className="flex">
        <SearchDate />
        <SearchTime />
        <SearchDeparture />
        <SearchDestination />
        <SearchButton />
      </div>
    </form>
  );
}

// export default function HeroForm() {
//   return (
//     <form className="flex absolute bottom-0 mb-36 left-1/2 -translate-x-1/2 bg-zinc-50 py-5 px-1 rounded-[12.5rem] max-w-[73.125rem]">
//       <div>menu</div>
//       <div className="flex absolute bottom-0 mb-36 left-1/2 -translate-x-1/2 bg-zinc-50 py-5 px-1 rounded-[12.5rem] max-w-[73.125rem]">
//         <SearchDate />
//         <SearchTime />
//         <SearchDeparture />
//         <SearchDestination />
//         <SearchButton />
//       </div>
//     </form>
//   );
// }
