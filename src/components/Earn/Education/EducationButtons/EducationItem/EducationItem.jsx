import React from 'react'
import Section from '../../../../../UI/Section/Section'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../../UI/Button/Button'
import { addEducation } from '../../../../../store/userReducer'

const EducationItem = ({ item }) => {
    const { title, id, price } = item

    const userInventoryEducation = useSelector(state => state.user.inventory.education)

    const dispatch = useDispatch()

    const isBought = userInventoryEducation.includes(id)

    return <Section className='flex items-center justify-between'>
        <div>
            <h2>{title}</h2>
            <p className='text-sm'>{price.toLocaleString()} $</p>
        </div>
        { !isBought && <Button className='border' onClick={() => dispatch(addEducation({ id, price }))}>Обучиться</Button> }
    </Section>
}

export default EducationItem