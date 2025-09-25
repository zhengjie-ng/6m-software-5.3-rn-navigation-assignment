import { StyleSheet, TextInput } from "react-native";
import { Colors } from "../styles/colors";

function Input({ children, style, ...props }) {
  return (
    <TextInput style={[styles.textInput, style]} {...props}>
      {children}
    </TextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.PRIMARY,
    textAlign: "left",
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: 16,
  },
});
export default Input;
