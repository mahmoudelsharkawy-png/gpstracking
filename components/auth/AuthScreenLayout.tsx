import { colors } from "@/constants/theme";
import { Image } from "expo-image";
import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const authBg = require("@/assets/AuthBackground.png");

type Props = {
  children: React.ReactNode;
};

export function AuthScreenLayout({ children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={authBg} style={styles.bg} resizeMode="cover">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.flex}
      >
        <View
          style={[
            styles.content,
            {
              paddingTop: insets.top + 20,
              paddingBottom: Math.max(insets.bottom, 24) + 12,
            },
          ]}
        >
          <Image
            source={require("@/assets/trackoo.png")}
            contentFit="contain"
            style={styles.logo}
          />
          {children}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  bg: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
  },
  logo: {
    width: 180,
    height: 70,
    alignSelf: "center",
    marginBottom: 8,
  },
});
