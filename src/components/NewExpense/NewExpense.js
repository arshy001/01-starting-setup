import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Expenses from "../Expenses/Expenses";
function NewExpense() {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("inside saveExpenseDatahandler", expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
