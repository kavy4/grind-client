import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

const MoneyForm = ({ options, balance }) => {
    const { title, action } = options

    const [amount, setAmount] = useState('')

    const Validation = (amount) => {
        amount = String(amount).split('')
        const validations = '1234567890'

        let isRight = true

        amount.map(symbol => !(validations.includes(symbol)) ? isRight = false : null)

        if (isRight && amount[0] === '0') {
            isRight = false
        }


        return isRight
    }

    const SendAmount = (amount) => {
        const isRight = Validation(amount)

        if (isRight) {
            action(Number(amount))
            setAmount('')
        }
    }

    return <>
        <Input className='mt-4 w-full' placeholder='Сумма' value={amount} onKeyUp={event => event.key === 'Enter' && SendAmount(amount)} onChange={event => setAmount(event.target.value)} />
        <Button className='mt-4 w-full' onClick={() => SendAmount(amount)}>{title}</Button>

        <div className='mt-4 flex gap-x-4'>
            <Button className='grow' onClick={() => setAmount(balance)}>Всё</Button>
            <Button className='grow' onClick={() => setAmount(amount * 1000)}>000</Button>
        </div>
    </>
}

export default MoneyForm