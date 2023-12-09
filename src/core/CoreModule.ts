import { getModuleContainer, module } from "inversify-sugar";
import I18n from "./presentation/i18n";
import HttpClient from "./infrastructure/implementations/HttpClient";
import { IHttpClientToken } from "./domain/specifications/IHttpClient";
import { EnvToken } from "./domain/entities/Env";
import env from "./infrastructure/env";

@module({
  providers: [
    I18n,
    {
      isGlobal: true,
      provide: EnvToken,
      useValue: env,
    },
    {
      isGlobal: true,
      provide: IHttpClientToken,
      useClass: HttpClient,
    },
  ],
})
export class CoreModule {}

export const coreModuleContainer = getModuleContainer(CoreModule);
