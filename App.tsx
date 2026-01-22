import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const backgroundColor = darkMode ? "#121212" : "#ffffff";
  const textColor = darkMode ? "#ffffff" : "#000000";

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        textColor={textColor}
      />

      <Profile textColor={textColor} />
      <Skills textColor={textColor} />
      <Contact textColor={textColor} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});