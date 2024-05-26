// import React from 'react'

// eslint-disable-next-line react/prop-types
function QuestionnaireQuestion({ selectedValue, handleChange }) {
    return (
        <>
            <div className="questionnaire-question-container">
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

            </div>
        </>
    )
}

export default QuestionnaireQuestion