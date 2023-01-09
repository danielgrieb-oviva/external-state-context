import { useFilteredPostsValue } from "@/state/FilteredPosts";
import {
  ExternalStateKindMap,
  ExternalStateKind,
  UseExternalState,
} from "@/state/types";

export const externalStateKindMap: ExternalStateKindMap = {
  [ExternalStateKind.FilteredPosts]: () => useFilteredPostsValue(),
};

export const useExternalStateValue: UseExternalState = (
  externalStateKind: ExternalStateKind
) => {
  const externalState = externalStateKindMap[externalStateKind]();

  return externalState;
};
8;
