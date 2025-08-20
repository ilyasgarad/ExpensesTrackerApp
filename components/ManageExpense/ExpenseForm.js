import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputconfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Date"
        textInputconfig={{
          palceholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputconfig={{
          multiline: true,
          autoCorrect: false,
        }}
      />
    </View>
  );
}

export default ExpenseForm;
