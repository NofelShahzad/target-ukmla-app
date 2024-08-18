// import React from 'react'

import { useEffect, useState } from "react";
import FlaggedQuestionCard from "../../components/flaggedQuestionCard/FlaggedQuestionCard";
import withAuth from "../../components/withAuth/withAuth";
import withLayout from "../../components/withAuth/withLayout";
import ReactPortal from "../../components/portal/ReactPortal";
import UnflagQuestion from "../../components/modals/UnflagQuestion";
import { useGetAlMarkedQuestionsQuery, useMarkFlagMutation } from "../../redux/features/questionnaire/questionnaireApiSlice";

const mockContent='A 33 year old man presents with outward gaze and ptosis of his right eye. He also complains of seeing double. Which is the SINGLE most likely nerve to be affected?';
// const guidContent ='Radial Nerve (C5 - T1) damages are frequently asked. The radial nerve can be damaged anywhere in its ourse.';
function FlaggedQuestion() {
    const [flagModal, setFlagModal] = useState(false);
    const [tab, setTab] = useState('question');

    const [allFlaggedQuestions,setAllFlaggedQuestions] = useState([]);
    const [actionID,setActionID] = useState(null);

    const {data, error} = useGetAlMarkedQuestionsQuery();
    const [markFlag] = useMarkFlagMutation();

    useEffect(() => {
        if (data) {
            console.log("data::",data)
            if (data?.status) {
                setAllFlaggedQuestions(data?.questions)
            }
        }
    }, [data, error])


    const handleFlagModal = (id) => {
        setFlagModal(prev => !prev);
        setActionID(id);
    }

    const handleUnmarkFlag = async()=>{
        try {
            setFlagModal(false);
            const {data, error} = await markFlag({question_id: actionID,type:'remove'});
            if (data) {
                console.log("data::",data);
            }
            if (error) {
                console.log("error::",error);
            }
        } catch (err) {
            console.log("err::",err)
        }
    }

    return (
        <>
            <div className="container-fluid all-flagged-page pb-4">
                <div className='page-title-container'>
                    <h2 className="title">Flagged {tab}</h2>
                    <p>Text explaining what these are.</p>
                    <div className="tabs-btn-container">
                        <div className="col-sm-12 col-lg-6 col-xxl-4 col-12">
                            <div className="tabs-btn-inner-container">
                                <button type="button" className={`btn${tab === 'question' ? ' btn-primary' : ' btn-secondary'}`} onClick={() => setTab('question')}>Flagged Question</button>
                                <button type="button" className={`btn${tab === 'mock' ? ' btn-primary' : ' btn-secondary'}`} onClick={() => setTab('mock')}>Flagged Mock</button>
                                {/* <button type="button" className={`btn${tab === 'guide' ? ' btn-primary' : ' btn-secondary'}`} onClick={() => setTab('guide')}>Flagged Quides</button> */}


                            </div>
                        </div>

                    </div>
                </div>
                <section className="flagged-wrapper">
                    <div className="flagged-inner-wrapper">
                        {tab === 'question' &&
                            <>
                                {
                                    allFlaggedQuestions.map(item => {
                                        return (
                                            <FlaggedQuestionCard key={item?.id} flaggedQuestion={item} handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                        )
                                    })
                                }
                                {/* <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/> */}

                            </>

                        }
                        {tab === 'mock' &&
                            <>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                {/* <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={mockContent}/> */}

                            </>

                        }
                        {/* {tab === 'guide' &&
                            <>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                                <FlaggedQuestionCard handleFlagModal={handleFlagModal} type={tab} content={guidContent}/>
                            </>
                        } */}

                    </div>
                </section>

                {flagModal &&

                    <ReactPortal wrapperId="external_modal_container">
                        <UnflagQuestion closeModal={handleFlagModal} type={tab} handleUnmarkFlag={handleUnmarkFlag}/>
                    </ReactPortal>

                }
            </div>
        </>
    )
}

// const AuthenticatedDashboard = withAuth(FlaggedQuestion);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;

export default FlaggedQuestion