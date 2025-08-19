import { createContext, useReducer } from "react";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
