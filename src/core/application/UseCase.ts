/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UseCase<
  PayloadType = void,
  ResponseType extends Promise<any> = Promise<void>
> {
  execute(payload: PayloadType): ResponseType;
}
