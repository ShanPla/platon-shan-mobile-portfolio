import {
  View,
  Text,
  FlatList,
  Dimensions,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { useState } from "react";
import styles from "../styles/AppStyles";

type Project = {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
};

type ProjectsProps = {
  textColor: string;
  darkMode: boolean;
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = 20;

export default function Projects({ textColor, darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Hotel Booking Website",
      description: "A platform to search and book hotels online.",
      githubUrl: "https://github.com/ShanPla/webdev-finals-frontend",
    },
    {
      id: "2",
      title: "Food Recipe Finder Website",
      description:
        "Search and save recipes with ingredients and instructions.",
      githubUrl: "https://github.com/ShanPla/pinoy-recipe-finder",
    },
    {
      id: "3",
      title: "Study Spaces Website",
      description:
        "Find nearby study spaces with ratings and reviews.",
      githubUrl: "https://github.com/ShanPla/midterm-project",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "Showcase of my projects and skills as a developer.",
      githubUrl: "https://github.com/ShanPla/react-portfolio",
    },
  ];

  const cardBg = darkMode ? "#333" : "#4A90E2";
  const modalBg = darkMode ? "#222" : "#fff";
  const buttonBg = darkMode ? "#4A90E2" : "#000";

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={[
          styles.sectionTitle,
          { color: textColor, marginBottom: 10 },
        ]}
      >
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
          <Pressable
            onPress={() => setSelectedProject(item)}
            style={[
              styles.projectCard,
              {
                backgroundColor: cardBg,
                width: CARD_WIDTH,
                marginRight: CARD_SPACING,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[
                styles.projectTitle,
                { color: "#fff", textAlign: "center" },
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
      />

      {/* MODAL */}
      <Modal
        transparent
        animationType="fade"
        visible={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.6)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: modalBg,
              padding: 20,
              borderRadius: 12,
              width: "85%",
            }}
          >
            <Text
              style={[
                styles.projectTitle,
                { color: textColor, marginBottom: 10 },
              ]}
            >
              {selectedProject?.title}
            </Text>

            <Text
              style={[
                styles.projectDescription,
                { color: textColor },
              ]}
            >
              {selectedProject?.description}
            </Text>

            {/* GITHUB BUTTON */}
            <Pressable
              onPress={() =>
                selectedProject &&
                Linking.openURL(selectedProject.githubUrl)
              }
              style={{
                marginTop: 20,
                backgroundColor: buttonBg,
                paddingVertical: 10,
                borderRadius: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                View on GitHub
              </Text>
            </Pressable>

            {/* CLOSE */}
            <Pressable
              onPress={() => setSelectedProject(null)}
              style={{
                marginTop: 15,
                alignSelf: "center",
              }}
            >
              <Text style={{ color: "#4A90E2", fontWeight: "bold" }}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
