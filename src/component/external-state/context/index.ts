import { ExternalStateContext as IExternalStateContext } from "@/state/index.types";
import { createContext } from "react";

export const ExternalStateContext = createContext<IExternalStateContext | null>(
  null
);
