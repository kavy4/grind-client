import React, { useState } from 'react'
import Button from '../../../UI/Button/Button'
import Popup from '../../../UI/Popup/Popup'
import ReplenishAndWithdrawal from '../ReplenishAndWithdrawal/ReplenishAndWithdrawal'

const BankButtons = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false)

    const [popupContent, setPopupContent] = useState()

    const isOpenPopupOptions = {
        isOpen: isOpenPopup,
        setIsOpen: setIsOpenPopup
    }

    const buttons = [
        {
            title: 'Пополнение',
            content: <ReplenishAndWithdrawal type='replenish' />
        },

        {
            title: 'Снятие',
            content: <ReplenishAndWithdrawal type='withdrawal' />
        },

        {
            title: 'Перевод',
            content: <h2>Перевод</h2>
        }
    ]

    return <>
        <div className='flex flex-wrap gap-4 mt-4'>
            { buttons.map(button => <Button className='w-1/3 grow' onClick={() => {
                setPopupContent(button.content)
                setIsOpenPopup(true)
            }}>{button.title}</Button>) }
        </div>

        <Popup className='w-3/4' isOpenOptions={isOpenPopupOptions}>{popupContent}</Popup>
    </>
}

export default BankButtons