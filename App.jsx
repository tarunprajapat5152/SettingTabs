import "./global.css"
import { Text, View } from "react-native";
import Navigation from "./src/navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <Navigation/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App