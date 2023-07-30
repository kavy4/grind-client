import { createSlice } from '@reduxjs/toolkit'

const educationReducer = createSlice({
    name: 'educationReducer',
    initialState: [
        {
            title: '9 классов',
            id: 1,
            price: 0
        },

        {
            title: '11 классов',
            id: 2,
            price: 500
        },

        {
            title: 'Педагогическое',
            id: 3,
            price: 15_000
        },

        {
            title: 'Медицинское',
            id: 4,
            price: 100_000
        },

        {
            title: 'Юридическое',
            id: 5,
            price: 3_000_000
        },

        {
            title: 'Экономическое',
            id: 6,
            price: 50_000_000
        }
    ],
})

export default educationReducer.reducer