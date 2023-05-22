import React from "react";
import { StyleSheet } from "react-native";
import { Box, Title, Cover } from "./booking.styles";
import util from "../../../utils/util";
import { theme } from "../../../infrastructure/theme";

export const ServicoListBook = ({ servicos = {} }) => {
  const { _id, nome = "Servico", arquivos = "foto-1.jpg" } = servicos;

  return (
    <Box
      justify="flex-start"
      direction="column"
      hasPadding
      background={util.toAlpha(theme.colors.brand.muted, 5)}
    >
      <Box align="center">
        <Cover
          width="80px"
          height="80px"
          image={
            servicos?.arquivos
              ? `${util.AWS.bucketURL}/${servicos?.arquivos[0]?.caminho}`
              : ""
          }
        />
        <Box direction="column">
          <Title small bold>
            {servicos?.nome}
          </Title>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  textAlign: "left",
});
