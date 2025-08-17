import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-08-16"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 99.99,
    date: new Date("2024-08-10"),
  },
  {
    id: "e3",
    description: "some pineapple",
    amount: 79.96,
    date: new Date("2025-02-27"),
  },
  {
    id: "e4",
    description: "hair cream",
    amount: 86.99,
    date: new Date("2023-04-30"),
  },
  {
    id: "e5",
    description: "cream for body",
    amount: 52.99,
    date: new Date("2024-06-02"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-08-16"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 99.99,
    date: new Date("2024-08-10"),
  },
  {
    id: "e8",
    description: "some pineapple",
    amount: 79.96,
    date: new Date("2025-02-27"),
  },
  {
    id: "e9",
    description: "hair cream",
    amount: 86.99,
    date: new Date("2023-04-30"),
  },
  {
    id: "e10",
    description: "cream for body",
    amount: 52.99,
    date: new Date("2024-06-02"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
