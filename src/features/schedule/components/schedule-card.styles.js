import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import {
  Card,
  Button as ButtonPaper,
  Badge as BadgePaper,
  Text as TextPaper,
} from "react-native-paper";

export const ScheduleCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ScheduleCardCover = styled(Card.Cover)`
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

export const Button = styled(ButtonPaper).attrs((props) => ({
  //buttonColor: props.theme.colors.brand.primary,
  width: props.block ? "100%" : "auto",
  height: 50,
  justifyContent: "center",
  labelStyle: {
    color: props.theme.colors.text.inverse,
    letterSpacing: 0,
    fontSize: 15,
  },
}))`
  background-color: ${(props) =>
    props.success
      ? props.theme.colors.ui.success
      : props.theme.colors.ui.error};
  border-radius: 50px;
  margin: ${(props) => props.spacing || 0};
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

export const Touchable = styled.TouchableOpacity`
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

export const Badge = styled(BadgePaper)`
  align-self: flex-start;
  font-size: 16px;
  width: auto;
  height: auto;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.ui[props.color || "error"]};
`;

export const Text = styled(TextPaper).attrs({})`
  color: ${(props) => props.theme.colors.brand[props.color || "muted"]};
  font-size: ${(props) => (props.small ? "13px" : "17px")};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? "20px" : "0px")};
  line-height: ${(props) =>
    props.composed ? "30px" : props.small ? "13px" : "15px"};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  opacity: 0.7;
  text-align: ${(props) => props.align || "left"};
`;
