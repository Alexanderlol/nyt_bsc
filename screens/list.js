import React from "react";
import {
    View,
    Text,
    StyleSheet
  } from "react-native";
export default class ListRouteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <View style={styles.listContainer}>
                <Text>Hello</Text>
            </View>
        )
     }
}

const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 25,
      borderColor: "teal"
    },
})