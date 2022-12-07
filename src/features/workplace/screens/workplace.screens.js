import React, { useContext } from "react";
import { Image, View, FlatList, TouchableOpacity } from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { WorkplaceContext } from "../../../services/workplaces/workplaces.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";

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

const WorkplaceList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingView = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const WorkplaceScreen = ({ navigation }) => {
  const { workplace, isLoading } = useContext(WorkplaceContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.yellow500} />
        </LoadingView>
      )}
      <TopBar>
        <TopBarStart>
          <Ionicons name="md-menu" size={36} color="black" />
        </TopBarStart>
        <TopBarCenter>
          <Logo source={require("../asset/logo_wup.png")} />
        </TopBarCenter>
        <TopBarEnd>
          <Avatar source={require("../asset/avatar.png")} />
        </TopBarEnd>
      </TopBar>
      <Search />
      <WorkplaceList
        data={workplace}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WorkplaceDetail", {
                  workplace: item,
                })
              }
            >
              <WorkplaceInfoCard workplace={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
