import { Text, VStack } from "@chakra-ui/react";
import { withExternalState, ExternalDataProps } from "@/architecture";

import {
  ExternalDataKey,
  ExternalDataValue,
  GetExternalDataKey,
} from "@/component/index.types";
import { ExternalStateContext } from "@/component/external-state-context";

// TODO duplicated this information to make typescript happy. This is redundant information.
const externalStateKeys: ExternalDataKey[] = ["FILTERED_POSTS", "POSTS"];

type Props = ExternalDataProps<
  [GetExternalDataKey<"FILTERED_POSTS">],
  ExternalDataValue
>;

export const TimelineBody = ({ FILTERED_POSTS }: Props) => {
  return (
    <VStack>
      {FILTERED_POSTS &&
        FILTERED_POSTS.map(({ kind }, index) => (
          <Text key={index}>{kind}</Text>
        ))}
    </VStack>
  );
};

export default withExternalState({
  Component: TimelineBody,
  externalStateContext: ExternalStateContext,
  externalStateKeys,
});
