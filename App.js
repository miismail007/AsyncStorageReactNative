import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  AsyncStorage,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class CarouselExample extends Component {
  state = {
    name: "",
  };
  savestorage = async () => {
    try {
      await AsyncStorage.setItem("name", this.state.name);
    } catch (err) {
      console.log(err);
    }
  };
  removestorage = async () => {
    try {
      await AsyncStorage.removeItem("name");
      this.setState({ name: "" });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = async () => {
    try {
      const gname = await AsyncStorage.getItem("name");

      if (gname !== null) {
        this.setState({ name: gname });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 150 }}>
        <Text style={{ textAlign: "center" }}>
          Sample app for Async Storage
        </Text>
        <TextInput
          onChange={(text) => {
            this.setState({ name: text.nativeEvent.text });
          }}
          placeholder="enter text"
          style={{
            height: 50,
            paddingStart: 10,
            borderWidth: 1,
            borderColor: "#000",
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 20,
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: "#000",
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 20,
            alignItems: "center",
            backgroundColor: "cyan",
          }}
          onPress={() => {
            this.savestorage();
          }}
        >
          <Text style={{ marginVertical: 12 }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: "#000",
            marginHorizontal: 20,
            borderRadius: 5,
            marginVertical: 20,
            alignItems: "center",
            backgroundColor: "cyan",
          }}
          onPress={() => {
            this.removestorage();
          }}
        >
          <Text style={{ marginVertical: 12 }}>Delete</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center" }}>
          Saved text :{this.state.name !== "" ? this.state.name : "null"}
        </Text>

        <Text style={{ textAlign: "center" }}>After click reload the app</Text>
        <Text style={{ textAlign: "center" }}>
          The same name will be displayed
        </Text>
      </View>
    );
  }
}
