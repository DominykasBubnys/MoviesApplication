import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 15,
        paddingBottom: 50
    },

    header: {
        // color: "white",
        // textAlign: "center",
        // marginTop: "50%",
        // fontSize: 34,
        // marginBottom: "30%",
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 30,
        marginTop: 30,
    },

    image: {
        width: "80%",    
        height: 300,
        borderRadius: 300 / 2,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "20%", 
    },

    dataText : {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 20,
        marginTop: 15,
    },

    bodyData: {
        borderColor: 'blue',
        borderWidth: 3
    },

    library: {
        marginTop: 40,
        borderRadius: 30,
        backgroundColor: "rgb(0, 0, 0)",
        padding: 20,
    },

    libraryHeader: {
        textAlign: "center",
        color: "#BA8E8E",
        fontSize: 35,

    }

})

export default Styles;