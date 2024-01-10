import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpense);
    return (
      <>
        <ul className="list">
          {/* Expense Item */}
          <ExpenseItem />
        </ul>
        <button className="btn">
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      </>
    );
  }
}

export default ExpenseList;
