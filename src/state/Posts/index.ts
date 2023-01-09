import { getPosts } from "@/services";
import { Post } from "@/types";
import { atom, selector } from "recoil";

export const postSelector = selector({
  key: "postSelector",
  get: () => getPosts(),
});

export const postAtom = atom<Post[]>({
  key: "postAtom",
  default: postSelector,
});
