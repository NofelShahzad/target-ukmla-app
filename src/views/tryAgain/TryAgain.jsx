import failedIcon from '../../assets/icons/failed-icon.svg'
function TryAgain() {
    return (
        <div className='cred-page-wrapper'>
            <div className='cred-page-inner-wrapper failed-container'>

                <div className='account-verified-container'>
                    <img src={failedIcon} />
                    <h2 className='verified-title'>Failed</h2>
                    <p>Ooops, something went wrong.</p>
                    <div className="col-12">
                        <button className="btn col-7">Try again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TryAgain