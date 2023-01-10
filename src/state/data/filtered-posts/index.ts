import { postAtom } from "@/state/data/posts";
import { Post } from "@/types";
import { atom, useRecoilValue } from "recoil";

export const filteredPostsAtom = atom<Post[]>({
  key: "filteredPostsAtom",
  default: postAtom,
});

export const useFilteredPostsValue = () => {
  const filteredPosts = useRecoilValue(filteredPostsAtom);

  return filteredPosts;
};
