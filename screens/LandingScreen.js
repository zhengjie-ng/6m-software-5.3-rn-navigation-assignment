import { View, StyleSheet, Alert } from "react-native";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { Colors } from "../styles/colors";

function LandingScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert("Invalid Input", "Please enter name and email to proceed");
      return;
    }
    navigation.navigate("TabsNavigators", {
      name,
      email,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "stretch",
              justifyContent: "space-between",
              height: 100,
            }}
          >
            <Label>Name:</Label>
            <Label>Email:</Label>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 200,
            }}
          >
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChangeText={setName}
            />
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <Button style={{ width: 300 }} onPress={handleSubmit}>
          Sign in
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LandingScreen;
