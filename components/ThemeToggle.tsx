import { View, Text, Switch, StyleSheet } from "react-native";

type ThemeToggleProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  textColor: string;
};

export default function ThemeToggle({
  darkMode,
  setDarkMode,
  textColor,
}: ThemeToggleProps) {
  return (
    <View style={styles.row}>
      <Text style={{ color: textColor }}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
