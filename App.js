import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "./app/components/dropdown";

const options = [
  { label: "Chart", iconName: "barschart" },
  { label: "Book", iconName: "book" },
  { label: "Calendar", iconName: "calendar" },
  { label: "Camera", iconName: "camera" },
];

const header = {
  label: "Header",
  iconName: "ellipsis1",
};

export default function App() {
  const iconName = "barschart";
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Dropdown header={header} options={options} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
  },
});
