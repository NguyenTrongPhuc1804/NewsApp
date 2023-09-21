import { View, Text, Switch, FlatList } from "react-native";
import React, { useState } from "react";
import CategoryToggle from "../../component/CategoryToggle";
import { useSelector } from "react-redux";

const SettingScreen = () => {
  const { listCategory } = useSelector((state) => state.CategorySlice);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          height: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Danh muc
        </Text>
        <View style={{ flex: 1, marginTop: 20, padding: 20 }}>
          {listCategory && (
            <FlatList
              data={listCategory}
              renderItem={({ item }) => <CategoryToggle data={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;
