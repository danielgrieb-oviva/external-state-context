import { Context } from "react";

export type ExternalDataKey = string;
export type ExternalDataProp = string;
export type ExternalDataValue<T extends ExternalDataKey = ExternalDataKey> =
  unknown;

export type ExternalState = {
  state: Record<ExternalDataKey, () => ExternalDataValue>;
};

export type ExternalStateContext = Context<ExternalState | null>;

export type ExternalDataProps<
  ExternalDataKeys extends ExternalDataKey[],
  T extends string
> = ExternalDataKeys extends [infer Last extends ExternalDataKey]
  ? Record<Last, ExternalDataValue<T>>
  : ExternalDataKeys extends [
      infer Head extends ExternalDataKey,
      ...infer Rest extends ExternalDataKey[]
    ]
  ? Record<Head, ExternalDataValue> & ExternalDataProps<Rest, ExternalDataValue>
  : unknown;
