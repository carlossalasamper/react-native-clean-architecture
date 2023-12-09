import { FindPostStore } from "./FindPostStore";
import { FindPostStoreContext } from "./FindPostStoreContext";
import { useContextStore } from "src/core/presentation/hooks/useContextStore";

export const useFindPostStore = (): FindPostStore => {
  const store = useContextStore(FindPostStoreContext);

  return store;
};
