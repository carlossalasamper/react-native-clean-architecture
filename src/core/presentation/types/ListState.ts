import PaginationState from "./PaginationState";

export default interface ListState<
  ResultItemType,
  FiltersType = Record<string, never>
> {
  isLoading: boolean;
  results: ResultItemType[];
  count: number;
  filters: FiltersType;
  pagination: PaginationState;
}
