import React, { useContext } from "react";
import { Image, View, FlatList, TouchableOpacity } from "react-native";
import { WorkplaceInfoCard } from "../../features/workplace/components/workplace-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { Search } from "../../features/workplace/components/search.component";

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

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <TopBar>
        <TopBarStart>
          <Ionicons name="md-menu" size={36} color="black" />
        </TopBarStart>
        <TopBarCenter>
          <Logo
            source={require("../../features/workplace/asset/logo_wup.png")}
          />
        </TopBarCenter>
        <TopBarEnd>
          <Avatar
            source={require("../../features/workplace/asset/avatar.png")}
          />
        </TopBarEnd>
      </TopBar>
      <Search />
      <WorkplaceList
        data={favourites}
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
