import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "../../utils/colors";

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              marginLeft: 6,
              marginRight: 1,
            }}
          >
            Ev{" "}
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 15, color: "gray" }}>
            Batıkent İnönü Mah. Yargı-1 S.
          </Text>
          <Entypo name="chevron-right" size={24} color={colors.purple} />
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{ fontSize: 10, fontWeight: "bold", color: colors.purple }}
          >
            TVS
          </Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: colors.purple}}
          >
            13{" "}<Text style={{ fontSize: 14}}>dk</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;
