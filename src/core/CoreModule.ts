import { getModuleContainer, module } from "inversify-sugar";
import I18n from "./presentation/i18n";

@module({
  providers: [I18n],
})
export class CoreModule {}

export const coreModuleContainer = getModuleContainer(CoreModule);
