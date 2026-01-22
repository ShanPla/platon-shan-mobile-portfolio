import { View, Text, Image, StyleSheet } from "react-native";

type ProfileProps = {
  textColor: string;
};

export default function Profile({ textColor }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/8Km9tLL.png" }}
        style={styles.avatar}
      />

      <Text style={[styles.name, { color: textColor }]}>
        Shan Platon
      </Text>

      <Text style={[styles.bio, { color: textColor }]}>
        Computer Science student passionate about mobile and web development.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    textAlign: "center",
    marginTop: 5,
  },
});
