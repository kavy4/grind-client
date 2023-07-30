import React from 'react'
import Section from '../../../UI/Section/Section'
import { useSelector } from 'react-redux'
import AvatarPlaceholder from '../../Dev/AvatarPlaceholder/AvatarPlaceholder'

const Profile = () => {
    const { firstName, id, avatar } = useSelector(state => state.user)

    return <Section className='w-full'>
        <div className='flex items-center gap-x-6'>
            <AvatarPlaceholder />

            <div>
                <h2>{ firstName }</h2>
                <h3 className='text-sm'>Игровой id: <b>{ id }</b></h3>
            </div>
        </div>
        
    </Section>
}

export default Profile