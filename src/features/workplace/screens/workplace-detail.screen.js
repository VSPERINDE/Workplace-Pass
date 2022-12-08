import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { WorkplaceInfoCard } from "../components/workplace-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const WorkplaceDetailScreen = ({ route }) => {
  const [detailExpanded, setDetailExpanded] = useState(false);
  const [advantageExpanded, setAdvantageExpanded] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [ratingExpanded, setRatingExpanded] = useState(false);

  const { workplace } = route.params;
  return (
    <SafeArea>
      <WorkplaceInfoCard workplace={workplace} />
      <ScrollView>
        <List.Accordion
          title="Details"
          left={(props) => <List.Icon {...props} icon="details" />}
          expanded={detailExpanded}
          onPress={() => setDetailExpanded(!detailExpanded)}
        >
          <List.Item title="Description:" />
          <List.Item title="Address:" description={workplace.address} />
          <List.Item title="Working Hours:" />
          <List.Item title="Total of tables: 15" />
        </List.Accordion>
        <List.Accordion
          title="Advantages"
          left={(props) => <List.Icon {...props} icon="information-variant" />}
          expanded={advantageExpanded}
          onPress={() => setAdvantageExpanded(!advantageExpanded)}
        >
          <List.Item
            title="Wi-fi"
            left={(props) => <List.Icon {...props} icon="wifi" />}
          />
          <List.Item
            title="Air conditioner"
            left={(props) => <List.Icon {...props} icon="air-conditioner" />}
          />
          <List.Item
            title="Acessibility"
            left={(props) => (
              <List.Icon {...props} icon="wheelchair-accessibility" />
            )}
          />
          <List.Item
            title="Coffee shop"
            left={(props) => <List.Icon {...props} icon="coffee" />}
          />
          <List.Item
            title="Snack bar"
            left={(props) => <List.Icon {...props} icon="food" />}
          />
          <List.Item
            title="Private office"
            left={(props) => <List.Icon {...props} icon="home-lock" />}
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
        <List.Accordion
          title="Ratings"
          left={(props) => (
            <List.Icon {...props} icon="chart-areaspline-variant" />
          )}
          expanded={ratingExpanded}
          onPress={() => setRatingExpanded(!ratingExpanded)}
        >
          <List.Item
            title="Total Rating"
            description={workplace.rating}
            left={(props) => <List.Icon {...props} icon="star" />}
          />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
