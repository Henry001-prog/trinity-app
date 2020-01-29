import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import { Container, Title } from "./styles";

import RepoComponent from "../../components/repoComponent";
import Loading from "../../components/Loading";

import api from "../../services/api";

export default function Repos({ navigation }) {
  const githubUserName = navigation.getParam("username");

  const [repoData, setRepoData] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function loadRepos(username) {
      setActive(true);
      const response = await api.get(`/users/${username}/repos`);
      setRepoData(response.data);
      setActive(false);
    }
    loadRepos(githubUserName);
  }, []);

  return (
    <Container>
      {active && <Loading />}
      {!active && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
        >
          {repoData.map(repo => (
            <RepoComponent key={repo.id} repo={repo} />
          ))}
        </ScrollView>
      )}
    </Container>
  );
}
