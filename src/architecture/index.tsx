import { FC, useContext } from "react";
import {
  ExternalState,
  ExternalStateContext,
  ExternalStateKey,
} from "./index.types";

export type UseExternalStateArgs = {
  externalStateKeys: ExternalStateKey[];
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
  externalStateKeys: ExternalStateKey[];
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
