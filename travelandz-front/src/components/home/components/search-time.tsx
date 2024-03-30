import SearchItem from "@/components/atoms/search-item";
import timeIcon from "@/assets/icons/time.svg";
import useSearchStore from "@/stores/useSearchStore";

export default function SearchTime() {
  const { searchForm, setSearchFormData } = useSearchStore();

  const handleSetDeparture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFormData({
      ...searchForm,
      ["time"]: e.target.value,
    });
  };

  return (
    <SearchItem
      label={"Hora"}
      iconUrl={timeIcon}
      className="max-w-[14.375rem] min-w-[14.375rem]"
    >
      <input
        onChange={handleSetDeparture}
        className="w-full inline-block p-0 border-none text-[.875rem] leading-[1.5rem] font-medium text-[#181A1F] bg-transparent"
        type="time"
      />
    </SearchItem>
  );
}
