import { ExternalStateKindMap, ExternalActionKindMap } from "@/state/types";
import { createContext } from "react";

export const ExternalStateContext = createContext<ExternalStateKindMap | null>(
  null
);

export const ExternalActionContext =
  createContext<ExternalActionKindMap | null>(null);

export type IExteralStateContext = typeof ExternalStateContext;
export type IExteralActionContext = typeof ExternalActionContext;
