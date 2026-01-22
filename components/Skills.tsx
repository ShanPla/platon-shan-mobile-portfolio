import { View, Text } from "react-native";
import styles from "../styles/AppStyles";

type SkillsProps = { textColor: string };

export default function Skills({ textColor }: SkillsProps) {
  const skills = ["React Native", "React", "Node.js", "JavaScript", "C++"];

  return (
    <View>
      <Text style={[styles.sectionTitle, { color: textColor }]}>Skills</Text>
      {skills.map((skill, index) => (
        <View key={index} style={styles.skillCard}>
          <Text style={styles.skillText}>{skill}</Text>
        </View>
      ))}
    </View>
  );
}
