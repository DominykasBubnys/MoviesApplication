import { Text, Pressable } from 'react-native';
import { ButtonStyles } from '../../styles/FormElementsStyles';

const Button = (props) => {

  const { onPress, title, disabled } = props;
  return (
    <Pressable style={[ButtonStyles.button, disabled? ButtonStyles.disabled : null, props.style]} onPress={onPress}>
      <Text style={ButtonStyles.text}>{title}</Text>
    </Pressable>
  );
}

export default Button;
