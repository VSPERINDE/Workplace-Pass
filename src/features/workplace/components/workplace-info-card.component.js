import React from "react";
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
} from "./workplace-info-card.styles";

export const WorkplaceInfoCard = ({ workplace = {} }) => {
  const {
    _id,
    nome = "Workplace",
    foto = "foto-1.jpg",
    endereco = {
      rua: "rua",
    },
  } = workplace;

  console.log(workplace);

  const isClosedTemporarily = false;
  const isOpenNow = true;

  return (
    <WorplaceCard elevation={5}>
      <Favourite workplace={workplace} />
      <WorplaceCardCover key={_id} source={{ uri: foto }} />
      <Info>
        <Text variant="label">{nome}</Text>
        <Section>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{endereco.rua}</Text>
      </Info>
    </WorplaceCard>
  );
};
