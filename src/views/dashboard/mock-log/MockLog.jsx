import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMockLogsQuery } from '../../../redux/features/mocks/MocksApiSlice';
import { useEffect } from 'react';
import { Markup } from 'react-render-markup';
import PageLoader from '../../../components/pageLoader/PageLoader';
import './mockLog.css'
// import QuestionnaireQuestion from '../../../components/questionnaireQuestion/QuestionnaireQuestion';
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];

function MockLog() {
    const { mock_id } = useParams();
    const [allQuestions, setAllQuestion] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { data, error } = useMockLogsQuery(mock_id);

    useEffect(() => {
        if (data) {
            if (data?.status) {
                setAllQuestion(data?.questions);
                // console.log("data?.questions::", data?.questions)
            }
            if (!data?.status) {
                setAllQuestion([]);
            }
            setIsLoading(false);
        }
        if (error) {
            console.log("error::", error);
            setAllQuestion([]);
            setIsLoading(false);
        }
    }, [data, error]);


    return (
        <>
        {isLoading && <PageLoader/>}
            <div className='container-fluid'>
                <div className='page-title-container'>
                    <h2 className="title">
                        Mock Log
                        {/* {singleMock?.mock?.name} */}
                    </h2>
                    {/* <p>Text explaining what these are.</p> */}
                    {/* ${questionDetails?.is_correct === 'no' ? 'wrong' : ''}
                    ${questionDetails?.answer?.correct === 'no' && opt?.correct === 'yes' ? 'actual-correct' : ''}  */}
                </div>
                <div className='questionnaire-wrapper'>
                    <div className='questionnaire-inner-wrapper'>
                        <div className="col-12">
                            {isLoading ?
                                <div><p>No Questions.</p></div> :
                                <div className='question-container'>
                                    <div className='question-container'>
                                        <div className='question-body'>
                                            {allQuestions.map((question,index) =>{
                                                    const optionMap = new Map(question?.options.map(option => [option?.id, option]));

                                                    const sortedByRank = [...question.options].sort((a, b) => a.rank - b.rank);
                                                    // console.log("sortedByRank:::",sortedByRank)
                                                    // console.log("optionMap:::",optionMap)
                                                    // Sort options according to answer.options order
                                                    const sortedOptions = question.attempted_options.map(id => optionMap.get(id));
                                               return( <>
                                                    <div className="questionnaire-question-container" style={{borderBottom: '2px solid #fff'}}>
                                                        <span className='fw-bold'>Q{index+1}. &nbsp;&nbsp;</span><Markup markup={question?.question} />
                                                        {/* <p>{questionDetails?.title}</p> */}
                                                        {/* <p>A 26 year old man presents to the Emergency Department complaining of difficulty in raising his arm above his head following a minor traffic accident a week ago, where he injured his left shoulder. On examination, there is noticeable winging of the scapula on the affected side when he presses against the wall with his hands. There is also weakness in forward flexion of the arm at the shoulder. Sensory examination is normal. Which nerve is most likely injured?</p> */}
                                                        <div className="question-single-option">
                                                            <div className={`question-radio-group ${question?.question_type==="ranking"? 'ranking-logs-container':''}`}>
                                                                {question?.question_type==="single_choice"&&
                                                                    question?.options?.map((opt, index) => (
                                                                        <label key={opt?.id}
                                                                            className={`radio-option disable ${ question?.attempted_opt_id===opt?.id && opt?.is_correct? 'correct text-light':''} ${question?.attempted_opt_id===opt?.id && !opt?.is_correct? 'wrong text-light':''} ${opt?.is_correct? 'actual-correct wrong':''} ${question?.attempted_opt_id === opt?.id ? 'user-submitted checked' : ''}`}
                                                                            htmlFor={opt?.id}>
                                                                            <div className="question-label-result col-11">
                                                                                <p>{alphabets[index]}.&nbsp;<Markup markup={opt?.text}/></p>
                                                                                <div className="result-percentage">
                                                                                    {/* {questionDetails?.answer && totalSelectedCount() > 0 && (
                                                                                        <span>
                                                                                            {((opt?.correct_answers_count + opt?.wrong_answers_count) / totalSelectedCount() * 100).toFixed()}%
                                                                                        </span>
                                                                                    )} */}
                                                                                </div>
                                                                            </div>

                                                                            <div className="submitted-status-wrapper">
                                                                                <div className="submitted-status-inner-wrapper" style={{ width: `${(question?.attempted_opt_id===opt?.id && !opt?.is_correct)||(question?.attempted_opt_id===opt?.id && opt?.is_correct)? '100%':'0'} ` }}>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    ))
                                                                }
                                                                {question?.question_type==="multiple_choice"&&
                                                                    question?.options?.map((opt, index) => (
                                                                        <label key={opt?.id}
                                                                            className={`radio-option disable ${ question?.attempted_options.includes(opt?.id) && opt?.is_correct? 'correct':''} 
                                                                                ${question?.attempted_options.includes(opt?.id) && !opt?.is_correct? 'wrong checked text-light':''} 
                                                                                ${opt?.is_correct? 'actual-correct wrong':''} 
                                                                                ${question?.attempted_opt_id === opt?.id ? 'user-submitted checked' : ''}`}
                                                                            htmlFor={opt?.id}>
                                                                            <div className="question-label-result col-11">
                                                                                <p>{alphabets[index]}.&nbsp;<Markup markup={opt?.text}/></p>
                                                                                <div className="result-percentage">
                                                                                    {/* {questionDetails?.answer && totalSelectedCount() > 0 && (
                                                                                        <span>
                                                                                            {((opt?.correct_answers_count + opt?.wrong_answers_count) / totalSelectedCount() * 100).toFixed()}%
                                                                                        </span>
                                                                                    )} */}
                                                                                </div>
                                                                            </div>

                                                                            <div className="submitted-status-wrapper">
                                                                                <div className="submitted-status-inner-wrapper" style={{ width: `${(question?.attempted_options.includes(opt?.id) && !opt?.is_correct)||(question?.attempted_options.includes(opt?.id) && opt?.is_correct)? '100%':'0'} ` }}>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    ))
                                                                }
                                                                {question?.question_type==="ranking"&& 
                                                                    <>
                                                                    <div className="w-50">
                                                                        <p className="mb-1">
                                                                            <strong>Correct Ranking</strong>
                                                                        </p>
                                                                    <div className="ranking-options-container ">
                                                                        {
                                                                            sortedByRank.map((item,index)=>
                                                                                <div key={item.id} className='item correct'>
                                                                                    <span className="">{alphabets[index]}.</span><Markup markup={item?.text}/>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </div>

                                                                    </div>
                                                                    <div className="w-50">
                                                                        <p className="mb-1">
                                                                            <strong>Your submitted Ranking</strong>
                                                                        </p>
                                                                    <div className="ranking-options-container">
                                                                        {
                                                                            sortedOptions.map((item,index)=>
                                                                                <div key={item.id} className={`item ${item.rank===index+1?'correct':'wrong'}`}>
                                                                                    <span className="">{index+1}.</span><Markup markup={item?.text}/>
                                                                                </div>
                                                                            )
                                                                        }

                                                                    </div>

                                                                    </div>

                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='mt-2'>
                                                            {question?.question_type!=="ranking" &&
                                                                <p className="m-0"><b> Correct Answers:</b>&nbsp;
                                                                    <strong className='text-success'> {question?.options.map((opt, index)=>{
                                                                        return opt?.is_correct===true?`${alphabets[index]}`:''
                                                                    })
                                                                    }</strong>
                                                                </p>
                                                            }
                                                            <span className='fw-bold'>Explanation</span>
                                                            <p className="mb-0">
                                                                <Markup markup={question?.explanation}/>
                                                                {/* {question?.explanation} */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>)
                                                }
                                            )}

                                            {allQuestions.length === 0 &&
                                                <div className="emtpy-mg-container flex-col" style={{flexDirection: "column"}}>
                                                    <div className="mb-2">
                                                        <svg width="40" height="40" viewBox="0 0 24 24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8"/></svg>
                                                    </div>
                                                    <p>You have not attempted any question for this mock.</p>
                                                </div>

                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>




            </div>
        </>

    )
}

export default MockLog