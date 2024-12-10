import { PropsWithChildren } from "react";
import { GetPostsStore } from "./GetPostsStore";
import { GetPostsStoreContext } from "./GetPostsStoreContext";
import { postModuleContainer } from "src/post/PostModule";

export const GetPostsStoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <GetPostsStoreContext.Provider
      value={postModuleContainer.get(GetPostsStore)}
    >
      {children}
    </GetPostsStoreContext.Provider>
  );
};
