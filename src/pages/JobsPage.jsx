import React from 'react'
import UserStats from '../components/UserStats/UserStats'
import { useSelector } from 'react-redux'
import JobsList from '../components/Earn/Jobs/JobsList/JobsList'
import JobInfo from '../components/Earn/Jobs/JobInfo/JobInfo'

const JobsPage = ({ type = null }) => {
    const { balance, xp } = useSelector(state => state.user)

    const isUserWorking = Boolean(useSelector(state => state.user.inventory.job))
    
    return type === null ? isUserWorking ? (<>
        <UserStats content={[{ value: `${balance.toLocaleString()} $`, title: 'Баланс' }, { value: `${xp.toLocaleString()} XP`, title: 'Опыт' }]} />
        <JobInfo className='mt-4' />
    </>)
    :
    (<>
        <UserStats content={[{ value: `${balance.toLocaleString()} $`, title: 'Баланс' }]} />
        <JobsList />
    </>)
    :
    type === 'view' && (<>
        <JobsList type={type} />
    </>)
}

export default JobsPage