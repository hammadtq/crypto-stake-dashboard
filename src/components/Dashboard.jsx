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
      <h1 className="text-4xl font-bold mb-2">Welcome to BTC Staking</h1>
      <h2 className="text-2xl font-semibold mb-6 gradient-text">Stake BTC — Mint LST</h2>
      
      <WalletConnection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">LST Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold gradient-text">{lstBalance} LST</p>
            <p className="text-sm text-muted-foreground mt-2">0 BTC | $0</p>
            <Button variant="outline" className="mt-4">Unstake</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Start Staking BTC</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="number"
              placeholder="Amount of BTC to stake"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
              className="mb-4"
            />
            <Button onClick={handleStake} className="w-full bg-primary hover:bg-primary/90">Stake BTC</Button>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-2xl">Access Liquid Bitcoin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            LST represents your staked BTC. LST can be used as collateral for lending, borrowing, and trading. 
            Your stake will earn yields when delegated to PoS networks. Additional partner incentives may be issued retroactively.
          </p>
        </CardContent>
      </Card>
      
      <TransactionHistory />
    </div>
  );
};

export default Dashboard;