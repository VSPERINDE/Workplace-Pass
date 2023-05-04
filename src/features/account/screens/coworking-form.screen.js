import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  ImageLogo,
  LogoWrapper,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { workplace } from "../../workplace/components/workplace-info-card.component";
import { workplaceRegister } from "../../../services/workplaces/workplaces.service";

export const CoworkingFormScreen = ({ navigation }) => {
  const { isLoading, error } = useContext(AuthenticationContext);
  const [newItem, setNewItem] = useState({ workplace });

  return (
    <AccountBackground>
      <AccountCover />
      <LogoWrapper>
        <ImageLogo />
      </LogoWrapper>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setNewItem({ ...newItem, email: e })}
        />
        <Spacer size="large">
          <AuthInput
            label="Name"
            textContentType="name"
            autoCapitalize="none"
            onChangeText={(n) => setNewItem({ ...newItem, name: n })}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Address"
            textContentType="fullStreetAddress"
            autoCapitalize="none"
            onChangeText={(a) => setNewItem({ ...newItem, address: a })}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => {
                workplaceRegister(newItem);
              }}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.yellow500} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
