import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
// Firebase
import * as firebase from "firebase";
// Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
// Theme
import { theme } from "./src/infrastructure/theme";
// Navigation
import { Navigation } from "./src/infrastructure/navigation";
// Context
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBJHdrbKSlMzDhOHDNSim4mMm65qiDgOg4",
  authDomain: "foodtogo-fc664.firebaseapp.com",
  projectId: "foodtogo-fc664",
  storageBucket: "foodtogo-fc664.appspot.com",
  messagingSenderId: "432893742523",
  appId: "1:432893742523:web:09dbbedfd785df7272889e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
