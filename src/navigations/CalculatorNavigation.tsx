import { createStackNavigator } from "@react-navigation/stack";
import useMainHeader from "../hooks/useMainHeader";
import CalculatorScreen from "../screens/CalculatorScreen";
import CoeffMethodScreen from "../screens/CoeffMethodScreen";
import { CalcStore } from "../context/CalcContext";

export type StackNavigationParams = {
  [name: string]: undefined;
};

const Stack = createStackNavigator<StackNavigationParams>();

const CalculatorNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={(options) => useMainHeader(options)}
      initialRouteName="Тооцоолол"
    >
      <Stack.Screen name="Тооцоолол" component={CalculatorScreen} />
      <Stack.Screen
        name="Ашиглалтын коэффициентийн арга"
        component={CoeffMethodScreen}
      />
    </Stack.Navigator>
  );
};

export default CalculatorNavigation;
