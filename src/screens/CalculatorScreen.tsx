import { FC, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dark, light, main, w400, icon, yellow } from "../constants";
import { useNavigation } from "@react-navigation/native";

type ContentType = {
  title: string;
  navigationName: string;
  icon: any;
  color: string;
};

const CalculatorScreen: FC = () => {
  const navigation = useNavigation();
  const contents: ContentType[] = [
    {
      title: "Ашиглалтын коэффициентийн арга",
      navigationName: "Ашиглалтын коэффициентийн арга",
      icon: "lightbulb-cfl",
      color: icon,
    },
    {
      title: "Хувийн чадлын арга",
      navigationName: "Хувийн чадал",
      icon: "lightbulb-on",
      color: icon,
    },
    {
      title: "Цэгийн арга",
      navigationName: "Цэг",
      icon: "circle-medium",
      color: icon,
    },
  ];
  return (
    <View style={css.container}>
      <FlatList
        keyExtractor={(item) => item.navigationName}
        data={contents}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={css.item}
            onPress={() => navigation.navigate(item.navigationName as any)}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={26}
              color={item.color}
            />
            <Text style={css.title}>{item.title}</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={40}
              color={icon}
              style={css.chevron}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CalculatorScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: yellow,
  },
  line: {
    height: "100%",
    width: 2,
    backgroundColor: main,
    marginRight: 10,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    backgroundColor: dark,
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontFamily: w400,
    textTransform: "uppercase",
    marginLeft: 10,
    color: light,
  },
  chevron: {
    position: "absolute",
    right: 10,
  },
  overlay: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  overlayContainer: {
    backgroundColor: light,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
