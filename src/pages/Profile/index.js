import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import { View } from "react-native";
import {
  Container,
  Avatar,
  Name,
  Location,
  Repositories,
  Followers,
  Content
} from "./styles";

import api from "../../services/api";

export default function Profile({ navigation }) {
  const githubUserName = navigation.getParam("username");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function loadDataUser(username) {
      const response = await api.get(`/users/${username}`);
      setUserData(response.data);
    }
    loadDataUser(githubUserName);
  }, []);

  return (
    <Container>
      <Avatar source={{ url: userData.avatar_url }} />
      <Name>{userData.login}</Name>
      <Content>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="location" size={14} color="#FFF" />
          <Location style={{ marginLeft: 5 }}>
            {userData.location ? userData.location : "no location"}
          </Location>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconFeather name="archive" size={12} color="#FFF" />
          <Repositories style={{ marginLeft: 5 }}>
            {userData.public_repos}
          </Repositories>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconSimple name="user-follow" size={14} color="#FFF" />
          <Followers style={{ marginLeft: 5 }}>{userData.followers}</Followers>
        </View>
      </Content>
    </Container>
  );
}
