import { View, StyleSheet, Text, Alert } from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/colors";
import Board from "../components/Board";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

function HomeScreen({ navigation, route }) {
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const params = route?.params || {};

  const handleSubmit = () => {
    if (!age || !job) {
      Alert.alert("Invalid Input", "Please enter age and job to proceed");
      return;
    }
    navigation.navigate("Profile", {
      age,
      job,
    });
  };

  return (
    <View style={styles.container}>
      <Header>Welcome {params.name}!</Header>
      <Board
        style={{
          width: "80%",
          height: 100,
          alignItems: "left",
          justifyContent: "center",
          gap: 10,
          paddingLeft: 20,
        }}
      >
        <Text style={styles.text}>Name: {params.name}</Text>
        <Text style={styles.text}>Email: {params.email}</Text>
      </Board>
      <Board
        style={{
          width: "80%",
          alignItems: "left",
          justifyContent: "center",
          gap: 10,
          paddingLeft: 20,
          paddingBottom: 60,
        }}
      >
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
            <Label>Age:</Label>
            <Label>Job:</Label>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 200,
            }}
          >
            <Input
              placeholder="Enter Your Age"
              keyboardType="number-pad"
              returnKeyType="done"
              value={age}
              onChangeText={setAge}
            />
            <Input
              placeholder="Enter Your Job"
              value={job}
              onChangeText={setJob}
            />
          </View>
        </View>
        <Button style={{ width: 300 }} onPress={handleSubmit}>
          Update Profile
        </Button>
      </Board>
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
  text: {
    color: Colors.Gray,
    fontSize: 20,
  },
});

export default HomeScreen;
