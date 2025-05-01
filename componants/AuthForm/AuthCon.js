import Button from "../../UI/button";
import AuthForm from "./AuthForm";
import { Alert, StyleSheet, View } from "react-native";
import { GlobalColors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  function handleSubmitData(credentials) {
    const { email, confirmEmail, password, confirmPassword } = credentials;

    const emaiValid = email.trim().includes("@");
    const passwordValid = password.trim().length > 6;
    const equalEmail = email === confirmEmail;
    equalPassword = password === confirmPassword;

    if (
      !emaiValid ||
      !passwordValid ||
      (!isLogin && (!equalEmail || !equalPassword))
    ) {
      Alert.alert("invalid input", "please make sure you entered a valid data");
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

  return (
    <View style={styles.Container}>
      <AuthForm isLogin={isLogin} onSubmit={handleSubmitData} />
      <Button
        mode="flat"
        buttonText={isLogin ? "create new user" : "login instead"}
        onPress={navigatePagesHandler}
      />
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: GlobalColors.primary400,
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 10,
    borderRadius: 6,
  },
});
