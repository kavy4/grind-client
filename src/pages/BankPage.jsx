import React from 'react'
import UserStats from '../components/UserStats/UserStats'
import { useSelector } from 'react-redux'
import TransferLimit from '../components/Bank/TransferLimit/TransferLimit'
import Card from '../components/Bank/Card/Card'
import BankButtons from '../components/Bank/BankButtons/BankButtons'

const BankPage = () => {
    const { balance, bankBalance } = useSelector(state => state.user)

    const userStatsContent = [
        {
            title: 'Баланс',
            value: `${balance.toLocaleString()} $`
        },

        {
            title: 'Банк',
            value: `${bankBalance.toLocaleString()} $`
        }
    ]

    return <>
        <UserStats content={userStatsContent} />
        <TransferLimit className='mt-4' />
        {/* <Card className='mx-auto mt-4' /> */}
        <BankButtons />
    </>
}

export default BankPage