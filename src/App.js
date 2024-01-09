import { Component } from "react";

class App extends Component {
  render() {
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width: '100%', background: "white", padding: '1rem' }}>
          {/* Expense From */}
        </div>

        <div style={{ width: '100%', background: "white", padding: '1rem' }}>
          {/* Expense List */}
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총지출 :
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

// 내보내줘야지 index.js에서 렌더 가능
export default App; 