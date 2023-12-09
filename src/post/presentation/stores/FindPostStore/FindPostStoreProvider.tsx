import { PropsWithChildren } from "react";
import { FindPostStoreContext } from "./FindPostStoreContext";
import { FindPostStore } from "./FindPostStore";
import { postModuleContainer } from "src/post/PostModule";

export const FindPostStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <FindPostStoreContext.Provider
      value={postModuleContainer.getProvided(FindPostStore)}
    >
      {children}
    </FindPostStoreContext.Provider>
  );
};
