import React from 'react'
import MainButton from '../../../UI/MainButton/MainButton'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../../store/pagesReducer'

const MainButtons = () => {
    const { balance, bankBalance, crystal, xp } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return <div className='flex gap-4 flex-wrap w-full mt-4'>
        <MainButton buttonOptions={{ value: `${balance.toLocaleString()} $`, title: 'Баланс' }} className='w-5/12' />
        <MainButton buttonOptions={{ value: `${bankBalance.toLocaleString()} $`, title: 'Банк' }} onClick={() => dispatch(setPage('bank'))} className='w-5/12' />
        <MainButton buttonOptions={{ value: crystal, title: 'Кристалы' }} className='w-5/12' />
        <MainButton buttonOptions={{ value: `${xp.toLocaleString()} XP`, title: 'Опыт' }} className='w-5/12' />
    </div>
}

export default MainButtons