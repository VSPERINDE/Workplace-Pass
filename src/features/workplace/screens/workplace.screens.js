import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { TopBarComponent } from "../components/topbar.component";

import { useDispatch, useSelector } from "react-redux";
import { allWorkplace } from "../../../store/modules/workplace/actions";

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
  const dispatch = useDispatch();
  const { workplace, form } = useSelector((state) => state.workplace);

  useEffect(() => {
    dispatch(allWorkplace());
  }, []);

  return (
    <SafeArea>
      {form.isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.yellow500} />
        </LoadingView>
      )}
      <TopBarComponent />
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
