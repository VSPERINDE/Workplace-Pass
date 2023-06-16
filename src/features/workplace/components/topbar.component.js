import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Image, View, TouchableOpacity, Text } from "react-native";
import menu from "../asset/menu.png";
import close from "../asset/close.png";
import { SafeArea } from "../../../components/utility/safe-area.component";

const TopBar = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex-direction: row;
`;
const Avatar = styled(Image)`
  flex-direction: row;
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.lineHeights.avatar};
  height: ${(props) => props.theme.lineHeights.avatar};
`;
const TopBarEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;
const Logo = styled(Image)`
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const TopBarStart = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;
const TopBarCenter = styled(View)`
  flex-direction: row;
  justify-content: center;
  width: 160px;
  height: 90px;
`;

const tabIcon = {
  Home: "md-home",
  Agenda: "md-book",
  Conta: "md-settings",
  Favoritos: "md-heart",
  Logout: "md-logout",
};

export const TopBarComponent = ({ navigation, children }) => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;

  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={require("../asset/avatar.png")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginTop: 8,
            marginLeft: 40,
          }}
        ></Image>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "#757575",
              marginLeft: 35,
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {TabButton(currentTab, setCurrentTab, "Home")}
          {TabButton(currentTab, setCurrentTab, "Agenda")}
          {TabButton(currentTab, setCurrentTab, "Favoritos")}
          {TabButton(currentTab, setCurrentTab, "Conta")}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", "Logout")}</View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          position: "absolute",
          backgroundColor: "#F1F1F1",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TopBar>
            <TopBarStart>
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 0.88,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValue, {
                    toValue: showMenu ? 0 : 230,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(closeButtonOffset, {
                    toValue: !showMenu ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setShowMenu(!showMenu);
                }}
              >
                <Image
                  source={showMenu ? close : menu}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: "black",
                  }}
                ></Image>
              </TouchableOpacity>
            </TopBarStart>

            <TopBarCenter>
              <Logo source={require("../asset/logo_wup.png")} />
            </TopBarCenter>

            <TopBarEnd>
              <TouchableOpacity
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Conta" }],
                  });
                }}
              >
                <Avatar source={require("../asset/avatar.png")} />
              </TouchableOpacity>
            </TopBarEnd>
          </TopBar>
          <View>{children}</View>
        </Animated.View>
      </Animated.View>
    </SafeArea>
  );
};

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title) => {
  const iconName = tabIcon[title];
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Ionicons
          source={iconName}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#FDAF01" : "white",
          }}
        ></Ionicons>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#FDAF01" : "#757575",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
