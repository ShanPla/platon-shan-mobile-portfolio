import { View, Text, Image } from "react-native";
import styles from "../styles/AppStyles";

type ProfileProps = { textColor: string };

export default function Profile({ textColor }: ProfileProps) {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: "https://i.imgur.com/BBe32Ym.jpeg" }}
        style={styles.avatar}
      />
      <Text style={[styles.name, { color: textColor }]}>Shan Platon</Text>
      <Text style={[styles.bio, { color: textColor }]}>
        Computer Science student passionate about mobile and web development.
      </Text>
    </View>
  );
}