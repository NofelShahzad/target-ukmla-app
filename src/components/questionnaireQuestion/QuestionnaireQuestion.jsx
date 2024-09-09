import { Markup } from "react-render-markup";


const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];

function QuestionnaireQuestion({ selectedValue, handleChange, questionDetails }) {
    // console.log("questionDetails::", questionDetails)
    // console.log("selectedValue::",selectedValue)
    const totalSelectedCount = questionDetails?.options.reduce((acc, opt) => {
        return acc + opt.correct_answers_count + opt.wrong_answers_count;
    }, 0);
    return (
        <>
            <div className="questionnaire-question-container">
                <Markup markup={questionDetails?.title}/>
                {/* <p>{questionDetails?.title}</p> */}
                {/* <p>A 26 year old man presents to the Emergency Department complaining of difficulty in raising his arm above his head following a minor traffic accident a week ago, where he injured his left shoulder. On examination, there is noticeable winging of the scapula on the affected side when he presses against the wall with his hands. There is also weakness in forward flexion of the arm at the shoulder. Sensory examination is normal. Which nerve is most likely injured?</p> */}
                <div className="question-single-option">
                    <div className="question-radio-group">
                        {
                            questionDetails?.options?.map((opt, index) => (
                                <label key={opt?.id}
                                    className={`radio-option ${selectedValue === opt?.id ? 'checked' : ''} ${questionDetails?.answer?.correct === 'yes' ? 'correct' : ''} ${questionDetails?.answer?.correct === 'no' ? 'wrong' : ''} ${questionDetails?.answer?.correct === 'no' && opt?.correct === 'yes' ? 'actual-correct' : ''} ${questionDetails?.answer ? 'disable' : ''} ${selectedValue !== opt?.id?'user-submitted':''}`}
                                    htmlFor={opt?.id}>

                                    <input type="radio"
                                        className="col-1"
                                        id={opt?.id}
                                        name={opt?.question_id}
                                        value={opt?.id}
                                        checked={selectedValue === opt?.id}
                                        onChange={(e) => handleChange(e)}
                                        disabled={!!questionDetails?.answer && selectedValue !== opt?.id} />

                                    <div className="question-label-result col-11">
                                        <p>{alphabets[index]}. {opt?.description}</p>
                                        <div className="result-percentage">
                                            {questionDetails?.answer && totalSelectedCount > 0 && (
                                                <span>
                                                    {((opt?.correct_answers_count + opt?.wrong_answers_count) / totalSelectedCount * 100).toFixed()}%
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="submitted-status-wrapper">
                                        <div className="submitted-status-inner-wrapper"
                                            style={{ width: `${totalSelectedCount > 0 ? (opt?.correct_answers_count + opt?.wrong_answers_count) / totalSelectedCount * 100 : 0}%` }}>
                                        </div>
                                    </div>
                                </label>
                            ))
                        }


                    </div>
                </div>

            </div>
        </>
    )
}

export default QuestionnaireQuestion

{/* {questionDetails?.options?.map((opt,index) =>
                            <label key={opt?.id} className={`radio-option ${selectedValue === opt?.id ? 'checked' : ''}  ${questionDetails?.answer?.correct==='yes'?'correct':''} ${questionDetails?.answer?.correct==='no'?'wrong':''} ${questionDetails?.answer?.correct==='no' && opt?.correct==='yes'?'actual-correct':'' }  ${questionDetails?.answer? 'disable':''}`
                        } 
                                htmlFor={opt?.id}
                            >
                                {console.log("opt::",opt)}
                                {console.log(selectedValue)}
                                {console.log(opt?.id)}
                                {console.log(selectedValue === opt?.id)}
                                <input type="radio" className="col-1" id={opt?.id} name={opt?.question_id} value={opt?.id} 
                                    checked={selectedValue === opt?.id} onChange={(e)=>handleChange(e)} 
                                    disabled={!!questionDetails?.answer}
                                />
                                <div className="question-label-result col-11">
                                    <p>{alphabets[index]}. {opt?.description}</p>
                                    <div className="result-percentage">
                                        <span>{questionDetails?.answer&& <> {((opt?.correct_answers_count+opt?.wrong_answers_count)/(questionDetails?.answers_count)*100).toFixed()}%</>}</span>
                                    </div>
                                </div>
                                <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper" 
                                style={{width: `${(opt?.correct_answers_count+opt?.wrong_answers_count)/(questionDetails?.answers_count)*100}%`}}></div></div>
                            </label>

                        )
                        } */}

{/*<label className={`radio-option ${selectedValue === 'long-thoracic' ? 'checked' : ''}`} htmlFor="long-thoracic">
                            <input type="radio" className="col-1" id="long-thoracic" name="nerve" value="long-thoracic" onChange={handleChange} />
                            <div className="question-label-result col-11">
                                <p>E. Long thoracic nerve</p>
                                <div className="result-percentage"><span></span></div>
                            </div>
                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                        </label> */}