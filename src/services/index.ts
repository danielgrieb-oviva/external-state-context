import { Post, PostKind } from "@/types";

const posts: Post[] = [
  { kind: PostKind.Weight },
  { kind: PostKind.Food },
  { kind: PostKind.Activity },
  { kind: PostKind.Weight },
];

export const getPosts = async () => {
  return new Promise<Post[]>((resolve) => resolve(posts));
};
