import { ExternalStateContext } from "@/components/Context";
import { Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";

export const TimelineBody = () => {
  const filteredPosts = useContext(ExternalStateContext)?.["FILTERED_POSTS"]();

  return (
    <VStack>
      {filteredPosts && filteredPosts.map(({ kind }) => <Text>{kind}</Text>)}
    </VStack>
  );
};
