import React from 'react'
import '../../../components/bigmocksCard/BigmocksCard.css'
import { useGetSingleMockQuery } from "../../../redux/features/mocks/MocksApiSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Markup } from "react-render-markup";
import PageLoader from '../../../components/pageLoader/PageLoader';
function PracticeDetail() {
    const [isLoading,setIsLoading] = useState(true);

    const navigate = useNavigate();  
    const [singleMock,setSingleMock] = useState("");
    const { practice_id } = useParams();

    const {data, error} = useGetSingleMockQuery(practice_id);

    useEffect(() => {
        if (data) {
            if (data?.status) {
                // console.log("data::",data); 
                setSingleMock(data);
                setIsLoading(false);
            }
            if (!data?.status) {
            // navigate('/big-mocks')
            }
        }
        if (error) {
            console.log("error::",error);
        }
    }, [data,error]);

    const handleNavigate = ()=>{
        navigate(`/practice/${singleMock?.mock?.slug}/${singleMock?.mock?.question?.slug}`);
    }



  return (
    <>{isLoading && <PageLoader/>  }
        <div className="container-fluid bigmock-detail-page">
                <div className='page-title-container'>
                    <h2 className="title">{singleMock?.mock?.name}</h2>
                    {/* <p>Text explaining what these are.</p> */}
                </div>
                <div className="col-12">
                    <div className="bigmocks-card">
                        <div className="bigmocks-inner-card px-2">
                            {/* <div className="bigmocks-img">
                                <img src={babiesImg} />
                            </div> */}
                            <div className="bigmocks-card-body">
                                <div className="card-title-wrapper">
                                    {/* <h2 className="title">Big Mock - April 2024</h2> */}
                                </div>
                                <div className="description">
                                    <Markup markup={singleMock?.mock?.description} />
                                    
                                    {/* <p>Join out new and improved 4-day online PLAB 1 exam Revision Course with Dr. Adam Jakes & Dr. Wei Zian Szetho &apos;Sze&apos;!</p> */}
                                </div>
                                <div className="bigmocks-card-footer gap-2">
                                  <button type='button' className='btn btn-primary' onClick={()=>handleNavigate()} disabled={singleMock?.paused?false:true}>Continue Mock</button>
                                  
                                    <button type='button' className='btn btn-primary' onClick={()=>handleNavigate()} disabled={!singleMock?.paused?false:true} >Create New Mock</button>
                                  
                                  {/* <button type='button' className='btn btn-primary' onClickCapture={()=>handleNavigate()}>Pruchase</button> */}
                              </div>

                            </div>
                        </div>
                    </div>
                    <div className="bigmocks-logs d-flex flex-wrap gap-2 px-4">
                        {singleMock?.logs &&
                            singleMock?.logs.map((mock,index)=>
                            <div key={mock?.id} className="col-2">
                                <Link to={`/practice-mocks/log/${mock?.id}`} className="btn btn-secondary w-100" disabled>Mock {index+1}</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    </>
  )
} 

export default PracticeDetail