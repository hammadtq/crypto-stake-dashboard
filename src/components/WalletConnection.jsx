import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connectWallet = () => {
    const mockAddress = '0x' + Math.random().toString(36).substring(2, 15);
    setAddress(mockAddress);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setAddress('');
    setIsConnected(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
      {isConnected ? (
        <>
          <span className="text-sm text-muted-foreground">Connected: {address}</span>
          <Button onClick={disconnectWallet} variant="outline" className="bg-muted text-foreground hover:bg-muted/90">Disconnect</Button>
        </>
      ) : (
        <Button onClick={connectWallet} className="bg-primary hover:bg-primary/90 w-full">Connect OKX Wallet</Button>
      )}
    </div>
  );
};