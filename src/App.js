import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css"; // style 사용하기

const App = () => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id != id);
    console.log(newExpenses);
    setExpenses(newExpenses);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 막기
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      // expenses.push(newExpense); => 불변성 지키지 x
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
    } else {
      console.log("error");
    }
  };
  return (
    <main className="main-container">
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        {/* Expense From */}
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
        />
      </div>

      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        {/* Expense List */}
        <ExpenseList initialExpense={expenses} handleDelete={handleDelete} />
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
        <p style={{ fontSize: "2rem" }}>
          총지출 :<span>원</span>
        </p>
      </div>
    </main>
  );
};

// 내보내줘야지 index.js에서 렌더 가능
export default App;
