import { useFilteredPostsValue } from "@/state/data";
import { ExternalStateKind, UseExternalStateValue } from "@/state/index.types";

export const useExternalStateValue: UseExternalStateValue = (kind) => () => {
  switch (kind) {
    case ExternalStateKind.FilteredPosts:
      return useFilteredPostsValue();
    default:
      throw new Error("Unknown external state");
  }
};
