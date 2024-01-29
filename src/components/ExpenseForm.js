import React from "react";
import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      {/* 지출항목 부분 */}
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">지출 항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
          />
        </div>
        {/* 비용 부분 */}
        <div className="form-group">
          <label htmlFor="amout">비용</label>
          <input
            type="number"
            className="form-control"
            id="amout"
            name="amout"
            placeholder="예) 1000원"
          />
        </div>
      </div>
      {/* 제출 버튼 */}
      <button type="submit" className="btn">
        제출
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
