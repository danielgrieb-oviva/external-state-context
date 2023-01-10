import { useRecoilCallback } from "recoil";
import {
  UseExternalAction,
  ExternalActionKind,
  ExternalActionPayload,
} from "@/state/index.types";
import { filteredPostsAtom } from "@/state/data";
import { filterPosts as filterPostsApi } from "@/service";

export const useAyncStateUpdate = () => {
  const filterPosts = useRecoilCallback(
    ({ set }) =>
      async (filter: ExternalActionPayload<ExternalActionKind.FilterPosts>) => {
        const filteredPosts = await filterPostsApi(filter);
        set(filteredPostsAtom, filteredPosts);
      }
  );

  return {
    filterPosts,
  };
};

export const useExternalAction: UseExternalAction = (actionKind) => {
  const { filterPosts } = useAyncStateUpdate();

  switch (actionKind) {
    case ExternalActionKind.FilterPosts:
      return filterPosts;
    default:
      throw new Error("Unknown external action");
  }
};
