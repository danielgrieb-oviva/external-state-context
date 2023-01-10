import { ExternalStateKind } from "@/types";
import { useContext } from "react";
import { ExternalStateContext } from "@/component/external-state/context";

export const useFilteredPostsValue = () => {
  const { useExternalStateValue } = useContext(ExternalStateContext) || {};

  return useExternalStateValue?.(ExternalStateKind.FilteredPosts)() || null;
};
