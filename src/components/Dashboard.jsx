import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { WalletConnection } from './WalletConnection';
import { TransactionHistory } from './TransactionHistory';

const Dashboard = () => {
  const [btcAmount, setBtcAmount] = useState('');
  const [lstBalance, setLstBalance] = useState('0');
  const { toast } = useToast();

  const handleStake = () => {
    // This is a placeholder for the actual staking logic
    toast({
      title: "Staking Initiated",
      description: `Staking ${btcAmount} BTC...`,
    });
    // Here you would typically call a function to interact with the blockchain
    // For now, we'll just update the LST balance as a mock
    setLstBalance((parseFloat(lstBalance) + parseFloat(btcAmount)).toFixed(8));
    setBtcAmount('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">BTC to LST Dashboard</h1>
      
      <WalletConnection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Stake BTC</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="number"
              placeholder="Amount of BTC to stake"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleStake}>Stake BTC</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>LST Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{lstBalance} LST</p>
          </CardContent>
        </Card>
      </div>
      
      <TransactionHistory />
    </div>
  );
};

export default Dashboard;