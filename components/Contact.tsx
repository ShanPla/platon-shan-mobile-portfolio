import { View, Text, StyleSheet } from "react-native";

type ContactProps = {
  textColor: string;
};

export default function Contact({ textColor }: ContactProps) {
  return (
    <View>
      <Text style={[styles.title, { color: textColor }]}>Contact</Text>
      <Text style={{ color: textColor }}>Email: shanplaton@email.com</Text>
      <Text style={{ color: textColor }}>GitHub: github.com/shanplaton</Text>
      <Text style={{ color: textColor }}>
        LinkedIn: linkedin.com/in/shanplaton
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
