import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const TransactionHistory = () => {
  // This is mock data. In a real application, you would fetch this from your backend or blockchain
  const transactions = [
    { id: 1, type: 'Stake', amount: '0.5 BTC', date: '2024-03-15' },
    { id: 2, type: 'Mint', amount: '0.5 LST', date: '2024-03-15' },
    { id: 3, type: 'Stake', amount: '1.0 BTC', date: '2024-03-14' },
    { id: 4, type: 'Mint', amount: '1.0 LST', date: '2024-03-14' },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};