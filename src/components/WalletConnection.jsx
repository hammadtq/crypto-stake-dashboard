import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connectWallet = () => {
    // This is a placeholder for actual OKX wallet connection logic
    // You would typically use a library or SDK provided by OKX here
    const mockAddress = '0x' + Math.random().toString(36).substring(2, 15);
    setAddress(mockAddress);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setAddress('');
    setIsConnected(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
      {isConnected ? (
        <>
          <span className="text-sm">Connected: {address}</span>
          <Button onClick={disconnectWallet} variant="outline">Disconnect</Button>
        </>
      ) : (
        <Button onClick={connectWallet}>Connect OKX Wallet</Button>
      )}
    </div>
  );
};