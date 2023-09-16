import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="list" />
    </Tabs>
  );
};
export default TabLayout;
