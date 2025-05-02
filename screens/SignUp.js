import { View, StyleSheet } from "react-native";
import AuthContent from "../componants/AuthForm/AuthCon";
import { handleSignup } from "../http/http";

function SignUp({ navigation }) {
  function handleSignupRequest({ email, password }) {
    handleSignup(email, password);
    navigation.replace("Login");
  }
  return (
    <View style={styles.container}>
      <AuthContent onAuthenticate={handleSignupRequest} />
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
