import React from "react";
import DropShadow from "react-native-drop-shadow";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Info,
  Rating,
  WorplaceCardCover,
  WorplaceCard,
  Section,
  SectionEnd,
  Icon,
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
    placeId,
  } = workplace;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <DropShadow style={styles.shadowProp}>
      <WorplaceCard elevation={5}>
        <WorplaceCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant="caption">{address}</Text>
        </Info>
      </WorplaceCard>
    </DropShadow>
  );
};
