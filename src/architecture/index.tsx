import { FC, useContext } from "react";
import {
  ExternalState,
  ExternalStateContext,
  ExternalDataKey,
} from "./index.types";

export type UseExternalStateArgs = {
  externalStateKeys: ExternalDataKey[];
  externalState: ExternalState | null;
};

export const useExternalState = ({
  externalStateKeys,
  externalState,
}: UseExternalStateArgs) => {
  return externalStateKeys.reduce(
    (props, stateKey) =>
      Object.assign(props, {
        [stateKey]: externalState?.state?.[stateKey](),
      }),
    {}
  );
};

export type withExternalStateArgs<T> = {
  externalStateKeys: ExternalDataKey[];
  externalStateContext: ExternalStateContext;
  Component: FC<T>;
};

export const withExternalState = <T,>({
  Component,
  externalStateContext,
  externalStateKeys,
}: withExternalStateArgs<T>) => {
  const WithExternalState = (props: T) => {
    const externalState = useContext(externalStateContext);
    const externalStateProps = useExternalState({
      externalState,
      externalStateKeys,
    });
    return <Component {...props} {...externalStateProps}></Component>;
  };

  return WithExternalState;
};

export * from "@/architecture/index.types";
