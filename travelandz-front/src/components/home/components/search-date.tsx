import SearchItem from "@/components/atoms/search-item";
import useSearchStore from "@/stores/useSearchStore";

import calendarIcon from "@/assets/icons/calendar.svg";

export default function SearchDate() {
  const { searchForm, setSearchFormData } = useSearchStore();

  const handleSetDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFormData({
      ...searchForm,
      ["date"]: e.target.value,
    });
  };

  return (
    <SearchItem
      label={"Fecha"}
      iconUrl={calendarIcon}
      className="max-w-[14.375rem] min-w-[14.375rem]"
    >
      <input
        onChange={handleSetDeparture}
        className="w-full inline-block p-0 border-none text-[.875rem] leading-[1.5rem] font-medium text-[#181A1F] bg-transparent"
        type="date"
      />
    </SearchItem>
  );
}
