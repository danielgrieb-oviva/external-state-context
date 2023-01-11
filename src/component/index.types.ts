import { Post } from "@/types";

export type ExternalDataKey = "FILTERED_POSTS" | "POSTS";
export type GetExternalDataKey<T extends ExternalDataKey> = T;

export type ExternalDataValue<T extends ExternalDataKey = ExternalDataKey> =
  T extends GetExternalDataKey<"FILTERED_POSTS"> ? Post[] : unknown;

export type ExternalData<T extends ExternalDataKey> = Record<
  T,
  () => ExternalDataValue<T>
>;

const x: ExternalDataValue<"FILTERED_POSTS">;

// export type ExternalStateProps<T extends ExternalDataKey[]> = T extends [
//   infer First extends keyof typeof ExternalDataKey
// ]
//   ? Record<First, ExternalStateValue<First>>
//   : T extends [
//       infer First extends ExternalDataKey,
//       ...infer Rest extends ExternalDataKey[]
//     ]
//   ? Record<First, ExternalStateValue<First>> & ExternalStateProps<Rest>
//   : unknown;
