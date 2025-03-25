import './PageLoader.css';
const PageLoader = () => {
    return (
        <>
            <div className="loader-wrapper">
                {/* <div className="heart-rate">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="73px" viewBox="0 0 150 73" enableBackground="new 0 0 150 73" xmlSpace="preserve">
                        <polyline fill="none" stroke="#940202" strokeWidth="3" strokeMiterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                        />
                    </svg>
                    <div className="fade-in-loader"></div>
                    <div className="fade-out-loader"></div>
                </div> */}
                <div className="loading">
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>

        </>
    )
}

export default PageLoader
