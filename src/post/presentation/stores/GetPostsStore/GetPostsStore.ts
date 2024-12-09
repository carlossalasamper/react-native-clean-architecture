import { injectable, inject } from "inversiland";
import { makeAutoObservable } from "mobx";
import GetPostsStoreState from "../../types/GetPostsStoreState";
import GetPostsPayload from "src/post/application/types/GetPostsPayload";
import GetPostsUseCase from "src/post/application/useCases/GetPostsUseCase";

@injectable()
export class GetPostsStore implements GetPostsStoreState {
  isLoading = false;
  results = [] as GetPostsStoreState["results"];
  count = 0;
  filters = {};
  pagination = {
    page: 1,
    pageSize: 25,
  };

  constructor(
    @inject(GetPostsUseCase)
    private readonly getPostsUseCase: GetPostsUseCase
  ) {
    makeAutoObservable(this);
  }

  get pageCount() {
    return Math.ceil(this.count / this.pagination.pageSize);
  }

  get isEmpty(): boolean {
    return this.results.length === 0;
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setResults = (results: GetPostsStoreState["results"]) => {
    this.results = results;
  };

  setCount = (count: GetPostsStoreState["count"]) => {
    this.count = count;
  };

  mergeFilters = (payload: Partial<GetPostsStoreState["filters"]>) => {
    Object.assign(this.filters, payload);
  };

  mergePagination = (
    payload: Partial<GetPostsStoreState["pagination"]>
  ): void => {
    Object.assign(this.pagination, payload);
  };

  async getPosts() {
    const payload: GetPostsPayload = {
      ...this.filters,
      ...this.pagination,
    };

    this.setIsLoading(true);

    return this.getPostsUseCase
      .execute(payload)
      .then((response) => {
        this.setResults(response.results);
        this.setCount(response.count);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  }
}
