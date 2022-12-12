import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ContactsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const Logo = styled(Image)`
  flex-direction: row;
  width: 300px;
  height: 300px;
`;

export const ContactsScreen = () => {
  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large">
          <Logo source={require("../../workplace/asset/logo_wup.png")} />
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <ContactsItem
          title="E-mail"
          description="02080300@aluno.canoas.ifrs.edu.br"
          left={(props) => <List.Icon {...props} color="black" icon="email" />}
        />
        <ContactsItem
          title="Phone"
          description="55 51 3333-3333"
          left={(props) => <List.Icon {...props} color="black" icon="phone" />}
        />
        <ContactsItem
          title="Workplace Use Pass Inc."
          left={(props) => (
            <List.Icon {...props} color="black" icon="office-building" />
          )}
        />
      </List.Section>
    </SafeArea>
  );
};
