import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import {useEffect} from "react";

const Index: React.FC = () => {
  const { t } = useTranslation();

    // useEffect(() => {
    //     console.log('Component mounted');
    //     const user : string = localStorage.getItem("user") as string;
    //     const userId: number = (JSON.parse(user) as any).id;
    //     const token: string = localStorage.getItem('token') as string;
    //     fetch(`https://backend.next-now.site/api/v0/users/${userId}`,
    //         {
    //             headers:
    //                 {
    //                     Authorization: token
    //                 }
    //         })
    //         .then(res => res.json())
    //         .then(res => console.log(res));
    //     return () => {
    //         console.log('Component will be unmount')
    //     }
    // }, []); // notice the empty array here, this is optional

  return (
    <>
      <h1 className="mb-8">{t('Wallet')}</h1>
      <p>{t('Collaborate and level-up.')}</p>
      <Button text="Transactions" path="/wallet/transactions" />
    </>
  );
};

export default Index;
