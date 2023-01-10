import { Timeline } from "@/component";
import { ExternalStateProvider } from "@/state/external-state-provider";
import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <ExternalStateProvider>
          <Suspense>
            <Timeline />
          </Suspense>
        </ExternalStateProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
