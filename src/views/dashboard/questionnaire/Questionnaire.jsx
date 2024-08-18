// import React from 'react'

import { useParams } from "react-router-dom"
// import withAuth from "../../../components/withAuth/withAuth";
// import withLayout from "../../../components/withAuth/withLayout";
import { Markup } from 'react-render-markup'
import { useCallback, useEffect, useState } from "react";
import QuestionnaireQuestion from "../../../components/questionnaireQuestion/QuestionnaireQuestion";
import QuestionNumberButton from "../../../components/questionnaireQuestion/QuestionNumberButton";
import QuestionAllComments from "../../../components/questionnaireQuestion/QuestionAllComments";
import ReactPortal from "../../../components/portal/ReactPortal";
import closeBtn from '../../../assets/icons/dashboard/modal-close.svg';
import LabValuesInfo from '../../../components/modals/LabValuesInfo'
import { useGetAllQuestionsOfCatQuery, useLazyGetSingleQuestionQuery, useMarkFlagMutation, useQuestionAnswerMutation } from "../../../redux/features/questionnaire/questionnaireApiSlice";


// const questionNumbers = Array.from({ length: 95 }, (_, i) => i + 1);
function Questionnaire() {
    const { questionnaire_Id, question_Id } = useParams();
    const [selectedValue, setSelectedValue] = useState('');
    const [flagMarked,setFlagMarked] = useState(false);
    const [selected, setSelected] = useState(false);
    const [activeQuestionIndex,setActiveQuestionIndex] = useState(null);
    const [labValuesModal,setLabValuesModal] = useState(false);
    const [questionsCount,setQuestionsCount] = useState([]);
    const [getSingleQuestion] = useLazyGetSingleQuestionQuery();
    const [singleQuestionDetails,setSingleQuestionDetails] = useState(null);
    const [questionCatTitle,setQuestionCatTitle] = useState("");
    // const [questionTitle,setQuestionTitle] = useState("");
    // const [questionCatDesc,setQuestionCatDesc] = useState("");
    const [apiCall,setApiCall] = useState(true);

    const {data, error} = useGetAllQuestionsOfCatQuery(questionnaire_Id);
    const [questionAnswer] = useQuestionAnswerMutation();
    const [markFlag] = useMarkFlagMutation();
    
    const handleGetSingleQuestion = async()=>{
        try {
            if (activeQuestionIndex) {
                setApiCall(true);
                const {data,error} = await getSingleQuestion(activeQuestionIndex);
                if (data) {
                    // console.log("getSingleQuestion::data::",data);
                    if (data?.status) {
                        setSingleQuestionDetails(data?.question);
                        setSelectedValue('');
                        setSelected(false);
                        setFlagMarked(data?.question?.is_flagged_count===1?true:false);
                        if (data?.question?.answer) {
                            setSelectedValue(data?.question?.answer?.option_id)
                        }
                    }
                    if (!data?.status) {
                        console.log(data?.status)
                        
                    }
                    setApiCall(false);
                }
                if (error) {
                    console.log("error::",error);
                }
            }
            
        } catch (err) {
            console.log("err::",err);
        }
    }


    useEffect(() => {
        if (data) {
            // console.log("data::",data);
            if (data?.status) {
                setQuestionsCount(data?.questions)
                setActiveQuestionIndex(activeQuestionIndex ? activeQuestionIndex:data?.questions[0]?.slug);
                setQuestionCatTitle(data?.category?.name);
            }
            if (!data?.status) {
                console.log(data?.status)
            }
            setApiCall(false)
        }
        if (error) {
            console.log("error::",error)
        }
    }, [data,error])

    useEffect(() => {
        handleGetSingleQuestion()
    }, [activeQuestionIndex])


    const handleCloseLabValuesModal = useCallback(() => {
        setLabValuesModal(false)
      },[])
    

    const handleChange = (event) => {
        setSelectedValue(JSON.parse(event.target.value));
        setSelected(true);
        // console.log("handleChange::",event.target.value)
    };


    const handleFlagMark= async()=>{
        try {
            // console.log("single::",singleQuestionDetails?.id)
            setApiCall(true);
            const {data, error} = await markFlag({question_id:singleQuestionDetails?.id,type: !flagMarked?"add":"remove"});
            if (data) {
                // console.log("data::",data);
                if (data?.status) {
                    setFlagMarked(!flagMarked);
                    // console.log(data?.status)
                }
                if (!data?.status) {
                    console.log(data?.status)
                }
                setApiCall(false);
            }
            if (error) {
                console.log("error::",error)
            }
        } catch (err) {
            console.log("err::",err);
        }
    }
    
    const handleChangeQuestion = (questionNumber)=>{
        setActiveQuestionIndex(questionNumber);
        // handleGetSingleQuestion(questionNumber)
    }

    const handleSubmitAnswer = async (e) => {
        try {
            e.preventDefault();
            setApiCall(true);
            const body = {
                question_id: singleQuestionDetails?.id,
                option_id: selectedValue,
            }

            const {data,error} = await questionAnswer(body);
            if (data) {
                // console.log("data::",data)
              if (data?.status) {
                setSingleQuestionDetails(data?.question);
                        setSelectedValue('');
                        setSelected(false);
                        setFlagMarked(data?.question?.is_flagged_count===1?true:false)
                        if (data?.question?.answer) {
                            setSelectedValue(data?.question?.answer?.option_id)
                        }
              }  
              setApiCall(false);
            }
            if (error) {
                console.log("error:",error);
            }
            
        } catch (err) {
            console.log("err::",err);
        }
    }

    const handleSubmitComment = async (e)=>{
        e.preventDefault();
        console.log("Comment Submitted")
    }

    const handleNextQuestion = () => {
        const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
        if (currentIndex < questionsCount.length - 1) {
            setActiveQuestionIndex(questionsCount[currentIndex + 1].slug);
        }
    };

    const handlePreviousQuestion = () => {
        const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
        if (currentIndex > 0) {
            setActiveQuestionIndex(questionsCount[currentIndex - 1].slug);
        }
    };
    
    const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);

    return (
        <>
            <div className="container-fluid">
                <div className="questionnaire-wrapper">
                    <div className="questionnaire-inner-wrapper">

                        <div className="col-md-7 col-lg-7 col-xxl-8 col-12 pe-lg-2 pe-0">
                            <div className="question-notes-wrapper">
                                <div className="question-container">
                                    <form action="" onSubmit={handleSubmitAnswer}>
                                        <div className="question-header">
                                            <h2 className="questionnaire-title">
                                                {questionCatTitle}
                                                    {/* Anatomy <span>(AN 3331)</span> */}
                                                </h2>
                                            <div className="flag-action">
                                                <button type="button" className={flagMarked?'flag-marked':''} onClick={handleFlagMark} disabled={apiCall}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                        <path id="flag" d="M10,2A2,2,0,0,0,8,0H0V16H1.333V8.667H6.667v.667a2,2,0,0,0,2,2H16V2.667H10ZM1.333,1.333H8A.667.667,0,0,1,8.667,2V7.333H1.333ZM14.667,4v6h-6A.667.667,0,0,1,8,9.333V8.667h2V4Z" />
                                                    </svg>
                                                    <span>{flagMarked?'Unmark':'Mark'} Flag</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="question-body">
                                            <QuestionnaireQuestion selectedValue={selectedValue} handleChange={handleChange} questionDetails={singleQuestionDetails}/>
                                            <div className="questionnaire-form-actions-btn-wrapper">
                                                {!singleQuestionDetails?.answer && 
                                                    <div className="col-12 py-1">
                                                        <button type="submit" className="btn btn-primary" disabled={!selected || apiCall}>Submit Answer</button>
                                                    </div>
                                                }
                                                <div className="col-6 pe-1 pt-3">
                                                    <button type="button" className="btn btn-secondary" onClick={handlePreviousQuestion}
                                                        disabled={currentIndex === 0 || apiCall}>
                                                            Previous Question
                                                    </button>
                                                </div>
                                                <div className="col-6 ps-1 pt-3">
                                                    <button type="button" className="btn btn-primary" onClick={handleNextQuestion}
                                                        disabled={currentIndex === questionsCount.length - 1 || apiCall}>
                                                            Next Question
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                {singleQuestionDetails?.description &&
                                    <div className="notes-container">
                                        <div className="notes-inner-container">
                                            <div className="notes-description">
                                                {/* <p>
                                                The term here would be &quot;Saturday night palsy&quot;. It can result from resting the medial side of the arm against an edge of the operating table for a prolonged period when the patient is anaesthetised. This results in compression of the radial nerve. Ideally, the anaesthetist should realise this and move the patient&aps;s hand back.<br/><br/> Clear hints in this question are the &quot;wrist drop&quot; and sensory loss of the dorsal aspect of 1st and 2nd metacarpals.
                                                </p>
                                                <i>The term &quot;Saturday nigh palsy&quot; probably originated from patients having their radial nerves compressed by leaning the medial aspect of their arm on the edge of the chair after being intoxicated from a Saturday night drinking session.</i> */}
                                                <Markup markup={singleQuestionDetails?.description} />
                                            </div>

                                            {/* <div className="notes-actions pt-3">
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Radial Nerve</button>
                                                </div>
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Ulnar Nerve, Radial Nerve Sensory Distribution</button>
                                                </div>
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Summary of Common Nerve Injuries</button>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xxl-4 col-12 ps-1">
                            <div className="question-index-comments-wrapper">
                                <div className="question-index-comments-inner-wrapper">
                                    <div className="question-index-container">
                                       
                                       {/* {questionNumbers.map(number=>(<QuestionNumberButton key={number} handleChangeQuestion={handleChangeQuestion} number={number} activeQuestionIndex={activeQuestionIndex}/>) )} */}
                                       {
                                        questionsCount?.map((questCountDetails,key)=>
                                        
                                        <QuestionNumberButton key={questCountDetails?.id} 
                                            handleChangeQuestion={handleChangeQuestion} 
                                            number={key+1} 
                                            activeQuestionIndex={activeQuestionIndex}
                                            questCountDetails={questCountDetails}
                                            apiCall={apiCall}
                                        />)
                                       }
                                    </div>
                                    <div className="col-12 py-4">
                                        <button type="button" className="btn btn-primary" onClick={()=>setLabValuesModal(true)}>Lab Values</button>
                                    </div>
                                    <div className="question-comment-container">
                                        <div className="question-comment-inner-container">
                                            <QuestionAllComments />

                                            <div className="post-comment">
                                                <form action="" onSubmit={handleSubmitComment}>
                                                    <div className="col-12">
                                                        <textarea name="" id=""rows="5" placeholder="Write a comment as Adam Bial"></textarea>
                                                    </div>
                                                    <div className="col-12 py-2">
                                                        <button type="submit" className="btn btn-primary">Post Comment</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {labValuesModal &&
                <ReactPortal wrapperId="external_modal_container">
                        <LabValuesInfo closeBtn={closeBtn} handleModal={handleCloseLabValuesModal}/>
                </ReactPortal>
            }
        </>
    )
}

