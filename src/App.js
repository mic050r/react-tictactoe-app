import { useContext, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css"; // style 사용하기
import Alert from "./components/Alert";

const App = () => {
  const [charge, setCharge] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show: false });

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

  const handleEdit = (id) => {
    const expense = expenses.find((itme) => itme.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id != id);
    console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제 되었습니다!" });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 막기
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다!" });
      } else {
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        // expenses.push(newExpense); => 불변성 지키지 x
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        setCharge("");
        setAmount(0);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다!" });
      }
    } else {
      console.log("error");
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으면 amount는 0보다 커야합니다.",
      });
    }
  };
  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>

      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        {/* Expense From */}
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>

      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        {/* Expense List */}
        <ExpenseList
          initialExpense={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
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
};

// 내보내줘야지 index.js에서 렌더 가능
export default App;
