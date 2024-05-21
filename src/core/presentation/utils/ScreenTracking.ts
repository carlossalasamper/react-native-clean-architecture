/**
 * Get Current Router Name
 * @param previousRouteName
 * @param currentRouteName
 */
export const screenTracking = (
  previousRouteName: string | undefined,
  currentRouteName: string,
): void => {
  console.log(currentRouteName);
  if (previousRouteName !== currentRouteName) {
    // track something
  }
};
