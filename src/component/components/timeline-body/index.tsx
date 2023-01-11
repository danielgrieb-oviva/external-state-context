import { useFilteredPostsValue } from "@/component/external-state";
import { Text, VStack } from "@chakra-ui/react";
import { withExternalState } from "@/architecture";

export const TimelineBody = ({ Posts }) => {
  const filteredPosts = useFilteredPostsValue();

  return (
    <VStack>
      {filteredPosts &&
        filteredPosts.map(({ kind }, index) => <Text key={index}>{kind}</Text>)}
    </VStack>
  );
};

export default withExternalState({
  Component,
  externalStateContext,
  externalStateKeys,
});
