import { Post } from "@/types";

export enum ExternalStateKey {
  FilteredPosts = "FILTERED_POSTS",
}

export type ExternalStateValue<T extends ExternalStateKey> =
  T extends ExternalStateKey.FilteredPosts ? Post[] : unknown;

export type ExternalState<T extends ExternalStateKey> = Record<
  T,
  () => ExternalStateValue<T>
>;

export type ExternalStateProps<T extends ExternalStateKey[]> = T extends [
  infer First extends ExternalStateKey
]
  ? Record<First, ExternalStateValue<First>>
  : T extends [
      infer First extends ExternalStateKey,
      ...infer Rest extends ExternalStateKey[]
    ]
  ? Record<First, ExternalStateValue<First>> & ExternalStateProps<Rest>
  : unknown;
