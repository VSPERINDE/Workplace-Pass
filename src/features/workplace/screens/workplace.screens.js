import React from "react";
import { Searchbar } from "react-native-paper";
import { Image, StatusBar, SafeAreaView, View } from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px`};
`;
const TopBar = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex-direction: row;
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const WorkplaceList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const Avatar = styled(Image)`
  flex-direction: row;
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.lineHeights.avatar};
  height: ${(props) => props.theme.lineHeights.avatar};
  justify-content: flex-end;
`;

export const WorkplaceScreen = () => (
  <SafeArea>
    <TopBar>
      <Avatar source={require("../asset/avatar.png")} />
    </TopBar>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <WorkplaceList>
      <WorkplaceInfoCard />
    </WorkplaceList>
  </SafeArea>
);
