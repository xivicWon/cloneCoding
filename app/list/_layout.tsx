import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Link href="/list/1">list 1 </Link>
      <Link href="/list/2">list 2 </Link>
      <Link href="/list/3">list 3 </Link>
    </View>
  );
}
