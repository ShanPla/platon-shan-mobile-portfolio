import { View, Text } from "react-native";
import styles from "../styles/AppStyles";

type SkillsProps = {
  textColor: string;
  darkMode: boolean;
};

type Skill = {
  name: string;
  level: number; // %
  color: string;
};

export default function Skills({ textColor, darkMode }: SkillsProps) {
  const skills: Skill[] = [
    { name: "C++", level: 70, color: "#00599C" },        // blue
    { name: "Node.js", level: 55, color: "#68A063" },   // green
    { name: "JavaScript", level: 65, color: "#F7DF1E" },// yellow
    { name: "React", level: 65, color: "#61DAFB" },     // cyan
    { name: "React Native", level: 20, color: "#00D8FF" },
  ];

  const trackColor = darkMode ? "#333" : "#ddd";

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[styles.sectionTitle, { color: textColor }]}>
        Skills
      </Text>

      {skills.map((skill) => (
        <View key={skill.name} style={{ marginTop: 15 }}>
          {/* Skill label */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: textColor, fontWeight: "600" }}>
              {skill.name}
            </Text>
            <Text style={{ color: textColor }}>
              {skill.level}%
            </Text>
          </View>

          {/* Progress bar */}
          <View
            style={{
              height: 10,
              backgroundColor: trackColor,
              borderRadius: 5,
              overflow: "hidden",
              marginTop: 6,
            }}
          >
            <View
              style={{
                height: "100%",
                width: `${skill.level}%`,
                backgroundColor: skill.color,
                opacity: skill.level / 100, // mastery shade
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
