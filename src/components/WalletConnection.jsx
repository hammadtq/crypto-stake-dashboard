import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Web3 from 'web3';

export const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.okxwallet) {
      const web3Instance = new Web3(window.okxwallet);
      setWeb3(web3Instance);
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.okxwallet.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      console.error("OKX Wallet not detected");
    }
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
          <Button onClick={disconnectWallet} variant="outline">Disconnect</Button>
        </>
      ) : (
        <Button 
          onClick={connectWallet} 
          className="bg-primary hover:bg-primary/90 w-full"
          disabled={!web3}
        >
          {web3 ? "Connect OKX Wallet" : "OKX Wallet Not Detected"}
        </Button>
      )}
    </div>
  );
};