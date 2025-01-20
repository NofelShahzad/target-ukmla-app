// import React from 'react'
import moment from 'moment/moment'
import './SinglePlan.css'
// eslint-disable-next-line react/prop-types
function SinglePlan({plan, handleOpenPlansModal, indexCount}) {

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
                            <td>{plan?.name} </td>
                            <td>{moment(plan?.start_from).format('ll')}</td>
                            <td>{moment(plan?.expire_at).format('ll')}</td>
                            <td><span className={`status-tag ${plan?.status.toLowerCase()==='active'?'active':'inactive'}`}>{plan?.status}</span> </td>
                        </tr>
                    </tbody>
                </table>
                {/* {console.log("indexCount::",indexCount)} */}
                {indexCount===0 && 
                    <div className='plan-action'>
                        <div className="col-6 p-1">
                            <button className='btn btn-secondary' onClick={()=>handleOpenPlansModal()}>Reset Plan</button>
                        </div>
                        <div className="col-6 p-1">
                            <button className='btn btn-primary' onClick={()=>handleOpenPlansModal()}>Extend Plan</button>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default SinglePlan