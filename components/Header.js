import { StyleSheet, Text } from "react-native";
import { Colors } from "../styles/colors";

function Header({ children, style }) {
  return <Text style={[styles.headerText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    color: Colors.PRIMARY,
    fontSize: 40,
    textAlign: "center",
    fontWeight: 600,
  },
});
export default Header;
