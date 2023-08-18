import {Table, Tr, Td , TabString} from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <Tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TabString key={id}>
            <Td >{type}</Td>
            <Td >{amount}</Td>
            <Td >{currency}</Td>
          </TabString>
        ))}
      </tbody>
    </Table>
  );
};