import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem/index";
import { colors } from "../../utils/colors";
import ProductItem from "../../components/ProductItem/index";
import { connect } from "react-redux";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const CartScreen = ({
  cartItems,
  route,
}: {
  route: any;
  cartItems: { product: Product; quantity: number }[];
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      return sum + item.product.fiyat * item.quantity;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem product={item.product} quantity={item.quantity} />
        )}
        keyExtractor={(item) => item.product.id.toString()} // Anahtar ekleyin
        contentContainerStyle={{ paddingBottom: height * 0.03 }} // Aşağıda boşluk ekleyin
      />

      <Text
        style={{
          padding: 15,
          fontWeight: "bold",
          color: colors.purple,
          fontSize: 18,
        }}
      >
        Önerilen Ürünler
      </Text>

      <ScrollView
        style={{ backgroundColor: "white" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
      >
        {productsGetir.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>

      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#fff",
          borderTopWidth: 0.09,
          borderColor: "lightgrey",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: colors.purple,
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            elevation: 7,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            Devam Et{" "}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderWidth: 0.9,
            borderColor: "lightgrey",
            elevation: 7,
          }}
        >
          <Text
            style={{
              color: colors.purple,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(CartScreen);
