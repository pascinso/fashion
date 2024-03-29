import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./account";
import Onboarding from "./onboarding";
import Welcome from "./welcome";
import styleName from "./style.module.scss";

const { Navigator, Screen } = createNativeStackNavigator();

const screenOptions = { headerShown: false, contentStyle: styleName.auth };
export default function Home() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
}
