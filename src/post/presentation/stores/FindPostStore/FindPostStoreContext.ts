import { createContext } from "react";
import { FindPostStore } from "./FindPostStore";

export const FindPostStoreContext = createContext<FindPostStore | null>(null);

FindPostStoreContext.displayName = "FindPostStoreContext";
