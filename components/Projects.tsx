import { View, Text, FlatList, Dimensions } from "react-native";
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

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = 20;

export default function Projects({ textColor, darkMode }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: "1",
      title: "Hotel Booking Website",
      description: "A platform to search and book hotels online.",
    },
    {
      id: "2",
      title: "Food Recipe Finder Website",
      description: "Search and save recipes with ingredients and instructions.",
    },
    {
      id: "3",
      title: "Study Spaces Website",
      description: "Find nearby study spaces with ratings and reviews.",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "Showcase of my projects and skills as a developer.",
    },
  ];

  const cardBg = darkMode ? "#333" : "#4A90E2";

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={[styles.sectionTitle, { color: textColor, marginBottom: 10 }]}>
        Projects
      </Text>

      <FlatList
        data={projects}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
        }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.projectCard,
              {
                backgroundColor: cardBg,
                width: CARD_WIDTH,
                marginRight: CARD_SPACING,
              },
            ]}
          >
            <Text style={[styles.projectTitle, { color: "#fff" }]}>
              {item.title}
            </Text>
            <Text style={[styles.projectDescription, { color: "#ddd" }]}>
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
