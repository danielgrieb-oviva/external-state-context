import { ExternalStateContext } from "@/component";
import { useExternalAction } from "@/state/external-action";
import { useExternalStateValue } from "@/state/external-state";

export type ExternalStateProviderProps = {
  children: React.ReactNode;
};

export const ExternalStateProvider = ({
  children,
}: ExternalStateProviderProps) => {
  return (
    <ExternalStateContext.Provider
      value={{ useExternalStateValue, useExternalAction }}
    >
      {children}
    </ExternalStateContext.Provider>
  );
};
