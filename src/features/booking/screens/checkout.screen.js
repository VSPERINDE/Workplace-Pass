import React, { useEffect } from "react";
import { Button, Box, Title, Text, Spacer } from "../components/booking.styles";
import { useSelector, useDispatch } from "react-redux";
import { Dimensions, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import util from "../../../utils/util";
import { theme } from "../../../infrastructure/theme";
import moment from "moment";
import {
  saveAgendamento,
  resetAgendamento,
  updateForm,
} from "../../../store/modules/workplace/actions";
import { DateTimePicker } from "../components/date-time-picker.component";
import { EspecialistasPicker } from "../components/specialist-picker.component";
import { EspecialistasModal } from "../components/specialist-modal.component";
import { ServicoListBook } from "../components/servico-list-book.component";

const CheckoutScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { form, servicos, agendamento, agenda, colaboradores } = useSelector(
    (state) => state.workplace
  );

  const { servico } = route.params;
  const dataSelecionada = moment(agendamento?.data).format("YYYY-MM-DD");
  const horaSelecionada = moment(agendamento?.data).format("HH:mm");

  const { horariosDisponiveis } = util.selectAgendamento(
    agenda,
    dataSelecionada,
    agendamento?.servicoId
  );

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={{
          backgroundColor: "#fff",
        }}
      >
        {agenda.length > 0 && (
          <>
            <ServicoListBook servicos={servico} />
            <DateTimePicker
              servico={servico}
              servicos={servicos}
              agendamento={agendamento}
              agenda={agenda}
              dataSelecionada={dataSelecionada}
              horaSelecionada={horaSelecionada}
              horariosDisponiveis={horariosDisponiveis}
            />
            <EspecialistasPicker
              colaboradores={colaboradores}
              agendamento={agendamento}
            />
            <Box hasPadding>
              <Button
                icon="check"
                background="primary"
                mode="contained"
                block
                disabled={form.agendamentoLoading}
                loading={form.agendamentoLoading}
                uppercase={false}
                onPress={() => {
                  dispatch(saveAgendamento());
                  navigation.goBack();
                  navigation.goBack();
                  navigation.goBack();
                  dispatch(resetAgendamento());
                  dispatch(updateForm("agendamentoLoading", false));
                }}
              >
                Confirmar meu agendamento
              </Button>
            </Box>
          </>
        )}
        {agenda.length === 0 && (
          <Box
            background="tertiary"
            direction="column"
            height={Dimensions.get("window").height - 200}
            hasPadding
            justify="center"
            align="center"
          >
            <ActivityIndicator
              size="large"
              color={theme.colors.brand.primary}
            />
            <Spacer />
            <Title align="center">Só um instante...</Title>
            <Text align="center" small>
              Estamos buscando o melhor horário pra você...
            </Text>
          </Box>
        )}
      </ScrollView>
      <EspecialistasModal
        form={form}
        colaboradores={colaboradores}
        agendamento={agendamento}
        servicos={servicos}
        horaSelecionada={horaSelecionada}
      />
    </>
  );
};

export default CheckoutScreen;
