import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../constants/colors";

function Button({ onPress, buttonText, mode }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
        mode === "flat" && styles.flat,
      ]}
    >
      <View>
        <Text style={[styles.text, mode === "flat" && styles.flatText]}>
          {buttonText}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: GlobalColors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "35%",
  },
  flat: {
    backgroundColor: "transparent",
    width: "60%",
    elevation: 0,
  },
  flatText: {
    fontWeight: "normal",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
