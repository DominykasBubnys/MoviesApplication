import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        borderColor: "rgba(5, 5, 5, 0.8)",
        borderWidth: 3,
        width: 260,
        margin: 10,
        borderRadius: 20,
        backgroundColor: "rgba(5, 5, 5, 0.9)",
        overflow: "hidden"
    },

    title: {
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        color: "rgba(216, 187, 186, 0.8)"
    },

    image: {
        flex: 1,
        width: "100%"
    },

})

export default Styles;