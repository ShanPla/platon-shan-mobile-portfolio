import { View, Text, Pressable, Linking } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import styles from "../styles/AppStyles";

type ContactProps = {
  textColor: string;
  darkMode: boolean;
};

export default function Contact({ textColor, darkMode }: ContactProps) {
  const iconColor = darkMode ? "#ffffff" : "#000000";
  const iconSize = 30;

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      {/* Title */}
      <Text style={[styles.sectionTitle, { color: textColor }]}>
        Contact Me
      </Text>

      {/* Icons */}
      <View
        style={{
          flexDirection: "row",
          gap: 25,
          marginTop: 15,
        }}
      >
        {/* Email */}
        <Pressable onPress={() => Linking.openURL("mailto:shanplaton@email.com")}>
          <MaterialIcons name="email" size={iconSize} color={iconColor} />
        </Pressable>

        {/* GitHub */}
        <Pressable onPress={() => Linking.openURL("https://github.com/shanplaton")}>
          <FontAwesome name="github" size={iconSize} color={iconColor} />
        </Pressable>

        {/* LinkedIn */}
        <Pressable onPress={() => Linking.openURL("https://linkedin.com/in/shanplaton")}>
          <FontAwesome name="linkedin" size={iconSize} color={iconColor} />
        </Pressable>
      </View>
    </View>
  );
}
