import { View, Text, Pressable } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/AppStyles";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
  scrollTo: (y: number) => void;
  positions: {
    profile: number;
    skills: number;
    projects: number;
    contact: number;
  };
};

export default function Navbar({
  darkMode,
  toggleTheme,
  scrollTo,
  positions,
}: NavbarProps) {
  const iconColor = darkMode ? "#fff" : "#000";

  return (
    <View style={styles.navbar}>
      {/* TOP ROW */}
      <View style={styles.navTopRow}>
        <Text style={[styles.navTitle, { color: iconColor }]}>
          Shan Platon
        </Text>

        <Pressable onPress={toggleTheme}>
          <FontAwesome
            name={darkMode ? "moon-o" : "sun-o"}
            size={22}
            color={iconColor}
          />
        </Pressable>
      </View>

      {/* BOTTOM ROW */}
      <View style={styles.navBottomRow}>
        <Pressable onPress={() => scrollTo(positions.profile)}>
          <FontAwesome name="user" size={22} color={iconColor} />
        </Pressable>

        <Pressable onPress={() => scrollTo(positions.skills)}>
          <MaterialIcons name="build" size={22} color={iconColor} />
        </Pressable>

        <Pressable onPress={() => scrollTo(positions.projects)}>
          <FontAwesome name="folder" size={22} color={iconColor} />
        </Pressable>

        <Pressable onPress={() => scrollTo(positions.contact)}>
          <MaterialIcons name="email" size={22} color={iconColor} />
        </Pressable>
      </View>
    </View>
  );
}
