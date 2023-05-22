import styled from "styled-components/native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { theme } from "../../../infrastructure/theme";
import util from "../../../utils/util";

import {
  Card,
  Text as TextPaper,
  Title as TitlePaper,
  Badge as BadgePaper,
  Button as ButtonPaper,
  TextInput as TextInputPaper,
} from "react-native-paper";

import { TouchableOpacity } from "react-native-gesture-handler";

export const BookingList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const BookCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const BookCardCover = styled(Card.Title)``;

//background-color: ${(props) => props.theme.colors.bg.secondary};

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
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

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || "10px"};
`;

export const Cover = styled.Image.attrs((props) => ({
  source: {
    uri: props.image,
  },
}))`
  width: ${(props) => props.width || "60px"};
  height: ${(props) => props.height || "70px"};
  margin: ${(props) => props.spacing || "0 10px 0 0"};
  border-radius: ${(props) => (props.circle ? props.width : "3px")};
  border: ${(props) => props.border || "none"};
  background-color: ${theme.colors.muted};
`;

export const Box = styled.View`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  max-height: ${(props) => props.height || "auto"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? "0" : props.hasPadding ? "20px" : "0px"};
  margin: ${(props) => props.spacing || 0};
  border-radius: ${(props) => props.radius || 0};
  border: ${(props) => props.border || "none"};
  background: ${(props) =>
    props.theme.colors.ui[props.background] ||
    props.background ||
    "transparent"};
`;

export const Touchable = styled(TouchableOpacity)`
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  margin: ${(props) => props.spacing || 0};
  background: ${(props) =>
    props.theme.colors.ui[props.background] ||
    props.background ||
    "transparent"};
  border-radius: ${(props) => props.rounded || 0};
  border: ${(props) => props.border || "none"};
`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme.colors.text[props.color || "dark"]};
  font-size: ${(props) => (props.small ? "22px" : "30px")};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  letter-spacing: -0.8px;
  line-height: ${(props) => (props.small ? "22px" : "30px")};
  text-align: ${(props) => props.align || "left"};
`;

export const Text = styled(TextPaper).attrs({})`
  color: ${(props) => props.theme.colors.text[props.color || "muted"]};
  font-size: ${(props) => (props.small ? "13px" : "17px")};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  line-height: ${(props) =>
    props.composed ? "30px" : props.small ? "13px" : "17px"};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  opacity: 0.7;
  text-align: ${(props) => props.align || "left"};
`;

export const TextInput = styled(TextInputPaper).attrs({
  mode: "outlined",
  activeOutlineColor: theme.colors.brand.primary,
})`
  height: 45px;
  width: 90%;
  font-size: 20px;
  align-self: center;
  background-color: ${theme.colors.ui.light};
`;

export const Badge = styled(BadgePaper)`
  align-self: flex-start;
  font-size: 16px;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.ui[props.colors || "danger"]};
`;

export const Button = styled(ButtonPaper).attrs((props) => ({
  width: props.block ? "100%" : "auto",
  height: 60,
  justifyContent: "center",
  labelStyle: {
    color: props.theme.colors.text.primary,
    letterSpacing: 0,
    fontSize: 20,
  },
}))`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
