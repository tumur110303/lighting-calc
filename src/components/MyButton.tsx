import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { blue, gray, light, main, w400 } from "../constants";

type Props = {
  children?: string;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const MyButton: FC<Props> = ({
  children = "button",
  onPress,
  disable,
  style,
}) => {
  return (
    <TouchableOpacity
      style={
        disable ? [css.container, css.disable, style] : [css.container, style]
      }
      activeOpacity={disable ? 1 : 0.7}
      onPress={() => {
        if (!disable && onPress) {
          onPress();
        }
      }}
    >
      <Text style={css.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const css = StyleSheet.create({
  container: {
    backgroundColor: blue,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: w400,
    color: light,
    fontSize: 13,
  },
  disable: {
    backgroundColor: gray,
  },
});
