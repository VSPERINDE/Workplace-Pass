import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-simple-modal";
import { useDispatch } from "react-redux";
import {
  updateForm,
  removeAgendamento,
} from "../../../store/modules/workplace/actions";
import { Text, Box, Button } from "./schedule-card.styles";
import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

export const CancelModal = ({ form }) => {
  const dispatch = useDispatch();

  return (
    <Modal
      open={form.modalCancel}
      modalDidClose={() => dispatch(updateForm("modalCancel", false))}
      modalStyle={{ padding: 0, borderRadius: 7, overflow: "hidden" }}
    >
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark" composed>
            Tem certeza que deseja cancelar o agendamento?
          </Text>
          <Box
            wrap="wrap"
            height="auto"
            spacing="10px 0 0"
            justify="center"
            hasPadding
          >
            <Button
              block
              spacing="0px 20px 15px 0px"
              direction="column"
              align="center"
              success
              onPress={() => {
                console.log(form.modalCancelId);
                dispatch(removeAgendamento(form.modalCancelId));
                dispatch(updateForm("modalCancel", false));
              }}
            >
              Sim
            </Button>
            <Button
              block
              spacing="0px 20px 0px 0px"
              direction="column"
              align="center"
              onPress={() => {
                dispatch(updateForm("modalCancel", false));
              }}
            >
              Não
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};
