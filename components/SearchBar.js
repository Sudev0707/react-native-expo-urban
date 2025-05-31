import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const rotatingNames = [
  "Waxir",
  "AC Repair",
  "Plumber",
  "Electrician",
  "Cleaner",
];

const SearchBar = ({ value, onChangeText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -10,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingNames.length);
        slideAnim.setValue(10);
        Animated.parallel([
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.6}
      style={[
        styles.container,
        
      ]}
    >
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        borderColor="none"
        ref={inputRef}
        style={[
          styles.input,
          {
            borderWidth: 0,
            textAlignVertical: "center",
            paddingVertical: 10,
            paddingHorizontal: 15,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        placeholderTextColor="#888"
        underlineColorAndroid="transparent"
        editable={false}
      />
      {value.length === 0 && (
        <View style={styles.placeholderOverlay} pointerEvents="none">
          <Text style={styles.staticText}>Search for </Text>
          <Animated.Text
            style={[
              styles.animatedText,
              {
                transform: [{ translateY: slideAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            {rotatingNames[currentIndex]}
          </Animated.Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
    elevation: 4,
    marginVertical: 0,
    position: "relative",
    borderWidth:1,
    borderColor:'#DBDBDB'
  },
  icon: {
    marginRight: 8,
  },
  input: {
    borderWidth: 0, // Removes border
    outlineStyle: "none",
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingLeft: 0,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent",
    elevation: 0,
    shadowOpacity: 0,
  },
  placeholderOverlay: {
    position: "absolute",
    left: 40, // adjust to be next to icon + some padding
    right: 10,
    top: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    pointerEvents: "none",
  },
  staticText: {
    fontSize: 16,
    color: "#888",
  },
  animatedText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 4,
  },
});

export default SearchBar;