// const AuthenticatedDashboard = withAuth(Questionnaire);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;




export default Questionnaire

  {/* <div className="questionnaire-question-container">
                                                <p>A 26 year old man presents to the Emergency Department complaining of difficulty in raising his arm above his head following a minor traffic accident a week ago, where he injured his left shoulder. On examination, there is noticeable winging of the scapula on the affected side when he presses against the wall with his hands. There is also weakness in forward flexion of the arm at the shoulder. Sensory examination is normal. Which nerve is most likely injured?</p>
                                                <div className="question-single-option">
                                    
                                                    <div className="question-radio-group">
                                                        <label className={`radio-option ${selectedValue === 'radial' ? 'checked' : ''}`} htmlFor="radial">
                                                            <input type="radio" className="col-1" id="radial" name="nerve" value="radial" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>A. Radial nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'median' ? 'checked' : ''}`} htmlFor="median">
                                                            <input type="radio" className="col-1" id="median" name="nerve" value="median" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>B. Median nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'ulnar' ? 'checked' : ''}`} htmlFor="ulnar">
                                                            <input type="radio" className="col-1" id="ulnar" name="nerve" value="ulnar" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>C. Ulnar nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'axillary' ? 'checked' : ''}`} htmlFor="axillary">
                                                            <input type="radio" className="col-1" id="axillary" name="nerve" value="axillary" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>D. Axillary nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'long-thoracic' ? 'checked' : ''}`} htmlFor="long-thoracic">
                                                            <input type="radio" className="col-1" id="long-thoracic" name="nerve" value="long-thoracic" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>E. Long thoracic nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div> */}