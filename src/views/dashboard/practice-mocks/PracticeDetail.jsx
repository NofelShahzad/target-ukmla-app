import React from 'react'
import '../../../components/bigmocksCard/BigmocksCard.css'
import { useGetSingleMockQuery } from "../../../redux/features/mocks/MocksApiSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Markup } from "react-render-markup";
function PracticeDetail() {


    const navigate = useNavigate();  
    const [singleMock,setSingleMock] = useState("");
    const { practice_id } = useParams();

    const {data, error} = useGetSingleMockQuery(practice_id);

    useEffect(() => {
        if (data) {
            if (data?.status) {
                // console.log("data::",data); 
                setSingleMock(data);               
            }
            if (!data?.status) {
            // navigate('/big-mocks')
            }
        }
        if (error) {
            console.log();
        }
    }, [data,error]);

    const handleNavigate = ()=>{
        navigate(`/practice/${singleMock?.mock?.slug}/${singleMock?.mock?.question?.slug}`);
    }



  return (
    <>
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
                                {/* <div className="course-date-container">
                                    <h2 className="title">Course Dates</h2>
                                    <p>17th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>18th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>19th July 2024 (10:00 am - 5:30 pm) UK Time</p>
                                    <p>20th July 2024 (1:30 pm - 5:30 pm) UK Time</p>
                                </div>
                                <div className="price-details">
                                    <p>£130 per person<br /> (Includes a dedicated WhatsApp group with access to course tutors to answer questions, revision slides and the NEW BIG MOCK, which would be discussed in-depth).</p>
                                </div> */}
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
                                <button className="btn btn-secondary" disabled>Mock {index+1}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    </>
  )
} 

export default PracticeDetail