import { Stack, useRouter } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default StackLayout;
