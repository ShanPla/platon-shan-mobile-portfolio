import { View, Text } from "react-native";
import styles from "../styles/AppStyles";

type ContactProps = { textColor: string };

export default function Contact({ textColor }: ContactProps) {
  return (
    <View>
      <Text style={[styles.sectionTitle, { color: textColor }]}>Contact</Text>

      <View style={styles.contactCard}>
        <Text style={[styles.contactText, { color: textColor }]}>
          Email: shan_christian_platon@dlsl.edu.ph
        </Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={[styles.contactText, { color: textColor }]}>
          GitHub: github.com/ShanPla
        </Text>
      </View>

      <View style={styles.contactCard}>
        <Text style={[styles.contactText, { color: textColor }]}>
          LinkedIn: linkedin.com/in/shanplaton
        </Text>
      </View>
    </View>
  );
}
