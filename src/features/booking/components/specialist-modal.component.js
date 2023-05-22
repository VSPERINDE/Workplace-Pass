import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import Modal from "react-native-simple-modal";
import { useDispatch } from "react-redux";
import {
  updateForm,
  updateAgendamento,
} from "../../../store/modules/workplace/actions";
import { Text, Box, Touchable, Cover } from "./booking.styles";
import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

export const EspecialistasModal = ({
  form,
  colaboradores,
  agendamento,
  servicos,
}) => {
  const dispatch = useDispatch();

  const servico = servicos.filter((c) => c._id === agendamento.servicoId)[0];

  return (
    <Modal
      open={form.modalEspecialista}
      modalDidClose={() => dispatch(updateForm("modalEspecialista", false))}
      modalStyle={{ padding: 0, borderRadius: 7, overflow: "hidden" }}
    >
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            {servico?.nome + " "}
          </Text>
          <Text small composed>
            disponíveis em{" "}
            <Text small underline composed>
              {moment(agendamento.data).format("DD/MM/YYYY (ddd) [às] HH:mm")}
            </Text>
          </Text>
          <Box wrap="wrap" height="auto" spacing="10px 0 0">
            {colaboradores.map((colaborador) => (
              <Touchable
                width={(Dimensions.get("screen").width - 80) / 4}
                height="70px"
                spacing="10px 0px 0px 0px"
                direction="column"
                align="center"
                onPress={() => {
                  dispatch(updateAgendamento("colaboradorId", colaborador._id));
                  dispatch(updateForm("modalEspecialista", false));
                }}
              >
                <Cover
                  height="45px"
                  width="45px"
                  circle
                  spacing="0px 0px 5px 0px"
                  image={colaborador.foto}
                />
                <Text
                  small
                  bold={colaborador._id === agendamento.colaboradorId}
                >
                  {colaborador.nome}
                </Text>
              </Touchable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};
