// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="money-detail-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="img"
          alt="balance"
        />
        <div className="amount-details">
          <p className="balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-detail-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="img"
          alt="income"
        />
        <div className="amount-details">
          <p className="balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-detail-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="img"
          alt="expenses"
        />
        <div className="amount-details">
          <p className="balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
