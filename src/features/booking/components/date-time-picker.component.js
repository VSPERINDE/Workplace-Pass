import React from "react";
import { Box, Title, Text, Touchable, TextInput } from "./booking.styles";
import { FlatList } from "react-native-gesture-handler";
import util from "../../../utils/util";
import { theme } from "../../../infrastructure/theme";
import { useDispatch } from "react-redux";
import { updateAgendamento } from "../../../store/modules/workplace/actions";
import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

export const DateTimePicker = ({
  servico,
  servicos,
  agendamento,
  agenda,
  dataSelecionada,
  horaSelecionada,
  horariosDisponiveis,
}) => {
  const dispatch = useDispatch();
  let duracao;
  const setAgendamentoData = (value, isTime = false) => {
    const { horariosDisponiveis } = util.selectAgendamento(
      agenda,
      isTime ? dataSelecionada : value
    );

    let data = !isTime
      ? `${value}T${horariosDisponiveis[0][0]}`
      : `${dataSelecionada}T${value}`;
    dispatch(updateAgendamento("data", moment(data).format()));
  };
  const handleDuracaoChange = (duracao) => {
    const numberValue = Number(duracao);
    const duracaoMin = numberValue * 60;
    const servicoDurMin = util.hourToMinutes(
      moment(servico?.duracao).format("HH:mm")
    );
    if (numberValue > 0) {
      if (duracaoMin >= servicoDurMin) {
        dispatch(updateAgendamento("duracao", numberValue));
      }
    }
  };

  return (
    <>
      <Text bold color="dark" hasPadding>
        Pra quando você gostaria de agendar?
      </Text>
      <FlatList
        data={agenda}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
        }}
        contentContainerStyle={{
          paddingLeft: 20,
          height: 85,
        }}
        renderItem={({ item }) => {
          const date = moment(Object.keys(item)[0]);
          const dateISO = moment(date).format("YYYY-MM-DD");
          const selected = dateISO === dataSelecionada;

          return (
            <Touchable
              key={dateISO}
              width="70px"
              height="80px"
              spacing="0 10px 0 0"
              background={selected ? "quaternary" : "tertiary"}
              rounded="10px"
              direction="column"
              justify="center"
              align="center"
              onPress={() => setAgendamentoData(dateISO)}
            >
              <Text small color={selected ? "tertiary" : undefined}>
                {util.diasSemana[date.day()]}
              </Text>
              <Title small color={selected ? "tertiary" : undefined}>
                {date.format("DD")}
              </Title>
              <Text small color={selected ? "tertiary" : undefined}>
                {date.format("MMMM")}
              </Text>
            </Touchable>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <Box hasPadding direction="column" height="60px">
        <Text bold color="dark">
          Que horário de inicio?{" "}
        </Text>
      </Box>
      <FlatList
        data={horariosDisponiveis}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
        }}
        contentContainerStyle={{
          paddingLeft: 20,
          height: 75,
        }}
        renderItem={({ item, index }) => (
          <Box direction="column" spacing="0 10px 0 0">
            {item.map((horario) => {
              const selected = horario === horaSelecionada;
              return (
                <Touchable
                  key={horario}
                  width="100px"
                  height="35px"
                  spacing="0 0 5px 0"
                  background={selected ? "quaternary" : "tertiary"}
                  rounded="7px"
                  direction="column"
                  justify="center"
                  align="center"
                  onPress={() => setAgendamentoData(horario, true)}
                >
                  <Text composed color={"primary"}>
                    {horario}
                  </Text>
                </Touchable>
              );
            })}
          </Box>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Box hasPadding direction="column" height="60px">
        <Text bold color="dark">
          Qual a duração desejada?{" "}
          <Text small composed>
            Duração miníma{" "}
            <Text small underline composed>
              {moment(servico?.duracao)
                .format("H:mm")
                .replace(/^(?:0:)?0?/, "")}
              mins
            </Text>
          </Text>
        </Text>
      </Box>
      <TextInput
        value={duracao}
        onChangeText={(duracao) => handleDuracaoChange(duracao)}
        keyboardType="numeric"
        placeholder="Digite o número de horas"
      />
      {duracao === "0" && (
        <Text style={{ color: "red" }}>O valor não pode ser zero</Text>
      )}
    </>
  );
};
