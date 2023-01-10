import { useFilteredPostsValue } from "@/component/external-state";
import { Text, VStack } from "@chakra-ui/react";

export const TimelineBody = () => {
  const filteredPosts = useFilteredPostsValue();

  return (
    <VStack>
      {filteredPosts &&
        filteredPosts.map(({ kind }, index) => <Text key={index}>{kind}</Text>)}
    </VStack>
  );
};
