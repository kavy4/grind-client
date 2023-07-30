import React from 'react'
import styles from './Card.module.scss'
import { useSelector } from 'react-redux'

const Card = ({ ...props }) => {
    const { firstName, lastName, id } = useSelector(state => state.user)
    
    return <div id={styles.card} {...props}>
        <h2 className='absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>{firstName} {lastName}</h2>

        <div className='w-full flex justify-around items-center'>
            <h2>VIRTUAL CARD</h2>
            <h2>{id}</h2>
        </div>
    </div>
}

export default Card