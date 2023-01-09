import { Post, PostKind } from "@/types";

export enum ExternalStateKind {
  FilteredPosts = "FILTERED_POSTS",
}

export enum ExternalActionKind {
  FilterPosts = "FILTER_POSTS",
}

export type FilterPostActonPayload = {
  filter: PostKind;
};

export type ExternalActionPayloadMap = {
  [ExternalActionKind.FilterPosts]: FilterPostActonPayload;
};

export type ExternalAction<T extends ExternalActionKind = ExternalActionKind> =
  {
    kind: T;
    payload: ExternalActionPayloadMap[T];
  };

export type ExternalStateMap = {
  [ExternalStateKind.FilteredPosts]: Post[];
};

export type UseExternalState<T extends ExternalStateKind = ExternalStateKind> =
  (postKind: T) => ExternalStateMap[T];

export type UseExternalAction<
  T extends ExternalActionKind = ExternalActionKind
> = (postKind: T) => (payload: ExternalActionPayloadMap[T]) => void;

export type ExternalStateKindMap = {
  [ExternalStateKind.FilteredPosts]: () => Post[];
};

export type ExternalActionKindMap = {
  [ExternalActionKind.FilterPosts]: (payload: FilterPostActonPayload) => void;
};
