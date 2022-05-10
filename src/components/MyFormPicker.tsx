import { FC } from "react";
import { View, StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import { dark, gray, light, main, w400 } from "../constants";

type Props = {
  icon?: string;
  label?: string;
  options: { label: string; value: string | number }[];
  value: string;
  onValueChange?: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};

const FormPicker: FC<Props> = ({
  icon,
  label,
  options,
  value,
  onValueChange,
  style,
}) => {
  return (
    <View style={[css.container, style]}>
      {label && <Text style={css.title}>{label}</Text>}
      <View style={css.wrapper}>
        {icon && (
          <MaterialCommunityIcons name={icon as any} size={24} color={main} />
        )}
        <Picker
          style={css.picker}
          selectedValue={value}
          onValueChange={onValueChange}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value + ""}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormPicker;

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textTransform: "uppercase",
    fontFamily: w400,
    marginBottom: 5,
    color: dark,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: light,
    height: 37,
    paddingBottom: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  picker: {
    color: gray,
    flex: 1,
  },
});
