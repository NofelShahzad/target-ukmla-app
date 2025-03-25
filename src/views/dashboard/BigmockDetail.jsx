// import React from 'react'

// import withAuth from "../../components/withAuth/withAuth";
// import withLayout from "../../components/withAuth/withLayout";
// import babiesImg from '../../assets/images/dashboard/webinars/babies.webp'
import '../../components/bigmocksCard/BigmocksCard.css'
import { useGetSingleMockQuery } from "../../redux/features/mocks/MocksApiSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Markup } from "react-render-markup";
import PageLoader from '../../components/pageLoader/PageLoader';
function BigmockDetail() {
    const [isLoading,setIsloading] = useState(true);
    const navigate = useNavigate();
    const [singleMock,setSingleMock] = useState("");
    const { mock_id } = useParams();

    const {data, error} = useGetSingleMockQuery(mock_id);

    useEffect(() => {
        if (data) {
            if (data?.status) {
                // console.log("data::",data); 
                setSingleMock(data);               
            }
            if (!data?.status) {
            navigate('/big-mocks')
            }
            setIsloading(false);
        }
        if (error) {
            console.log();
        }
    }, [data,error]);

    const handleNavigate = ()=>{
        navigate(`/mock/${singleMock?.mock?.slug}/${singleMock?.mock?.question?.slug}`);
    }

    return (
        <>
        {isLoading && <PageLoader/>  }
            <div className="container-fluid bigmock-detail-page">
                <div className='page-title-container'>
                    <h2 className="title">{singleMock?.mock?.name}</h2>
                    {/* <p>Text explaining what these are.</p> */}
                </div>
                <div className="col-12">
                    <div className="bigmocks-card">
                        <div className="bigmocks-inner-card px-2">
                            <div className="bigmocks-card-body">
                                <div className="card-title-wrapper">
                                    {/* <h2 className="title">Big Mock - April 2024</h2> */}
                                </div>
                                <div className="description">
                                    <Markup markup={singleMock?.mock?.description} />
                                </div>

                                <div className="bigmocks-card-footer">
                                  <button type='button' className='btn btn-primary' onClick={()=>handleNavigate()}>{singleMock?.paused?'Continue':'Start'} Mock</button>
                                  {/* <button type='button' className='btn btn-primary' onClickCapture={()=>handleNavigate()}>Pruchase</button> */}
                              </div>

                            </div>
                        </div>
                    </div>
                    <div className="bigmocks-logs d-flex flex-wrap gap-2 px-4">
                        {singleMock?.logs &&
                            singleMock?.logs.map((mockLog,index)=>
                            <div key={mockLog?.id} className="col-2">
                                <Link to={`/big-mocks/log/${mockLog?.id}`} className="btn btn-secondary w-100">Attempt {index+1}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
// const AuthenticatedDashboard = withAuth(BigmockDetail);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;
export default BigmockDetail;