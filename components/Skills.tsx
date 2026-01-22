import { View, Text, StyleSheet } from "react-native";

type SkillsProps = {
  textColor: string;
};

export default function Skills({ textColor }: SkillsProps) {
  const skills: string[] = [
    "React Native",
    "React",
    "Node.js",
    "JavaScript",
    "Firebase",
  ];

  return (
    <View>
      <Text style={[styles.title, { color: textColor }]}>Skills</Text>

      {skills.map((skill, index) => (
        <Text key={index} style={[styles.item, { color: textColor }]}>
          • {skill}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  item: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
});
