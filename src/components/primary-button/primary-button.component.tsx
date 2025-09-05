import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { ReactNode } from "react";
import styles from "./primary-button.style";
interface PrimaryButtonProps {
    children: ReactNode,
    onPress: (event: GestureResponderEvent) => void
}
const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {typeof children === "string" ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
);
export default PrimaryButton;
