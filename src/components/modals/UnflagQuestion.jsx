// import React from 'react'
import unflagQuestionIcon from '../../assets/icons/dashboard/unflag-question-icon.svg'

// eslint-disable-next-line react/prop-types
function UnflagQuestion({closeModal,type,handleUnmarkFlag}) {
  return (
    <>
        <section className='unflag-modal-wrapper'>
            <div className='header-unflag'>
                <img src={unflagQuestionIcon} alt="unflag-question-icon" />
                <h2 className='title'>Unflag Question</h2>
            </div>
            <div className='unflag-modal-body'>
                <p>Are you sure want to unflag <br/> the {type}?</p>
                <div className='action-buttons'>
                        <button type='button' className='btn btn-primary' onClick={handleUnmarkFlag}>Yes, Unflag</button>
                        <button type='button' className='btn btn-secondary' onClick={()=>closeModal()}>No, Keep Flag</button>
                </div>
            </div>
        </section>
    <div>UnflagQuestion</div>
    </>
  )
}

export default UnflagQuestion