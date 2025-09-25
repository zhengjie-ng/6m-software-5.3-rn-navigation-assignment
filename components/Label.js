import { StyleSheet, Text } from "react-native";
import { Colors } from "../styles/colors";

function Label({ children, style }) {
  return <Text style={[styles.labelText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  labelText: {
    color: Colors.PRIMARY,
    fontSize: 30,
    textAlign: "center",
    fontWeight: 500,
  },
});
export default Label;
