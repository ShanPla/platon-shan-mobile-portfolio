import { useState } from "react";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";

import styles from "./styles/AppStyles";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const textColor = darkMode ? "#ffffff" : "#000000";
  const backgroundColor = darkMode ? "#121212" : "#ffffff";

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
      <Projects textColor={textColor} darkMode={darkMode} />
      <Contact textColor={textColor} />
    </ScrollView>
  );
}
