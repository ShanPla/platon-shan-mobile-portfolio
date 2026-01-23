import { View, Text, StyleSheet } from "react-native";

type Skill = {
  name: string;
  level: number; // 0 to 1 (internal only, not shown)
  label: string;
  color: string;
};

type SkillsProps = {
  textColor: string;
  darkMode: boolean;
};

export default function Skills({ textColor, darkMode }: SkillsProps) {
  const skills: Skill[] = [
    {
      name: "C++",
      level: 0.7,
      label: "Comfortable",
      color: "#00599C",
    },
    {
      name: "JavaScript",
      level: 0.65,
      label: "Proficient",
      color: "#F7DF1E",
    },
    {
      name: "React",
      level: 0.65,
      label: "Proficient",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      level: 0.55,
      label: "Comfortable",
      color: "#3C873A",
    },
    {
      name: "React Native",
      level: 0.3,
      label: "Learning",
      color: "#0A7EA4",
    },
  ];

  const trackColor = darkMode ? "#333" : "#E0E0E0";

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[styles.title, { color: textColor }]}>
        Skills
      </Text>

      {skills.map((skill) => (
        <View key={skill.name} style={styles.skillContainer}>
          <View style={styles.row}>
            <Text style={[styles.skillName, { color: textColor }]}>
              {skill.name}
            </Text>
            <Text style={[styles.skillLabel, { color: textColor }]}>
              {skill.label}
            </Text>
          </View>

          <View
            style={[
              styles.track,
              { backgroundColor: trackColor },
            ]}
          >
            <View
              style={[
                styles.fill,
                {
                  width: `${skill.level * 100}%`,
                  backgroundColor: skill.color,
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  skillContainer: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  skillName: {
    fontSize: 16,
    fontWeight: "600",
  },
  skillLabel: {
    fontSize: 14,
    opacity: 0.8,
  },
  track: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 5,
  },
});
