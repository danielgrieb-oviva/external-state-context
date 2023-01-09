export enum PostKind {
  Weight = "WEIGHT",
  Food = "FOOD",
  Activity = "ACTIVITY",
}

export type Post = {
  kind: PostKind;
};

export * from "@/state/index.types";
