import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Color from "color";
import { AntDesign } from "@expo/vector-icons";

type DropdownItemType = {
  label: string;
  iconName: string;
};

type DropdownListItemProps = DropdownItemType & {
  index: number;
  dropdownItemsCount: number;
  isExpanded: Animated.SharedValue<Boolean>;
};

const DropdownListitem = ({
  label,
  iconName,
  index,
  dropdownItemsCount,
  isExpanded,
}: DropdownListItemProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const DropdownListItemHeight = 75;
  const Margin = 10;

  const fullDropdownHeight =
    (DropdownListItemHeight + Margin) * dropdownItemsCount;

  const collapsedTop = fullDropdownHeight / 2 - DropdownListItemHeight;
  const expandedTop = (DropdownListItemHeight + Margin) * index;

  const expandedScale = 1;
  const collapsedScale = 1 - index * 0.07;

  const expandedBackgroundColor = "#1B1B1B";
  const collapsedBackgroundColor = Color(expandedBackgroundColor)
    .lighten(index * 0.2)
    .hex();
  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor
      ),
      top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
      transform: [
        {
          scale: withSpring(isExpanded.value ? expandedScale : collapsedScale),
        },
        {
          translateY: fullDropdownHeight / 2,
        },
      ],
    };
  }, []);

  const isHeader = index === 0;

  const styles = StyleSheet.create({
    dropdownitem: {
      zIndex: dropdownItemsCount - index,
      position: "absolute",
      width: windowWidth * 0.95,
      height: DropdownListItemHeight,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: "#D4D4D4",
      fontSize: 22,
      textTransform: "uppercase",
      letterSpacing: 1.2,
    },
    iconContainer: {
      position: "absolute",
      width: 45,
      aspectRatio: 1,
      backgroundColor: "#777",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Animated.View
      onTouchEnd={() => {
        if (isHeader) {
          isExpanded.value = !isExpanded.value;
        }
      }}
      style={[styles.dropdownitem, rStyle]}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            {
              left: 15,
            },
          ]}
        >
          <AntDesign name={iconName} size={25} color="#D4D4D4" />
        </View>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.iconContainer,
            {
              right: 15,
            },
          ]}
        >
          <AntDesign name={iconName} size={25} color="#D4D4D4" />
        </View>
      </View>
    </Animated.View>
  );
};

export { DropdownListitem };
export type { DropdownListItemProps };
