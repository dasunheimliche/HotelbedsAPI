import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      language: "es",
      holder: {
        name: "",
        surname: "",
        email: "",
        phone: "",
      },
      transfers: [
        {
          rateKey: "",
          transferDetails: [
            {
              type: "",
              direction: "ARRIVAL",
              code: "",
              companyName: "null",
            },
          ],
        },
      ],
      clientReference: "",
      welcomeMessage: "",
      remark: "",
      setState: (newState: any) =>
        set((state: any) => ({ ...state, ...newState })),
    }),
    {
      name: "booking-store",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
