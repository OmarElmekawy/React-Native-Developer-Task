import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { GlobalColors } from "../../constants/colors";

function Input({
  label,
  keyboardType,
  secure,
  inputValuesHandler,
  value,
  invalid,
}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, invalid && styles.invalidlabel]}>{label}</Text>
      <TextInput
        style={[styles.input, invalid && styles.invalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={inputValuesHandler}
        value={value}
      />
    </View>
  );
}

export default Input;

const deviceHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    fontSize: 16,
  },
  invalid: {
    backgroundColor: GlobalColors.error100,
  },
  invalidlabel: {
    color: GlobalColors.error100,
  },
});
