import * as Localization from "expo-localization";
import { I18n as I18nJs, Scope, TranslateOptions } from "i18n-js";
import locales from "./locales";
import { injectable } from "inversiland";

@injectable()
class I18n {
  private readonly i18nJs;

  constructor() {
    this.i18nJs = new I18nJs(locales);

    this.i18nJs.enableFallback = true;
    this.i18nJs.locale = Localization.locale.substring(0, 2);
  }

  public t(scope: Scope, options?: TranslateOptions) {
    return this.i18nJs.t(scope, options);
  }
}

export default I18n;
