import { ChangeEvent } from "react";
import { Select } from "@chakra-ui/react";
import { useFilterPosts } from "@/component/external-state";
import { PostKind } from "@/types";

export const TimelineHeader = () => {
  const filterPosts = useFilterPosts();

  const handleFilterPostsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const kind = event.target.value;

    filterPosts?.(kind === "ALL" ? null : (kind as PostKind));
  };

  return (
    <Select onChange={handleFilterPostsChange}>
      <option value={"ALL"}>ALL</option>
      {Object.values(PostKind).map((kind, index) => (
        <option key={index} value={kind}>
          {kind}
        </option>
      ))}
    </Select>
  );
};
