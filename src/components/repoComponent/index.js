import React from "react";

import { Card, Title, StarContent, StarCount } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function RepoComponent({ repo }) {
  return (
    <Card>
      <Title>{repo.name}</Title>
      <StarContent>
        <MaterialIcons name="star" size={14} color="#FFF" />
        <StarCount>{repo.stargazers_count}</StarCount>
      </StarContent>
    </Card>
  );
}
