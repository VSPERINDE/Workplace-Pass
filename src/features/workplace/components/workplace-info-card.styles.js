import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const WorplaceCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const WorplaceCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
