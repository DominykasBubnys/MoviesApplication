import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "rgba(15, 15, 15, 0.7)",

    },

    header: {
        color: "white",
        textAlign: "center",
        marginTop: "15%",
        fontSize: 34,
        marginBottom: "10%",
    },

    description: {
        marginLeft: "auto",
        marginRight: "auto",
        letterSpacing: 2,
        fontSize: 25,
        color: "#BA8E8E",
        textAlign: "center",
    },

    description_container: {
        marginTop: 40,
        padding: 20,
        backgroundColor: "#2F1D1D",
        borderRadius: 20,
        marginBottom: 70,
    },

    more: {
        backgroundColor: "#2F1D1D",
        marginBottom: 80,
        borderRadius: 20,
        paddingBottom: 30,
    },

    more_info: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginBottom: 20,
    },

    image: {
        width: "100%",
        height: 300,
        overflow: "hidden",
        borderRadius: 30,

    },

})

export default Styles;