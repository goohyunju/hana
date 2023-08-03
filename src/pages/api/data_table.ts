import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query MyQuery {
    order(limit: 10) {
      discount_price
      id
      order_date
      customer_id
      product
      purchase_price
      transaction_id
    }
  }
`;

const DataTable: React.FC = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Order Data</h2>
      <ul>
        {data.order.map((order: any) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Order Date: {order.order_date}</p>
            <p>Customer ID: {order.customer_id}</p>
            <p>Product: {order.product}</p>
            <p>Purchase Price: {order.purchase_price}</p>
            <p>Discount Price: {order.discount_price}</p>
            <p>Transaction ID: {order.transaction_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataTable;
