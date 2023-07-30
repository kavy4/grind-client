import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        firstName: 'Bob',
        lastName: 'Barnes',
        id: 111111,
        avatar: null,

        balance: 10000,
        bankBalance: 0,
        crystal: 1,
        xp: 111,

        limit: {
            used: 0,
            all: 25_000_000
        },
        
        inventory: {
            education: [],
            job: 0,
            farm: 0,
            business: 0
        }
    },

    reducers: {
        replenishBalance: (state, action) => {
            if (state.balance >= action.payload && action.payload > 0) {
                state.balance -= action.payload
                state.bankBalance += action.payload
            }
        },

        withdrawalBalance: (state, action) => {
            if (state.bankBalance >= action.payload && action.payload > 0) {
                state.bankBalance -= action.payload
                state.balance += action.payload
            }
        },

        addEducation: (state, action) => {
            if (state.balance >= action.payload.price) {
                state.balance -= action.payload.price
                state.inventory.education.push(action.payload.id)
            }
        },

        addJob: (state, action) => {
            if (state.inventory.education.includes(action.payload.educationId)) {
                state.inventory.job = action.payload.id
            }
        },

        removeJob: (state, action) => {
            state.inventory.job = 0
        }
    }
})

export default userReducer.reducer
export const { replenishBalance, withdrawalBalance, addEducation, addJob, removeJob } = userReducer.actions