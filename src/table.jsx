import "./table.css";

export default function Tabledata({ transactions }) {
  return (
    <div className="table-container">
      <h6>Latest Loads are displayed here</h6>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/BRN</th>
            <th>A/c No./UPI</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td data-label="Date">{transaction.date} </td>
              <td data-label="Credits" className="credits">
                {transaction.credit}
              </td>
              <td data-label="A/c Balance">{transaction.availableBalance}</td>
              <td data-label="UTR/BRN">{transaction.utrBrn}</td>
              <td data-label="A/c No./UPI">{transaction.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
