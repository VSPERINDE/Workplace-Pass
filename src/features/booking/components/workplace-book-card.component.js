import React from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Info,
  BookCardCover,
  BookCard,
  Section,
  SectionEnd,
} from "./booking.styles";
import { Avatar } from "react-native-paper";

export const WorkplaceBookCard = ({ workplace = {} }) => {
  const { _id, nome = "Workplace", foto = "foto-1.jpg" } = workplace;

  return (
    <BookCard elevation={5}>
      <Info>
        <Section>
          <BookCardCover
            title={<Text variant="labelBigger">{nome}</Text>}
            left={(props) => <Avatar.Image {...props} source={{ uri: foto }} />}
            right={(props) => (
              <SectionEnd>
                {!workplace.isOpenNow && (
                  <Text {...props} variant="error">
                    CLOSED TEMPORARILY
                  </Text>
                )}
                <Spacer position="left" size="large">
                  {workplace.isOpenNow && (
                    <SvgXml xml={open} width={30} height={30} />
                  )}
                </Spacer>
              </SectionEnd>
            )}
          />
        </Section>
      </Info>
    </BookCard>
  );
};
