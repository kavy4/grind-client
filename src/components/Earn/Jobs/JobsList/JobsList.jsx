import React from 'react'
import JobItem from './JobItem/JobItem'
import { useSelector } from 'react-redux'

const JobsList = ({ type = null }) => {
    const jobsList = useSelector(state => state.jobs)

    return <div className='flex flex-col gap-y-4 mt-4'>
        { jobsList.map(job => <JobItem type={type} {...job} />) }
    </div>
}

export default JobsList