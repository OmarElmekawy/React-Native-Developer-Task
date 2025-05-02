import { StyleSheet, Text, View } from "react-native";
import Button from "../../UI/button";
import { GlobalColors } from "../../constants/colors";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button buttonText="Okay" onPress={onConfirm} />
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
