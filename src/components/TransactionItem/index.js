import './index.css'

const TransactionItem = props => {
  const {details, deleteTransaction} = props
  const {title, amount, type, id} = details
  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="history-list">
      <p className="category">{title}</p>
      <p className="category">Rs {amount}</p>
      <p className="category">{type}</p>
      <button className="dlt-btn" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="dlt"
          alt="delete"
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
