import { View, Text } from "react-native";
import styles from "../styles/AppStyles";

type FooterProps = {
  textColor: string;
};

export default function Footer({ textColor }: FooterProps) {
  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, { color: textColor }]}>
        © 2026 Shan Platon
      </Text>
      <Text style={[styles.footerText, { color: textColor }]}>
        Built with React Native & Expo
      </Text>
    </View>
  );
}
