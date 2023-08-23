import React from 'react';
import { useQuery, gql } from '@apollo/client';

export interface IOrder {
  discount_price: string;
  id: number;
  order_date: string;
  customer_id: number;
  product: string;
  purchase_price: string;
  transaction_id: string;
}

interface IDataTableProps {
  orders: IOrder[];
}

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
