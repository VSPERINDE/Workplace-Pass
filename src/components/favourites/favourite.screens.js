import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { WorkplaceInfoCard } from "../../features/workplace/components/workplace-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { Search } from "../../features/workplace/components/search.component";
import { TopBarComponent } from "../../features/workplace/components/topbar.component";

const WorkplaceList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <TopBarComponent />
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
