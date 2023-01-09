import { Timeline } from "@/containers";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Timeline />
    </ChakraProvider>
  );
}

export default App;
