import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const Intro = () => {
  const isLogin = true;
  if (isLogin) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/login" />;
  }
};
export default Intro;
