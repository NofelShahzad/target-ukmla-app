import React, { useState } from 'react';

// Define the alphabets you want to use for the options
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];

const QuestionOptions = ({ questionDetails, selectedValue, handleChange }) => {
    return (
        <>
            {questionDetails?.options?.map((opt, index) => {
                // Use the index to get the corresponding alphabet
                const alphabet = alphabets[index] || ''; // Handle cases where there are more options than alphabets

                return (
                    <label key={opt?.id} className={`radio-option ${selectedValue === opt?.value ? 'checked' : ''}`} htmlFor={`radio-${opt?.id}`}>
                        <input
                            type="radio"
                            className="col-1"
                            id={`radio-${opt?.id}`}
                            name="nerve"
                            value={opt?.value}
                            onChange={handleChange}
                        />
                        <div className="question-label-result col-11">
                            <p>{alphabet}. {opt?.description}</p>
                            <div className="result-percentage"><span></span></div>
                        </div>
                        <div className="submitted-status-wrapper">
                            <div className="submitted-status-inner-wrapper"></div>
                        </div>
                    </label>
                );
            })}
        </>
    );
};

export default QuestionOptions;
