import { ExternalActionContext } from "@/components/Context";
import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { PostKind } from "@/types";

export const TimelineHeader = () => {
  const filterPosts = useContext(ExternalActionContext)?.["FILTER_POSTS"];

  const handleFilterPostsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const kind = event.target.value as PostKind;

    filterPosts?.({ filter: kind });
  };

  return (
    <Select onChange={handleFilterPostsChange}>
      {Object.values(PostKind).map((kind) => (
        <option value={kind}>{kind}</option>
      ))}
    </Select>
  );
};
