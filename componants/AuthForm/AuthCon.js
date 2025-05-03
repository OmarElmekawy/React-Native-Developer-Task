import ButtonUI from "../../UI/button";
import AuthForm from "./AuthForm";
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { GlobalColors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [credentialsIsInvalid, setCredentialsIsInvaliud] = useState({
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  });

  function handleSubmitData(credentials) {
    const { email, confirmEmail, password, confirmPassword } = credentials;


    const emaiValid = email.trim().includes("@");
    const passwordValid = password.trim().length > 6;
    const equalEmail = email === confirmEmail;
    const equalPassword = password === confirmPassword;

    if (
      !emaiValid ||
      !passwordValid ||
      (!isLogin && (!equalEmail || !equalPassword))
    ) {
      Alert.alert("invalid input", "please make sure you entered a valid data");
      setCredentialsIsInvaliud({
        email: !emaiValid,
        confirmEmail: !emaiValid || !equalEmail,
        password: !passwordValid,
        confirmPassword: !passwordValid || !equalPassword,
      });
      return
    }
    onAuthenticate({ email, password });
  }

  function navigatePagesHandler() {
    if (isLogin) {
      navigation.replace("SignUp");
    } else {
      navigation.replace("Login");
    }
  }

  const marginHorizontalDistance = height < 460 ? 50 : 8;

  return (
    <ScrollView style={styles.screen}>
      <View
        style={[
          styles.outerContainer,
          { marginHorizontal: marginHorizontalDistance },
        ]}
      >
        <View style={styles.Container}>
          <AuthForm
            isLogin={isLogin}
            onSubmit={handleSubmitData}
            credentialInvalid={credentialsIsInvalid}
          />
          <View style={styles.buttonContainer}>
            <ButtonUI
              mode="flat"
              buttonText={isLogin ? "create new user" : "login instead"}
              onPress={navigatePagesHandler}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  Container: {
    backgroundColor: GlobalColors.primary400,
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
