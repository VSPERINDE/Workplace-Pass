import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, TouchableOpacity } from "react-native";

const TopBar = styled(View)`
  padding: ${(props) => props.theme.space[3]};
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
`;
const Logo = styled(Image)`
  flex-direction: row;
  width: 130px;
  height: 80px;
`;
const TopBarStart = styled(View)`
  flex: 1;
  flex-direction: row;
`;
const TopBarCenter = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

export const TopBarComponent = () => {
  return (
    <TopBar>
      <TopBarStart>
        <TouchableOpacity>
          <Ionicons name="md-menu" size={36} color="black" />
        </TouchableOpacity>
      </TopBarStart>
      <TopBarCenter>
        <Logo source={require("../asset/logo_wup.png")} />
      </TopBarCenter>
      <TopBarEnd>
        <Avatar source={require("../asset/avatar.png")} />
      </TopBarEnd>
    </TopBar>
  );
};
