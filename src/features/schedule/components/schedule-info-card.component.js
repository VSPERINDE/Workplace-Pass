import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Info,
  ScheduleCardCover,
  ScheduleCard,
  Section,
  SectionEnd,
  Button,
} from "./schedule-card.styles";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/min/moment-with-locales";
import { updateForm } from "../../../store/modules/workplace/actions";
moment.locale("pt-br");

export const ScheduleInfoCard = ({ agendamentos }) => {
  const dispatch = useDispatch();
  const {
    _id,
    local = "Workplace",
    foto = "../../../../assets/sem-foto.jpg",
    servico = "Sem nome",
    data = "Sem horario",
  } = agendamentos;

  return (
    <ScheduleCard elevation={5}>
      <ScheduleCardCover key={_id} source={{ uri: foto }} />
      <Info>
        <Text variant="labelBigger">{local}</Text>
        <Section>
          <Text variant="label">{servico}</Text>
          <SectionEnd>
            <Spacer position="left" size="large">
              <Button
                onPress={() => {
                  dispatch(updateForm("modalCancel", true));
                  dispatch(updateForm("modalCancelId", _id));
                }}
              >
                Cancelar
              </Button>
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="label">{data}</Text>
      </Info>
    </ScheduleCard>
  );
};
