import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StoreState {
  data: { search: any; services: any };
  isLoading: boolean;
  error: string | null;
}

export interface StoreActions {
  fetchData: (query: {}) => Promise<void>;
}

interface Store extends StoreState, StoreActions {}

export const useResultStore = create(
  persist<Store>(
    (set) => ({
      data: { search: [], services: [] },
      isLoading: false,
      error: null,
      fetchData: async (query: any) => {
        try {
          set({ isLoading: true, error: null });
          const response = await fetch(
            "http://localhost:3500/api/transfers/availability",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(query),
            }
          );
          const data = await response.json();

          set({ data, isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
        }
      },
    }),
    {
      name: "search-store",
    }
  )
);

export default useResultStore;
