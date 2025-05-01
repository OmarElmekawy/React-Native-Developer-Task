import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, keyboardType, secure, inputValuesHandler, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={inputValuesHandler}
        value={value}
      />
    </View>
  );
}

export default Input;

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
    padding: 10,
    borderRadius: 6,
    marginVertical: 8,
    fontSize: 16,
  },
});
