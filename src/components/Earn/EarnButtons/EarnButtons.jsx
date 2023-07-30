import React from 'react'
import Button from '../../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../store/pagesReducer'

const EarnButtons = () => {
    const dispatch = useDispatch()

    const earnButtonsList = [
        {
            title: 'Образование',
            page: 'education'
        },

        {
            title: 'Работа',
            page: 'jobs'
        },

        {
            title: 'Ферма',
            page: ''
        },

        {
            title: 'Бизнес',
            page: ''
        }
    ]

    return <div className='flex gap-4 flex-wrap'>
        { earnButtonsList.map(earnButton => <Button className='w-2/5 grow' onClick={() => dispatch(setPage(earnButton.page))}>{earnButton.title}</Button>) }
    </div>
}

export default EarnButtons