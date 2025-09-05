import { GestureResponderEvent, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./tab-item.style";

interface TabItemProps {
  selected: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: (e: GestureResponderEvent ) => void;
}
const TabItem = ({ selected, icon, label, onPress }: TabItemProps) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Ionicons name={icon} size={30} color={selected ? "#e74c3c" : "#495057"} />
    <Text
      style={selected ? [styles.label, styles.labelHighlight] : styles.label}
    >
      {label}
    </Text>
  </Pressable>
);
export default TabItem;
