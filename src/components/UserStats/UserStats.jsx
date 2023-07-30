import React from 'react'
import Section from '../../UI/Section/Section'

const UserStats = ({ content }) => {
    return <Section className='w-full flex flex-col gap-y-2'>
        { content.map((item, index) => <div key={index} className='flex justify-between items-center'>
            <h2>{ item.title }</h2>
            <h2>{ item.value }</h2>
        </div>) }
    </Section>
}

export default UserStats