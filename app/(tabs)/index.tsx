import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme, { ColorScheme } from "../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen. 123
      </Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={styles.content}>toggle theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
    content: {
      fontSize: 20,
      color: colors.text,
    },
  });
  return styles;
};
