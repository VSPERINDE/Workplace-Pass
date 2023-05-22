import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  allServicos,
  resetAgendamento,
  filterAgenda,
  updateAgendamento,
} from "../../../store/modules/workplace/actions";
import { BookingList } from "../components/booking.styles";
import { WorkplaceBookCard } from "../components/workplace-book-card.component";
import { ServicoListBook } from "../components/servico-list-book.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const BookingScreen = ({ route = {}, navigation }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthenticationContext);
  const { servicos } = useSelector((state) => state.workplace);
  const { workplace } = route.params;

  return (
    <SafeArea>
      <WorkplaceBookCard workplace={workplace} />
      <BookingList
        data={servicos}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CheckoutScreen", {
                  servico: item,
                });
                dispatch(resetAgendamento());
                dispatch(updateAgendamento("servicoId", item?._id));
                dispatch(updateAgendamento("workplaceId", workplace?._id));
                dispatch(updateAgendamento("clienteId", user?._id));
                dispatch(filterAgenda());
              }}
            >
              <ServicoListBook servicos={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </SafeArea>
  );
};
