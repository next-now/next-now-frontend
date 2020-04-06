import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import {useEffect, useState} from "react";

const Index: React.FC = () => {
  const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [walletId, setWalletId] = useState('');
    const [balance, setBalance] = useState(0);
    const [email, setEmail] = useState('');
    useEffect(() => {
        console.log('Component mounted');
        const user : string = localStorage.getItem("user") as string;
        const userId: number = (JSON.parse(user) as any).id;
        const token: string = localStorage.getItem('token') as string;
        fetch(`https://backend.next-now.site/api/v0/users/${userId}`,
            {
                headers:
                    {
                        Authorization: token
                    }
            })
            .then(res => res.json())
            .then(res => {
                setUsername(res.data.username);
                setEmail(res.data.email);
                setBalance(res.data.balance);
                setWalletId(res.data.walletId);
            });
        return () => {
            console.log('Component will be unmount')
        }
    }, []); // notice the empty array here, this is optional

  return (
    <>
      <h1 className="mb-8">{t('Wallet')}</h1>
      <p>{t('Collaborate and level-up.')}</p>
        <p>{ "User name: " + username}</p>
        <p>{ "Email: " + email}</p>
        <p>{ "Wallet Id: " + walletId}</p>
        <p>{ "Balance: " + balance}</p>
      {/*<Button text="Transactions" path="/wallet/transactions" />*/}
    </>
  );
};

export default Index;
