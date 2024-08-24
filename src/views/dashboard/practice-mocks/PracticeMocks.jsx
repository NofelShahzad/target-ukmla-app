import { useEffect, useState } from "react";
import BigmocksCard from "../../../components/bigmocksCard/BigmocksCard"
import ReactPortal from "../../../components/portal/ReactPortal";
import BigmockInfo from "../../../components/modals/BigmockInfo";
import closeBtn from '../../../assets/icons/dashboard/modal-close.svg';
import { useAllPracticeMocksQuery } from "../../../redux/features/practice/practiceApiSlice";
import { errorMessage } from "../../../components/toastMessages/ToastifyMsg";

function PracticeMocks() {
    const [detailModal, setDetailModal] = useState(false);
    const [bigMockDetail,setbigMockDetail] = useState();
    const [allPracticeMocks,setAllPracticeMocks] = useState([]);
    // const {data,error} = useGetAllMocksQuery();
    const [isLoading,setIsLoading] = useState(true);

    const {data, error} = useAllPracticeMocksQuery(); 

    useEffect(() => {
        if (data) {
          if (data?.status) {
            setAllPracticeMocks(data?.mocks);
            setIsLoading(false);
          }
        }
        if (error) {
          if (error?.data?.message) {
             errorMessage(error?.data?.message);
          }
        }
      }, [data, error])



    const handleCloseBigmockModal = () => {
        setDetailModal(false);
    }
    const handleBigmockModal = (detail) => {
        setDetailModal(prev => !prev);
        setbigMockDetail(detail);
    }


  return (
    <>
        <div className="container-fluid">
            <div className='page-title-container'>
            <h2 className="title">Practice Mock</h2>
            <p>Text explaining what these are.</p>
            </div>

            <section className="bigmocks-wrapper pb-3">
            <div className="bigmocks-inner-wrapper">
                {allPracticeMocks.length >0 &&
                    allPracticeMocks.map(prac=>
                        <BigmocksCard key={prac?.slug}  
                            mockDetail={prac} 
                            handleBigmockModal={handleBigmockModal}  
                            type={"practice"}
                        />
                    )
                }
                {
                    !allPracticeMocks.length >0 && !isLoading &&
                    <div className="emtpy-mg-container"><p>No practice questions found.</p></div>
                }
                

            </div>
            </section>
        </div>
        {detailModal &&
        <ReactPortal wrapperId="external_modal_container">
          <BigmockInfo closeBtn={closeBtn} bigMockDetail={bigMockDetail} closeModal={handleCloseBigmockModal}/>
        </ReactPortal>

      }
    </>
  )
}

export default PracticeMocks