import { StyleSheet, Text, View } from "react-native";
import ButtonUI from "../../UI/button";
import { GlobalColors } from "../../constants/colors";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ButtonUI buttonText="Okay" onPress={onConfirm} />
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.primary300,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 12,
  },
});
