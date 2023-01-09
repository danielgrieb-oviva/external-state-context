import { postAtom } from "@/state/Posts";
import { Post } from "@/types";
import { atom, useRecoilValue } from "recoil";

export const filteredPostsAtom = atom<Post[]>({
  key: "postAtom",
  default: postAtom,
});

export const useFilteredPostsValue = () => {
  const filteredPosts = useRecoilValue(filteredPostsAtom);

  return filteredPosts;
};
