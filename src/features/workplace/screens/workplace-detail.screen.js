import React from "react";

import { WorkplaceInfoCard } from "../components/workplace-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const WorkplaceDetailScreen = ({ route }) => {
  const { workplace } = route.params;
  return (
    <SafeArea>
      <WorkplaceInfoCard workplace={workplace} />
    </SafeArea>
  );
};
