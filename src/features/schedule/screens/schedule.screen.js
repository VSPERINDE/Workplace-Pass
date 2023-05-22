import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ScheduleInfoCard } from "../components/schedule-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";

import { ActivityIndicator, Colors } from "react-native-paper";
import { TopBarComponent } from "../../workplace/components/topbar.component";

import { useDispatch, useSelector } from "react-redux";
import { getAgendamentos } from "../../../store/modules/workplace/actions";
import moment from "moment/min/moment-with-locales";
import { CancelModal } from "../components/cancel-modal.component";
moment.locale("pt-br");

const ScheduleList = styled(FlatList).attrs({
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

export const ScheduleScreen = () => {
  const dispatch = useDispatch();
  const { agendamentos, form } = useSelector((state) => state.workplace);

  useEffect(() => {
    dispatch(getAgendamentos());
  }, []);

  return (
    <SafeArea>
      {form.isLoading && (
        <LoadingView>
          <Loading size={50} animating={true} color={Colors.yellow500} />
        </LoadingView>
      )}
      <TopBarComponent />
      <ScheduleList
        data={agendamentos}
        renderItem={({ item }) => {
          return <ScheduleInfoCard agendamentos={item} />;
        }}
        keyExtractor={(item) => item._id}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
      <CancelModal form={form} />
    </SafeArea>
  );
};
