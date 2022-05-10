import { createDrawerNavigator } from "@react-navigation/drawer";

import useMainHeader from "../hooks/useMainHeader";
import FormulaScreen from "../screens/FormulaScreen";
import HomeScreen from "../screens/HomeScreen";
import CalculatorNavigation from "./CalculatorNavigation";

export type MainNavigationParams = {
  [name: string]: undefined;
};

const Drawer = createDrawerNavigator<MainNavigationParams>();

const MainNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={(options) => useMainHeader(options)}
      initialRouteName={"Нүүр хуудас"}
    >
      <Drawer.Screen name="Нүүр хуудас" component={HomeScreen} />
      <Drawer.Screen
        name="Тооцоолол"
        options={{ headerShown: false }}
        component={CalculatorNavigation}
      />
      <Drawer.Screen name="Нийтлэл" component={FormulaScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
