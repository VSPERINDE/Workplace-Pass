import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import DropShadow from "react-native-drop-shadow";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const WorplaceCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const WorplaceCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;

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
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </Info>
      </WorplaceCard>
    </DropShadow>
  );
};
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
