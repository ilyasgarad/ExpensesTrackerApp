import { Text, TextInput, View } from "react-native";

function Input({ label, textInputconfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputconfig} />
    </View>
  );
}

export default Input;
