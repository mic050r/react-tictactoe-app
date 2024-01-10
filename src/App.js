import { Component } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css"; // style 사용하기

class App extends Component {
  initialExpense = [
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ];

  handleDelete = (id) => {
    const newExpenses = this.initialExpense.filter(
      (expense) => expense.id != id
    );
    console.log(newExpenses);
  };
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          {/* Expense From */}
          <ExpenseForm />
        </div>

        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          {/* Expense List */}
          <ExpenseList
            initialExpense={this.initialExpense}
            handleDelete={this.handleDelete}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총지출 :<span>원</span>
          </p>
        </div>
      </main>
    );
  }
}

// 내보내줘야지 index.js에서 렌더 가능
export default App;
