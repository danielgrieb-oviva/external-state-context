import { useRecoilCallback } from "recoil";
import {
  ExternalAction,
  ExternalActionKind,
  FilterPostPayload,
} from "@/state/index.types";
import { postAtom } from "@/state/Posts";
import { filteredPostsAtom } from "@/state/FilteredPosts";
import { ExternalActionPayloadMap, UseExternalAction } from "@/state/types";
import { PostKind } from "@/types";

export const useAyncStateUpdate = () => {
  const filterPosts = useRecoilCallback(
    ({ snapshot, set }) =>
      async ({ filter }: FilterPostPayload) => {
        const posts = await snapshot.getPromise(postAtom);
        const filteredPosts = posts.filter(({ kind }) => kind === filter);
        set(filteredPostsAtom, filteredPosts);
      }
  );

  return {
    filterPosts,
  };
};

export const useExternalAction: UseExternalAction =
  (actionKind) => (payload) => {
    const { filterPosts } = useAyncStateUpdate();

    switch (actionKind) {
      case ExternalActionKind.FilterPosts:
        return filterPosts(payload);
      default:
        throw new Error("Unknown external action");
    }
  };
