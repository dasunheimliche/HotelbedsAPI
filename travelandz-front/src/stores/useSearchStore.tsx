import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchFormData {
  date: string;
  time: string;
  departureData: { fromCode: string; type: string };
  toCode: string;
  adults: number;
  children: number;
  infants: number;
}

interface SearchStoreState {
  searchForm: SearchFormData;
  setSearchFormData: (data: Partial<SearchFormData>) => void;
  clearFormData: () => void;
}

export const useSearchStore = create(
  persist<SearchStoreState>(
    (set) => ({
      searchForm: {
        date: "",
        time: "",
        departureData: { fromCode: "", type: "" },
        toCode: "",
        adults: 1,
        children: 0,
        infants: 0,
      },
      setSearchFormData: (data: any) =>
        set((state: any) => ({ searchForm: { ...state.formData, ...data } })),
      clearFormData: () =>
        set({
          searchForm: {
            date: "",
            time: "",
            departureData: { fromCode: "", type: "" },
            toCode: "",
            adults: 0,
            children: 0,
            infants: 0,
          },
        }),
    }),
    {
      name: "search-storage", // nombre del almacenamiento
    }
  )
);

export default useSearchStore;
