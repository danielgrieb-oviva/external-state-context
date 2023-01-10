import { Post, PostKind } from "@/types";

// State
export enum ExternalStateKind {
  FilteredPosts = "FILTERED_POSTS",
}

export type ExternalStatePayload<
  T extends ExternalStateKind = ExternalStateKind
> = T extends ExternalStateKind.FilteredPosts ? void : never;

export type FilterPostStateValue = Post[];

export type ExternalStateValue<T> = T extends ExternalStateKind.FilteredPosts
  ? FilterPostStateValue
  : never;

export type UseExternalStateValue<
  T extends ExternalStateKind = ExternalStateKind
> = (
  postKind: T
) => (payload: ExternalStatePayload<T>) => ExternalStateValue<T>;

// Action
export enum ExternalActionKind {
  FilterPosts = "FILTER_POSTS",
}

export type FilterPostActonPayload = PostKind | null;

export type ExternalActionPayload<
  T extends ExternalActionKind = ExternalActionKind
> = T extends ExternalActionKind.FilterPosts ? FilterPostActonPayload : never;

export type UseExternalAction<
  T extends ExternalActionKind = ExternalActionKind
> = (postKind: T) => (payload: ExternalActionPayload<T>) => void;

// Context
export type ExternalStateContext = {
  useExternalStateValue: UseExternalStateValue;
  useExternalAction: UseExternalAction;
};
