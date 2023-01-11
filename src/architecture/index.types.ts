import { Context } from "react";

export type ExternalStateKey = string;
export type ExternalStateProp = string;
export type ExternalStateValue = unknown;

export type ExternalState = {
  externalState: Record<ExternalStateKey, () => ExternalStateValue>;
};

export type ExternalStateContext = Context<ExternalState | null>;
