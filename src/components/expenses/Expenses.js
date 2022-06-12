import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [selectYear, setSelectYear] = useState("all");
  const selectYearHandler = (year) => {
    setSelectYear(year);
  };

  const filteredExpenses = (expenses || []).filter((expense) => {
    const year = expense.date.getFullYear().toString();
    if (selectYear === "all") return expenses;
    return year === selectYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesFilter
          selected={selectYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
