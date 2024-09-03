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
    toast({
      title: "Staking Initiated",
      description: `Staking ${btcAmount} BTC...`,
    });
    setLstBalance((parseFloat(lstBalance) + parseFloat(btcAmount)).toFixed(8));
    setBtcAmount('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 gradient-text">BTC to LST Dashboard</h1>
      
      <WalletConnection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-2xl">Stake BTC</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="number"
              placeholder="Amount of BTC to stake"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
              className="mb-4 bg-muted text-foreground"
            />
            <Button onClick={handleStake} className="w-full bg-primary hover:bg-primary/90">Stake BTC</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-2xl">LST Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold gradient-text">{lstBalance} LST</p>
          </CardContent>
        </Card>
      </div>
      
      <TransactionHistory />
    </div>
  );
};

export default Dashboard;