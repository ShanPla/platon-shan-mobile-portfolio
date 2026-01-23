import { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import styles from "./styles/AppStyles";

export default function App() {
  const scrollRef = useRef<ScrollView>(null);

  const profileY = useRef(0);
  const skillsY = useRef(0);
  const projectsY = useRef(0);
  const contactY = useRef(0);

  const [darkMode, setDarkMode] = useState(false);
  const textColor = darkMode ? "#fff" : "#000";
  const backgroundColor = darkMode ? "#121212" : "#fff";

  const scrollTo = (y: number) => {
    scrollRef.current?.scrollTo({ y, animated: true });
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={[styles.container, { backgroundColor }]}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />

      <Navbar
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
        scrollTo={scrollTo}
        positions={{
          profile: profileY.current,
          skills: skillsY.current,
          projects: projectsY.current,
          contact: contactY.current,
        }}
      />

      {/* Profile */}
      <View onLayout={(e) => (profileY.current = e.nativeEvent.layout.y)}>
        <Profile textColor={textColor} />
      </View>

      {/* Skills */}
      <View onLayout={(e) => (skillsY.current = e.nativeEvent.layout.y)}>
        <Skills textColor={textColor} darkMode={darkMode} />
      </View>

      {/* Projects */}
      <View onLayout={(e) => (projectsY.current = e.nativeEvent.layout.y)}>
        <Projects textColor={textColor} darkMode={darkMode} />
      </View>

      {/* Contact */}
      <View onLayout={(e) => (contactY.current = e.nativeEvent.layout.y)}>
        <Contact textColor={textColor} darkMode={darkMode} />
      </View>

      <Footer textColor={textColor} />
    </ScrollView>
  );
}
