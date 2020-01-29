import React, { useState } from "react";

import {
  Container,
  TitlePrincipal,
  TitleSecondary,
  ViewLogo,
  InputSearch
} from "./styles";
import api from "../../services/api";

import { Alert, Keyboard } from "react-native";

export default function Home({ navigation }) {
  const [username, setUserName] = useState("");

  async function loadRepos() {
    try {
      const response = await api.get(`/users/${username}`);
      if (response.data) {
        navigation.navigate("Repos", { username });
        setUserName("");
      }
    } catch (error) {
      Alert.alert("Usuário não encontrado");
      setUserName("");
      return;
    }
  }

  return (
    <Container behavior="padding">
      <ViewLogo>
        <TitlePrincipal>Github</TitlePrincipal>
        <TitleSecondary>Search</TitleSecondary>
      </ViewLogo>
      <InputSearch
        placeholder="Enter with your github username"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setUserName}
        value={username}
        keyboardAppearance="dark"
        returnKeyType="search"
        onSubmitEditing={loadRepos}
        underlineColorAndroid="transparent"
      />
    </Container>
  );
}
