import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(69, 98, 77, 0.3)",
        borderColor: "rgba(32, 43, 35, 0.88)",
        borderBottomWidth: 10,
        borderRadius: 23,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        width: "80%",
        padding: 10,
        marginTop: 20,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
    },

    icon: {
        paddingTop: 5,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "white",
        textAlign: "center",
        color: "white",
        width: "50%",
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto"
    },
    
    input: {
        letterSpacing: 2,
        fontStyle: "italic",
        textAlign: "center",
        color: "white"
    },


    invalid: {
    }

    
})

export const ButtonStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: "rgba(51, 77, 58, 0.9)",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 60,
        borderRadius: 20
    },

    disabled: {
        backgroundColor: "rgba(12, 16, 12, 0.65)",
        opacity: 1
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})