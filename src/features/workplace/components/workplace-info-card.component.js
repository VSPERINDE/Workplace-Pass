import React from "react";
import DropShadow from "react-native-drop-shadow";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";
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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    ],
    address = "Rua Pero Vaz de Caminha",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = workplace;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <DropShadow style={styles.shadowProp}>
      <WorplaceCard elevation={5}>
        <Favourite workplace={workplace} />
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
