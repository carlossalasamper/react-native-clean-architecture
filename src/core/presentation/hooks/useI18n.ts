import { useMemo } from "react";
import { coreModuleContainer } from "src/core/CoreModule";
import I18n from "../i18n";

export const useI18n = () => {
  const i18n = useMemo(() => {
    return coreModuleContainer.get(I18n);
  }, []);

  return i18n;
};
