import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcons } from "@expo/vector-icons";

import Repos from "./pages/Repos";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          headerShown: false
        })
      },
      Repos: {
        screen: Repos,
        navigationOptions: ({ navigation }) => ({
          title: `Repos from ${navigation.getParam("username")}`,
          headerBackTitleVisible: false,
          headerStyle: {
            shadowColor: "transparent",
            backgroundColor: "#252535"
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 8 }}
              onPress={() =>
                navigation.navigate("Profile", {
                  username: navigation.getParam("username")
                })
              }
            >
              <MaterialIcons name="account-circle" size={26} color="#fff" />
            </TouchableOpacity>
          )
        })
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          headerBackTitleVisible: false
        }
      }
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#252535"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  )
);

export default Routes;
