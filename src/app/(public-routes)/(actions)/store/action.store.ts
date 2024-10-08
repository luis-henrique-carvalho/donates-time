import { create } from "zustand";
// Types
import { IPagination } from "@/types/Pagination";
import { IAction } from "../types";
// Services
import { fetchActions } from "../actions";

interface ActionStoreState {
  actions: IAction[];
  isLoadingActions: boolean;
  actionSearch: string;
  actionPage: number;
  actionError: string;
  actionPagination: IPagination | null;
}

interface ActionStoreActions {
  getActions: () => void;
  setActions: (actions: IAction[]) => void;
  setActionSearch: (search: string) => void;
  setActionPage: (page: number) => void;
}

export const useActionStore = create<ActionStoreState & ActionStoreActions>(
  (set, get) => ({
    actions: [],
    isLoadingActions: false,
    actionSearch: "",
    actionError: "",
    actionPage: 1,
    actionPagination: null,
    getActions: async () => {
      set({ isLoadingActions: true });
      const { actionSearch, actionPage } = get();
      try {
        const response = await fetchActions(actionSearch, actionPage);

        if ("error" in response) {
          set({ actionError: response.error });
          return;
        }
        set({
          actions: response.data,
          actionPagination: response.pagy, // Atualiza a propriedade de paginação
        });
      } catch (error) {
        set({ actionError: "Error fetching actions" });
      } finally {
        set({ isLoadingActions: false });
      }
    },
    setActions: (actions: IAction[]) => set({ actions }),
    setActionSearch: (search: string) =>
      set({ actionSearch: search, actionPage: 1 }),
    setActionPage: (page: number) => set({ actionPage: page }),
  })
);
