import { ExternalState } from "@/architecture/index.types";
import { createContext } from "react";

export const ExternalStateContext = createContext<ExternalState | null>(null);
