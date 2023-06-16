import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { WorkplaceInfoCard } from "../../features/workplace/components/workplace-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { TopBarComponent } from "../../features/workplace/components/topbar.component";
import { Text } from "react-native-paper";

const WorkplaceList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const TextPaper = styled(Text)`
  padding-top: 30px;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <TopBarComponent navigation={navigation}>
        {favourites.length === 0 ? (
          <TextPaper>Nenhum favorito adicionado!</TextPaper>
        ) : (
          <>
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
              keyExtractor={(item) => item._id}
              // eslint-disable-next-line react-native/no-inline-styles
              contentContainerStyle={{ padding: 16 }}
            />
          </>
        )}
      </TopBarComponent>
    </SafeArea>
  );
};
