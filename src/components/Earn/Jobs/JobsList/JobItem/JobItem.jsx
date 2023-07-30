import React from 'react'
import { useSelector } from 'react-redux'
import AvatarPlaceholder from '../../../../Dev/AvatarPlaceholder/AvatarPlaceholder'
import Section from '../../../../../UI/Section/Section'
import Button from '../../../../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { addJob } from '../../../../../store/userReducer'
import Hr from '../../../../../UI/Hr/Hr'

const JobItem = ({ type, title, paycheck, xpPerHour, id, educationId, ...props }) => {
    const dispatch = useDispatch()

    const education = useSelector(state => state.education).find(item => item.id === educationId)

    return <Section {...props}>
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-4 items-center'>
                <AvatarPlaceholder />
                <h2>{title}</h2>
            </div>
            { type !== 'view' && <Button onClick={() => dispatch(addJob({ id, educationId }))} className='border'>Устроится</Button> }
        </div>

        <Hr className='my-4' />

        <div className='flex flex-col gap-y-2'>
            <h2>Образование: {education.title}</h2>
            <h2>Зарплата в час: {paycheck.toLocaleString()} $</h2>
            <h2>Опыт в час: {xpPerHour.toLocaleString()} XP</h2>
        </div>
    </Section>
}

export default JobItem