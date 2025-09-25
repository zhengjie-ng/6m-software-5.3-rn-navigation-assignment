import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";
import { Colors } from "../styles/colors";
import Board from "../components/Board";

function ProfileScreen({ navigation, route }) {
  const params = route?.params || {};
  return (
    <View style={styles.container}>
      <Header>Complete Profile</Header>
      <Board
        style={{
          width: "80%",
          alignItems: "left",
          justifyContent: "center",
          gap: 10,
          padding: 20,
        }}
      >
        <Text style={styles.text}>Name: {params.name}</Text>
        <Text style={styles.text}>Email: {params.email}</Text>
        {params.age && <Text style={styles.text}>Age: {params.age}</Text>}
        {params.job && <Text style={styles.text}>Job: {params.job}</Text>}
      </Board>
      <Button
        style={{ backgroundColor: Colors.EXIT, width: "80%", marginTop: 30 }}
        onPress={() => navigation.navigate("Landing")}
      >
        Logout
      </Button>
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

export default ProfileScreen;
