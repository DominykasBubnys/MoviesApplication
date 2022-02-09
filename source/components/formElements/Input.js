import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputStyles } from "../../styles/FormElementsStyles";
import { useState } from "react";


const Input = props => {

    const commonInputArguments = {
        placeholder: props.placeholder,
        onChangeText: props.onChange,
        placeholderTextColor: "white",
        style: InputStyles.input,
        value: props.value,
        isValid: true
    }

    const [showPassword, setShowPassword] = useState(false);
    const [securedPassword, setSecuredPassword] = useState(props.secured);

    const pressIconHandler = () => {
        setShowPassword(!showPassword);
        setSecuredPassword(!securedPassword);
    }

    return <View style={InputStyles.container}>
        {   
            props.secured 
            
            ? 

            <View>
                <TextInput 
                    {...commonInputArguments}
                    secureTextEntry={securedPassword}
                />        
                {
                    commonInputArguments.value ? 
                    <TouchableOpacity onPress={pressIconHandler}>
                        <Text style={InputStyles.icon}>
                            {showPassword? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity> : null
                }
            </View>
            
            :
            
            <View>
                <TextInput 
                    {...commonInputArguments}
                />
            </View>
        }   
    </View>
}

export default Input;