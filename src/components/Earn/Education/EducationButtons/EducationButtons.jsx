import React from 'react'
import EducationItem from './EducationItem/EducationItem'
import { useSelector } from 'react-redux'
import UserStats from '../../../UserStats/UserStats'

const EducationButtons = () => {
    const educationButtonsList = useSelector(state => state.education)

    const { balance } = useSelector(state => state.user)

    return <>
        <UserStats content={[{ value: `${balance.toLocaleString()} $`, title: 'Баланс' }]} />
        <div className='flex flex-col gap-y-4 mt-4'>
            { educationButtonsList.map(educationButton => <EducationItem item={educationButton} />) }
        </div>
    </>
}

export default EducationButtons