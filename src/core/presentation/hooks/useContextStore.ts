import { Context, useContext } from "react";
import { useI18n } from "./useI18n";

export const useContextStore = <T>(
  Context: Context<T>
): Exclude<NonNullable<T>, null> => {
  const i18n = useI18n();
  const store = useContext(Context);

  if (!store) {
    throw new Error(
      i18n.t("core.errors.contextNotProvided", {
        contextName: Context.displayName,
      })
    );
  }

  return store;
};
