// import React from 'react'
import './SinglePlan.css'
// eslint-disable-next-line react/prop-types
function SinglePlan({status}) {
    return (
        <>
            <div className='single-plan-container'>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th>Plan</th>
                            <th>Subscribed</th>
                            <th>Expires</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5 Months</td>
                            <td>14-04-2024</td>
                            <td>14-09-2024</td>
                            <td><span className={`status-tag ${status==='active'?'active':'inactive'}`}>{status}</span> </td>
                        </tr>
                    </tbody>
                </table>
                <div className='plan-action'>
                    <div className="col-6 p-1">
                        <button className='btn btn-secondary'>Reset Plan</button>
                    </div>
                    <div className="col-6 p-1">
                        <button className='btn btn-primary'>Extend Plan</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePlan