import { createSlice } from '@reduxjs/toolkit'

const jobsReducer = createSlice({
    name: 'jobsReducer',
    initialState: [
        {
            title: 'Курьер',
            educationId: 1,

            paycheck: 100,
            xpPerHour: 3,

            storage: {
                paycheck: {
                    filled: 0,
                    size: 7_200
                },

                xp: {
                    filled: 0,
                    size: 216
                }
            },

            id: 1
        },

        {
            title: 'Бармен',
            educationId: 2,

            paycheck: 1500,
            xpPerHour: 3,

            storage: {
                paycheck: {
                    filled: 0,
                    size: 108_000
                },

                xp: {
                    filled: 0,
                    size: 216
                }
            },
            
            id: 2
        }
    ]
})

export default jobsReducer.reducer