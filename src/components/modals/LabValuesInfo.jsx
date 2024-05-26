
function LabValuesInfo({closeBtn, handleModal}){

    return(
        <>
            <section className='detail-modal'>
                <div className='close-btn-container'>
                    <img src={closeBtn} alt='close' onClick={handleModal} />
                </div>
                </section>
        </>
    )
}

export default LabValuesInfo;