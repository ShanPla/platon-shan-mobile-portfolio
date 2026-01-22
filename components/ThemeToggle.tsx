import { View, Text, Switch } from "react-native";
import styles from "../styles/AppStyles";

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
    <View style={styles.toggleRow}>
      <Text style={{ color: textColor, fontWeight: "bold" }}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}
