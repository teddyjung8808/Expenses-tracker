import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpense }) {
  const [isEditingForm, setIsEditingForm] = useState(false);

  // id 를 추가한 객체를 받도록 수정
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    onAddExpense(expenseData);
    setIsEditingForm(false);
    // console.log("expenseData", expenseData);
  };

  const addExpenseHandler = () => {
    console.log("addExpenseHandler working");
    setIsEditingForm(true);
  };

  const stopEditingHandler = () => {
    setIsEditingForm(false);
  };

  let showingComponent = (
    <button type="button" className="" onClick={addExpenseHandler}>
      Add Expense
    </button>
  );

  if (isEditingForm) {
    showingComponent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{showingComponent}</div>;
}

export default NewExpense;
