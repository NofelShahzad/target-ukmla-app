// import React from 'react'

import { useState } from "react";
import ReactPortal from "../../components/portal/ReactPortal";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import FlaggedQuestionCard from "../../components/flaggedQuestionCard/FlaggedQuestionCard";
import UnflagQuestion from "../../components/modals/UnflagQuestion";
const guidContent ='Radial Nerve (C5 - T1) damages are frequently asked. The radial nerve can be damaged anywhere in its ourse.';

function FlaggedGuides() {
    const [flagModal, setFlagModal] = useState(false);

    const handleFlagModal = () => {
        setFlagModal(prev => !prev);
    }
  return (
    <div className="container-fluid all-flagged-page">
                <div className='page-title-container'>
                    <h2 className="title">Flagged Guides</h2>
                    <p>Text explaining what these are.</p>
                    
                </div>
                <section className="flagged-wrapper">
                    <div className="flagged-inner-wrapper">
                      
                       
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={'guide'} content={guidContent}/>
                          

                    </div>
                </section>

                {flagModal &&

                    <ReactPortal wrapperId="external_modal_container">
                        <UnflagQuestion closeModal={handleFlagModal} type={'guide'} />
                    </ReactPortal>

                }
            </div>
  )
}

export default FlaggedGuides

// const AuthenticatedDashboard = withAuth(FlaggedGuides);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;