import React, { useContext } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const Avatar = styled(Image)`
  flex-direction: row;
  border-radius: ${(props) => props.theme.sizes[4]};
  width: 180px;
  height: 180px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar source={require("../../workplace/asset/avatar.png")} />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Contacts"
          left={(props) => <List.Icon {...props} color="black" icon="phone" />}
          onPress={() => navigation.navigate("Contacts")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
