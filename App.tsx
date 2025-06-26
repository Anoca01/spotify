import { StatusBar } from "expo-status-bar";
import { SignIn } from "./src/screens/SignIn/index";

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="light" translucent />
    </>
  );
}
