import { createContext } from "react";
import { GetPostsStore } from "./GetPostsStore";

export const GetPostsStoreContext = createContext<GetPostsStore | null>(null);

GetPostsStoreContext.displayName = "GetPostsStoreContext";
