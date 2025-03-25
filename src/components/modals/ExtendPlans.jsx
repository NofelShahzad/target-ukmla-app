// import React from 'react'

// eslint-disable-next-line react/prop-types
function ExtendPlans({allPlans, closeBtn, closeModal, type, handlePurchase}) {
    console.log("allPlans::",allPlans)
    return (
        <>
            <div className="detail-modal detail-modal-lg">
                <div className='close-btn-container'>
                    <img src={closeBtn} alt='close' onClick={closeModal} />
                </div>
                <div className="extend-plans-wrapper">
                    {
                        allPlans?.map((plan) =>
                        <div key={plan?.id} className="col-lg-4 col-12 px-2">
                            <div className="single-extend-plan">
                                <h2 className="title">{type==="extend" ?'Extend':'Buy'} {plan?.name} <br /><sub> {plan?.days/30} Month(s)</sub> </h2>
                                <div className="extend-action-wrapper">
                                    {/* <div className="col-lg-5 col-lg-12 col-6 pe-1 pe-lg-0 py-1 py-lg-2 ">
                                        <button type="button" className="btn btn-secondary">Please RESET my account</button>
                                    </div>
                                    <div className="col-lg-5 col-lg-12 col-6 ps-1 ps-lg-0 py-1 py-lg-2 ">
                                        <button type="button" className="btn btn-secondary">Do Not Reset my account</button>
                                    </div> */}
                                    <div className="col-lg-5 col-lg-12 col-12 py-1 py-lg-2 ">
                                        {type ==="reset" &&
                                            <button type="button" className="btn btn-primary" onClick={()=>handlePurchase(plan,'reset')}>
                                                {type==='reset'&&'Reset'} & Pay £{plan?.price}
                                            </button>
                                        }
                                        {type==="extend"&&
                                            <button type="button" className="btn btn-primary" onClick={()=>handlePurchase(plan,'extend')}>
                                                {type==='extend'&&'Extend'} Pay £{plan?.price}
                                            </button>
                                        }
                                        {type !=="reset" && type!=="extend" &&
                                            <button type="button" className="btn btn-primary" onClick={()=>handlePurchase(plan,'extend')}>
                                            {type==='extend'&&'Extend'} Pay £{plan?.price}
                                        </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                    {/* <div className="col-lg-4 col-12 px-2">
                        <div className="single-extend-plan">
                            <h2 className="title">Extend 3 Months</h2>
                            <div className="extend-action-wrapper">
                                <div className="col-lg-5 col-lg-12 col-6 pe-1 pe-lg-0 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-secondary">Please RESET my account</button>
                                </div>
                                <div className="col-lg-5 col-lg-12 col-6 ps-1 ps-lg-0 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-secondary">Do Not Reset my account</button>
                                </div>
                                <div className="col-lg-5 col-lg-12 col-12 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-primary">Pay £15 Additional</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 px-2">
                        <div className="single-extend-plan">
                            <h2 className="title">Extend 5 Month</h2>
                            <div className="extend-action-wrapper">
                                <div className="col-lg-5 col-lg-12 col-6 pe-1 pe-lg-0 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-secondary">Please RESET my account</button>
                                </div>
                                <div className="col-lg-5 col-lg-12 col-6 ps-1 ps-lg-0 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-secondary">Do Not Reset my account</button>
                                </div>
                                <div className="col-lg-5 col-lg-12 col-12 py-1 py-lg-2 ">
                                    <button type="button" className="btn btn-primary">Pay £15 Additional</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ExtendPlans