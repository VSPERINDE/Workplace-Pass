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
import { ToggleButton } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [status, setStatus] = React.useState("unchecked");
  const [icon, setIcon] = React.useState("checkbox-blank-outline");
  const onButtonToggle = () => {
    if (status === "checked") {
      setStatus("unchecked");
      setIcon("checkbox-blank-outline");
    } else {
      setStatus("checked");
      setIcon("checkbox-marked");
    }
  };

  return (
    <AccountBackground>
      <AccountCover />
      <LogoWrapper>
        <ImageLogo />
      </LogoWrapper>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        <Spacer>
          <Text>Select to register as a coworking space</Text>
          <ToggleButton
            icon={icon}
            value="coworking"
            status={status}
            onPress={onButtonToggle}
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
                onRegister(email, password, repeatedPassword, status);
                if (status === "checked") {
                  navigation.navigate("CoworkingFormScreen");
                }
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
