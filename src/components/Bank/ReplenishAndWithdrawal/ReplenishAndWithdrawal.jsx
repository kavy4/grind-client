import React from 'react'
import UserStats from '../../UserStats/UserStats'
import { useDispatch, useSelector } from 'react-redux'
import MoneyForm from '../../MoneyForm/MoneyForm'
import { replenishBalance, withdrawalBalance } from '../../../store/userReducer'

const ReplenishAndWithdrawal = ({ type }) => {
    const { balance, bankBalance } = useSelector(state => state.user)

    const dispatch = useDispatch()

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
        <MoneyForm options={{ title: type === 'replenish' ? 'Пополнить' : type === 'withdrawal' && 'Снять', action: amount => type === 'replenish' ? dispatch(replenishBalance(amount)) : type === 'withdrawal' && dispatch(withdrawalBalance(amount)) }} balance={type === 'replenish' ? balance : type === 'withdrawal' && bankBalance} />
    </>
}

export default ReplenishAndWithdrawal