import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInput = (enteredText) => {
    setGoalText(enteredText);
  };
  const addGoal = () => {
    if (!goalText) {
      return;
    }
    setGoals([
      ...goals,
      {
        id: Math.random().toString(),
        text: goalText,
      },
    ]);
    setGoalText("");
  };

  const deleteItem = (id) => {
    console.log(id);
    const newGoals = goals.filter((item) => item.id !== id);
    setGoals(newGoals);
    console.log(newGoals);
  };

  return (
    <View style={styles.container}>
      <Text>Goals App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={goalText}
          onChangeText={handleInput}
          style={styles.inputBox}
          placeholder="Enter your goal"
        ></TextInput>
        <Button onPress={addGoal} title="Add Goal" />
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={({ item }) => (
            <Pressable onPress={() => deleteItem(item.id)}>
              <Text style={styles.goalItem}>{item.text}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,

    justifyContent: "center",
    marginVertical: 20,
  },
  inputBox: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    marginRight: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 1,
  },
  goalItem: {
    backgroundColor: "rgb(240,240,240)",

    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
});
