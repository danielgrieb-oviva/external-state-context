import { ExternalActionKind } from "@/types";
import { useContext } from "react";
import { ExternalStateContext } from "@/component/external-state/context";

export const useFilterPosts = () => {
  const { useExternalAction } = useContext(ExternalStateContext) || {};

  return useExternalAction?.(ExternalActionKind.FilterPosts) || null;
};
