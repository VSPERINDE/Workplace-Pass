import React from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {
  Info,
  WorplaceCardCover,
  WorplaceCard,
  Section,
  SectionEnd,
} from "./workplace-info-card.styles";

export const WorkplaceInfoCard = ({ workplace = {} }) => {
  const {
    _id,
    nome = "Workplace",
    foto = "https://www.ourinhos.unesp.br/Home/sobreocampus/administracao/divisaotecnicaacademica/sem-foto.gif",
    endereco = {
      rua: "rua",
    },
  } = workplace;

  return (
    <WorplaceCard elevation={5}>
      <Favourite workplace={workplace} />
      <WorplaceCardCover key={_id} source={{ uri: foto }} />
      <Info>
        <Text variant="label">{nome}</Text>
        <Section>
          <SectionEnd>
            {!workplace.isOpenNow && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {workplace.isOpenNow && (
                <SvgXml xml={open} width={30} height={30} />
              )}
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{endereco.rua}</Text>
        <Text variant="caption">{endereco.cidade}</Text>
      </Info>
    </WorplaceCard>
  );
};
