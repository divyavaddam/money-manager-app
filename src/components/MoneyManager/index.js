// Write your code here
import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(item => id !== item.id)
    this.setState({historyList: updatedHistoryList})
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expensesAmount = 0
    historyList.forEach(item => {
      if (item.type === transactionTypeOptions[1].displayText) {
        expensesAmount += item.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(item => {
      if (item.type === transactionTypeOptions[0].displayText) {
        incomeAmount += item.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyList.forEach(item => {
      if (item.type === transactionTypeOptions[0].displayText) {
        incomeAmount += item.amount
      } else {
        expensesAmount += item.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onSubmitForm = event => {
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    event.preventDefault()

    const newHistory = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {historyList, title, amount, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="content">
          <div className="name-container">
            <h1 className="name">Hi Richard</h1>
            <p className="para">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="transaction-history-container">
          <div className="transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form className="my-form" onSubmit={this.onSubmitForm}>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                className="input"
                value={title}
                id="title"
                placeholder="TITLE"
                onChange={this.onTitleChange}
              />
              <br />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                className="input"
                id="amount"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onAmountChange}
              />
              <br />
              <label className="label" htmlFor="select">
                TYPE
              </label>
              <br />
              <select
                className="select-element"
                id="select"
                value={optionId}
                onChange={this.onTypeChange}
              >
                {transactionTypeOptions.map(item => (
                  <option id={item.optionId} value={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <ul className="history-details">
              <li className="list-items">
                <p className="sub-title">Title</p>
                <p className="sub-title">Amount</p>
                <p className="sub-title">Type</p>
              </li>

              {historyList.map(item => (
                <TransactionItem
                  details={item}
                  key={item.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
