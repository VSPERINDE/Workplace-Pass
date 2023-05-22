import React, { useState, useEffect } from "react";
import { List } from "react-native-paper";
import { FlatList, Linking, ScrollView } from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ServicoList } from "../components/servicos-list.component";
import {
  Button,
  Box,
  Touchable,
  Text,
} from "../components/workplace-info-card.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { allServicos } from "../../../store/modules/workplace/actions";

export const WorkplaceDetailScreen = ({ route, navigation }) => {
  const [detailExpanded, setDetailExpanded] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [advantageExpanded, setAdvantageExpanded] = useState(false);

  const dispatch = useDispatch();
  const { servicos } = useSelector((state) => state.workplace);
  const { workplace } = route.params;

  useEffect(() => {
    dispatch(allServicos(workplace._id));
  }, []);

  return (
    <SafeArea>
      <WorkplaceInfoCard workplace={workplace} />
      <ScrollView>
        <List.Accordion
          title="Detalhes"
          left={(props) => <List.Icon {...props} icon="details" />}
          expanded={detailExpanded}
          onPress={() => setDetailExpanded(!detailExpanded)}
        >
          <List.Item title="Endereço:" description={workplace.endereco.rua} />
          <List.Item
            title="Horário de funcionamento:"
            //description={workplace.todosHorarios}
          />
          <List.Item
            title="Quantidade de mesas: "
            description={workplace.lotacao_max_total}
          />
        </List.Accordion>
        <List.Accordion
          title="Serviços Disponíveis"
          left={(props) => <List.Icon {...props} icon="information-variant" />}
          expanded={advantageExpanded}
          onPress={() => setAdvantageExpanded(!advantageExpanded)}
        >
          <FlatList
            data={servicos}
            renderItem={({ item }) => {
              return <ServicoList servicos={item} />;
            }}
            keyExtractor={(item) => item}
          />
        </List.Accordion>
        <List.Accordion
          title="Socials"
          left={(props) => <List.Icon {...props} icon="share-variant" />}
          expanded={socialExpanded}
          onPress={() => setSocialExpanded(!socialExpanded)}
        >
          <List.Item
            title="Instagram"
            left={(props) => <List.Icon {...props} icon="instagram" />}
          />
          <List.Item
            title="Twitter"
            left={(props) => <List.Icon {...props} icon="twitter" />}
          />
          <List.Item
            title="Facebook"
            left={(props) => <List.Icon {...props} icon="facebook" />}
          />
          <List.Item
            title="Whatsapp"
            left={(props) => <List.Icon {...props} icon="whatsapp" />}
          />
        </List.Accordion>
        <Box hasPadding justify="space-between">
          <Touchable
            width="60px"
            direction="column"
            align="center"
            onPress={() => Linking.openURL(`tel:${workplace.telefone}`)}
          >
            <Icon name="phone" size={24} color="grey" />
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
          <Touchable
            width="60px"
            direction="column"
            align="center"
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${workplace.geo.coordinates[0]},${workplace.geo.coordinates[1]}`
              )
            }
          >
            <Icon name="map-marker" size={24} color="grey" />
            <Text small spacing="10px 0 0">
              Visitar
            </Text>
          </Touchable>
          <Touchable
            width="60px"
            direction="column"
            align="center"
            onPress={() => {
              Share.share({
                message: `${workplace.nome} - ${workplace.endereco}`,
              });
            }}
          >
            <Icon name="share" size={24} color="grey" />
            <Text small spacing="10px 0 0">
              Enviar
            </Text>
          </Touchable>
        </Box>
      </ScrollView>
      <Button
        icon="clock-check-outline"
        mode="contained"
        uppercase={false}
        block
        onPress={() => {
          navigation.navigate("BookingDetail", {
            workplace,
          });
        }}
      >
        Agendar Agora
      </Button>
    </SafeArea>
  );
};
