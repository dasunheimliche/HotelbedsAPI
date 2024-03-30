import searchIcon from "@/assets/icons/search.svg";
import useResultStore from "@/stores/useResultStore";
import useSearchStore from "@/stores/useSearchStore";
import { useNavigate } from "react-router-dom";

export default function SearchButton() {
  const { searchForm, setSearchFormData } = useSearchStore();
  const { data, isLoading, error, fetchData } = useResultStore();

  const navigate = useNavigate();

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    fetchData(searchForm);
    navigate("/results");
  }

  return (
    <div className="max-w-[10.0625rem] min-w-[10.0625rem] w-full flex px-[.9375rem] items-center relative">
      <button
        onClick={handleSubmit}
        className="py-[.8125rem] px-[1.5rem] rounded-[3.75rem] bg-black text-white text-[1rem] leading-[1.75rem] font-medium flex justify-center items-center"
        disabled={isLoading}
      >
        <img
          className="align-middle mr-[.625rem]"
          src={searchIcon}
          alt="search icon"
        />
        Buscar
      </button>
    </div>
  );
}
