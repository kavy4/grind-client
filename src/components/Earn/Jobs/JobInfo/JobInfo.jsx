import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Section from '../../../../UI/Section/Section'
import AvatarPlaceholder from '../../../Dev/AvatarPlaceholder/AvatarPlaceholder'
import Button from '../../../../UI/Button/Button'
import Hr from '../../../../UI/Hr/Hr'
import ProgressBar from '../../../../UI/ProgressBar/ProgressBar'
import { setPage } from '../../../../store/pagesReducer'
import { removeJob } from '../../../../store/userReducer'

const JobInfo = ({ ...props }) => {
    const dispatch = useDispatch()

    const userJobId = useSelector(state => state.user.inventory.job)

    const userJob = useSelector(state => state.jobs).find(job => job.id === userJobId)

    const { title, paycheck, id, storage, xpPerHour } = userJob

    const paycheckFilledPercent = storage.paycheck.filled / storage.paycheck.size * 100
    const xpFilledPercent = storage.xp.filled / storage.xp.size * 100

    console.log(paycheckFilledPercent)

    return <>
        <Section {...props}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                    <AvatarPlaceholder />

                    <div>
                        <h2>{title}</h2>
                        <p className='text-sm'>00м. 00</p>
                    </div>
                </div>

                <Button className='border' onClick={() => dispatch(removeJob(id))}>Уволится</Button>
            </div>

            <Hr className='my-4' />

            <div className='flex flex-col gap-y-2'>
                <h2>Зарплата в час: {paycheck.toLocaleString()} $</h2>
                <h2>Опыт в час: {xpPerHour.toLocaleString()} XP</h2>
            </div>
        </Section>

        <div className='flex flex-col gap-y-4 mt-4'>
            <Section>
                <h2>Зарплата: {storage.paycheck.filled.toLocaleString()} / {storage.paycheck.size.toLocaleString()} $</h2>
                <ProgressBar className='mt-1' filled={paycheckFilledPercent} />
            </Section>

            <Section>
                <h2>Опыт: {storage.xp.filled.toLocaleString()} / {storage.xp.size.toLocaleString()} XP</h2>
                <ProgressBar className='mt-1' filled={xpFilledPercent} />
            </Section>

            <Button className='text-start' onClick={() => dispatch(setPage('jobs_view'))}>Список работ</Button>
        </div>
    </>
}

export default JobInfo