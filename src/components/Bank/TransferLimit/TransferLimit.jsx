import React from 'react'
import MainButton from '../../../UI/MainButton/MainButton'
import { useSelector } from 'react-redux'
import ProgressBar from '../../../UI/ProgressBar/ProgressBar'

const TransferLimit = ({ ...props }) => {
    const { limit } = useSelector(state => state.user)

    return <MainButton {...props} buttonOptions={{ title: 'Лимит', value: `${limit.used.toLocaleString()} $ / ${limit.all.toLocaleString()} $` }}>
        <ProgressBar filled={limit.used} className='w-3/4 mx-auto mb-2' />
    </MainButton>
}

export default TransferLimit