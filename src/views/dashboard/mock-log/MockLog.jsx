import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMockLogsQuery } from '../../../redux/features/mocks/MocksApiSlice';
import { useEffect } from 'react';
import { Markup } from 'react-render-markup';
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
                                            {allQuestions.map((question,index) =>
                                                <>
                                                    <div className="questionnaire-question-container" style={{borderBottom: '1px solid #fff'}}>
                                                        <span className='fw-bold'>Q{index+1}. &nbsp;&nbsp;</span><Markup markup={question?.question} />
                                                        {/* <p>{questionDetails?.title}</p> */}
                                                        {/* <p>A 26 year old man presents to the Emergency Department complaining of difficulty in raising his arm above his head following a minor traffic accident a week ago, where he injured his left shoulder. On examination, there is noticeable winging of the scapula on the affected side when he presses against the wall with his hands. There is also weakness in forward flexion of the arm at the shoulder. Sensory examination is normal. Which nerve is most likely injured?</p> */}
                                                        <div className="question-single-option">
                                                            <div className="question-radio-group">
                                                                {
                                                                    question?.options?.map((opt, index) => (
                                                                        <label key={opt?.id}
                                                                            className={`radio-option disable ${question?.attempted_opt_id===opt?.id && opt?.is_correct? 'correct text-light':''} ${question?.attempted_opt_id===opt?.id && !opt?.is_correct? 'wrong text-light':''} ${opt?.is_correct? 'actual-correct wrong':''} ${question?.attempted_opt_id === opt?.id ? 'user-submitted checked' : ''}`}
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
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            )}
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