import React from "react";
import { List } from "react-native-paper";
import { StyleSheet } from "react-native";

export const ServicoList = ({ servicos = {} }) => {
  const { _id, nome = "Servico", arquivos = "foto-1.jpg" } = servicos;

  return (
    <List.Item
      title={nome}
      left={() => <List.Icon icon="star-four-points-outline" />}
      titleStyle={styles}
    />
  );
};

const styles = StyleSheet.create({
  textAlign: "left",
});
