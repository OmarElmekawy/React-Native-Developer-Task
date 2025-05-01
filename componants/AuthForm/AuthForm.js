import { StyleSheet, View } from "react-native";
import Input from "./input";
import { GlobalColors } from "../../constants/colors";
import Button from "../../UI/button";
import { useState } from "react";

function AuthForm({ isLogin, onSubmit }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function collectUserInputHandler(inputValue, enteredValue) {
    switch (inputValue) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitData() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.inputContainer}>
      <Input
        label="Email"
        keyboardType="email-address"
        inputValuesHandler={collectUserInputHandler.bind(this, "email")}
        value={enteredEmail}
      />
      {!isLogin && (
        <Input
          label="Confirm Email"
          keyboardType="email-address"
          inputValuesHandler={collectUserInputHandler.bind(
            this,
            "confirmEmail"
          )}
          value={enteredConfirmEmail}
        />
      )}
      <Input
        label="Password"
        keyboardType="default"
        inputValuesHandler={collectUserInputHandler.bind(this, "password")}
        value={enteredPassword}
        secure
      />
      {!isLogin && (
        <Input
          label="Confirm Password"
          keyboardType="default"
          inputValuesHandler={collectUserInputHandler.bind(
            this,
            "confirmPassword"
          )}
          value={enteredConfirmPassword}
          secure
        />
      )}
      <View style={styles.button}>
        <Button
          buttonText={isLogin ? "Login" : "Signup"}
          onPress={submitData}
        />
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 24,
  },
  button: {
    marginTop: 12,
    alignItems: "flex-end",
  },
});
