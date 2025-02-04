import { PositionProvider } from "@/contexts/position.context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack >
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
      </Stack>
    </>
  )
}

export default function RootLayout() {
  return (
    <PositionProvider>
      <App />
    </PositionProvider>
  )
}
