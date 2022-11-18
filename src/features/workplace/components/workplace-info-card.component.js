import React from "react";
import DropShadow from "react-native-drop-shadow";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  Rating,
  WorplaceCardCover,
  WorplaceCard,
  styles,
} from "./workplace-info-card.styles";

export const WorkplaceInfoCard = ({ workplace = {} }) => {
  const {
    name = "Sperinde Advogados",
    icon,
    photos = [require("../asset/workplace.png")],
    address = "Rua Pero Vaz de Caminha",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = workplace;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <DropShadow style={styles.shadowProp}>
      <WorplaceCard elevation={5}>
        <WorplaceCardCover key={name} source={photos[0]} />
        <Info>
          <Text variant="label">{name}</Text>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Text variant="caption">{address}</Text>
        </Info>
      </WorplaceCard>
    </DropShadow>
  );
};
