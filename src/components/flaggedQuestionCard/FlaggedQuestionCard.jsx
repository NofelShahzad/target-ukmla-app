// import React from 'react'
import { Markup } from 'react-render-markup'
import flag from '../../assets/icons/dashboard/flag-icon.svg'
import './FlaggedQuestionCard.css'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function FlaggedQuestionCard({handleFlagModal, type, flaggedQuestion,index}) {
    // console.log("flaggedQuestion::",flaggedQuestion)
  return (
    <>
        <div className="flagged-question-card-wrapper">
            <div className="flagged-question-card-inner-wrapper">
                { type !=='guide name' &&
                <div className="question-code-container">
                    <h2>Question Code. <span>{index+1}</span></h2>
                    
                    {flaggedQuestion?.category_slug && flaggedQuestion?.slug ? (
                          <Link to={`/${flaggedQuestion.category_slug}/${flaggedQuestion.slug}`}>
                              <div>
                                  <h2 className='mb-0 d-inline'>{flaggedQuestion?.category_name}</h2>
                              </div>
                          </Link>
                      ) : (
                              <h2 className='mb-0 d-inline'>{flaggedQuestion?.category_name}</h2>
                      )}
                </div>
}
                {/* <div className="question-body">
                    <Link to={`/${flaggedQuestion?.category_slug}/${flaggedQuestion?.slug}`}>
                    <div>
                        <h2 className='mb-0 d-inline'>{flaggedQuestion?.category_name} </h2>
                    </div>
                    </Link>
                    <h2>{type}</h2>
                    <Link to={`/${flaggedQuestion?.category_slug}/${flaggedQuestion?.slug}`}>
                        <Markup markup={flaggedQuestion?.title}/>
                    </Link>
                </div> */}
                  <div className="question-body">
                      <h2 className='mb-0'>Question</h2>

                      {flaggedQuestion?.category_slug && flaggedQuestion?.slug ? (
                          <Link to={`/${flaggedQuestion.category_slug}/${flaggedQuestion.slug}`}>
                              <Markup markup={flaggedQuestion?.title} />
                          </Link>
                      ) : (
                          <Markup markup={flaggedQuestion?.title} />
                      )}
                  </div>

                <div className="flag-action">
                    <button type='button' onClick={()=>handleFlagModal(flaggedQuestion?.id)}><img src={flag} alt='flag img'/> <span>Unmark Flag</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FlaggedQuestionCard