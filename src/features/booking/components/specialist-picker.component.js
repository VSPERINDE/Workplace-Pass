import React from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../../../store/modules/workplace/actions";
import { Box, Text, Cover, Button } from "./booking.styles";
import { theme } from "../../../infrastructure/theme";

export const EspecialistasPicker = ({ colaboradores, agendamento }) => {
  const dispatch = useDispatch();
  
  const colaborador = colaboradores.filter(
    (c) => c._id === agendamento.colaboradorId
  )[0];

  return (
    <>
      <Box hasPadding removePaddingBottom direction="column">
        <Text bold color="dark">
          Gostaria de selecionar um(a) especialista?
        </Text>
        <Box spacing="20px 0 0" align="center" height="50px">
          <Box align="center">
            <Cover
              width="45px"
              height="45px"
              circle
              image={colaborador?.foto}
            />
            <Text>{colaborador?.nome}</Text>
          </Box>
          <Box>
            <Button
              uppercase={false}
              onPress={() => dispatch(updateForm("modalEspecialista", true))}
              textColor="muted"
              background={theme.colors.ui.primary}
              mode="contained"
              block
            >
              Trocar Especialista
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
