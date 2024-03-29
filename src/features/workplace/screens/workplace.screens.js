import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

import { ActivityIndicator, Colors } from "react-native-paper";
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
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(allWorkplace());
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    dispatch(allWorkplace());
  };

  return (
    <SafeArea>
      {form.isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.yellow500} />
        </LoadingView>
      )}
      <TopBarComponent navigation={navigation}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
            keyExtractor={(item) => item._id}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{ padding: 16 }}
          />
        </ScrollView>
      </TopBarComponent>
    </SafeArea>
  );
};
