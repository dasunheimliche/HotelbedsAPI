import SearchItem from "@/components/atoms/search-item";
import placeIcon from "@/assets/icons/from.svg";
import useSearchStore from "@/stores/useSearchStore";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/useDebounce";

export default function SearchDeparture() {
  const { searchForm, setSearchFormData, clearFormData } = useSearchStore();
  const [terminals, setTerminals] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState<any>();

  const { value, setValue, debounceValue } = useDebounce();

  const handleSetDeparture = (item: any) => {
    setSearchFormData({
      ...searchForm,
      ["departureData"]: { fromCode: item.code, type: item.content.type },
    });
    setValue(item.content.description);
    setSelected(item);
    setShowResults(false);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  async function getTerminals(query: string) {
    const list = await fetch(
      `http://localhost:3500/api/transfers/terminals?query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await list.json();
    setTerminals(result);
    return result;
  }

  useEffect(() => {
    if (selected && value === selected.content.description) return;
    if (debounceValue.length < 4) return;
    getTerminals(debounceValue);
    setShowResults(true);
  }, [debounceValue]);

  return (
    <SearchItem label="Partida" iconUrl={placeIcon}>
      {debounceValue.length > 3 && terminals.length > 0 && showResults && (
        <div className=" bg-zinc-50 bottom-32 rounded-lg absolute p-4">
          <ScrollArea className="w-56 min-h-3 h-72">
            {terminals.map((terminal: any, i: number) => {
              return (
                <div key={i}>
                  <button
                    className="text-left text-[0.8rem]"
                    onClick={() => handleSetDeparture(terminal)}
                    type="button"
                  >
                    {terminal.content.description}
                  </button>
                  <Separator className="my-2" />
                </div>
              );
            })}
          </ScrollArea>
        </div>
      )}
      <input
        onChange={handleChange}
        className="w-full inline-block p-0 border-none text-[.875rem] leading-[1.5rem] font-medium text-[#181A1F] bg-transparent focus:outline-none"
        type="text"
        placeholder="Ej: Ezeiza"
        value={value}
      />
    </SearchItem>
  );
}
