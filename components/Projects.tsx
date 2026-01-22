import { View, Text, FlatList } from "react-native";
import styles from "../styles/AppStyles";

type Project = {
  id: string;
  title: string;
  description: string;
};

type ProjectsProps = {
  textColor: string;
  darkMode: boolean;
};

export default function Projects({ textColor, darkMode }: ProjectsProps) {
  const projects: Project[] = [
    { id: "1", title: "Hotel Booking Website", description: "A platform to search and book hotels online." },
    { id: "2", title: "Food Recipe Finder Website", description: "Search and save recipes with ingredients and instructions." },
    { id: "3", title: "Study Spaces Website", description: "Find nearby study spaces with ratings and reviews." },
    { id: "4", title: "Portfolio Website", description: "Showcase of my projects and skills as a developer." },
  ];

  // card background changes with theme
  const cardBg = darkMode ? "#333" : "#4A90E2";

  return (
    <View>
      <Text style={[styles.sectionTitle, { color: textColor }]}>Projects</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} // <-- prevents nested scroll warning
        renderItem={({ item }) => (
          <View style={[styles.projectCard, { backgroundColor: cardBg }]}>
            <Text style={[styles.projectTitle, { color: darkMode ? "#fff" : "#fff" }]}>
              {item.title}
            </Text>
            <Text style={[styles.projectDescription, { color: darkMode ? "#ddd" : "#fff" }]}>
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
