import { useCallback, useEffect, useState } from "react";
import BigmocksCard from "../../../components/bigmocksCard/BigmocksCard"
import ReactPortal from "../../../components/portal/ReactPortal";
import BigmockInfo from "../../../components/modals/BigmockInfo";
import closeBtn from '../../../assets/icons/dashboard/modal-close.svg';
import { useAllPracticeMocksQuery } from "../../../redux/features/practice/practiceApiSlice";
import { errorMessage, successMessage } from "../../../components/toastMessages/ToastifyMsg";
import { useSelector } from "react-redux";
import { useBuyStandardPlanMutation, useGetStandardPlansQuery } from "../../../redux/features/plansApi/plansApiSlice";
import ExtendPlans from "../../../components/modals/ExtendPlans";

function PracticeMocks() {
  const auth = useSelector(state => state.auth);
  const [plansModal, setPlansModal] = useState(false);

  const handleClosePlansModal = useCallback(() => {
    setPlansModal(false)
  }, []);
  const handleOpenPlansModal = useCallback(() => {
    setPlansModal(true)
  }, []);
  const [detailModal, setDetailModal] = useState(false);
  const [bigMockDetail, setbigMockDetail] = useState();
  const [allPracticeMocks, setAllPracticeMocks] = useState([]);
  const [allStandardPlans, setAllStandardPlans] = useState([]);
  // const {data,error} = useGetAllMocksQuery();
  const [isLoading, setIsLoading] = useState(true);


  const { data: plansData, error: plansError } = useGetStandardPlansQuery(undefined, {
    skip: auth?.plan_info !== null
  });

  useEffect(() => {
    if (plansData) {
      if (plansData?.status) {
        // console.log("plansData::",plansData)
        setAllStandardPlans(plansData.plans)
      }
      if (!plansData.status) {
        setAllStandardPlans([]);
      }
    }
    if (plansError) {
      errorMessage(plansError?.data?.message);
      setAllStandardPlans([])
    }

  }, [plansData, plansError])

  const { data, error } = useAllPracticeMocksQuery();

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

  const [buyStandardPlan] = useBuyStandardPlanMutation();

    const handlePurchansePlan = async(plan)=>{
      // console.log("handlePurchansePlan::",plan);
      if (plan?.link.trim()) {
        window.location = plan?.link;
      }else{
        try {
          const body = {
            plan_id: plan?.id,
            days: plan?.days
          }
          const { data, error} = await buyStandardPlan(body);
          if (data) {
            // console.log(data)
            if (data?.status) {
              successMessage(data?.message);
            }
          }
          if (error) {
            errorMessage(error?.data?.message);
          }
        } catch (err) {
          console.log("err::",err)
        }
        
      }
    }

  return (
    <>
      <div className="container-fluid">
        <div className='page-title-container'>
          <h2 className="title">Practice Mock</h2>
          {/* <p>Text explaining what these are.</p> */}
        </div>

        <section className="bigmocks-wrapper pb-3">
          <div className="bigmocks-inner-wrapper">
            {allPracticeMocks.length > 0 &&
              allPracticeMocks.map(prac =>
                <BigmocksCard key={prac?.slug}
                  mockDetail={prac}
                  handleBigmockModal={handleBigmockModal}
                  type={"practice"}
                />
              )
            }
            {
              !allPracticeMocks.length > 0 && auth.plan_info && !isLoading &&
              <div className="emtpy-mg-container"><p>No practice questions found.</p></div>
            }


          </div>
        </section>
        {!auth.plan_info &&
          <section className="buy-plan-container">
            <h4>You haven&apos;t purchased any plan yet.</h4>
            <p>Please purchase a plan to start attempting questions.</p>
            {/* <p>You haven&apos;t purchased any plan. Please buy any plan to start attempting questions.</p> */}
            <button type="button" className="btn btn-primary" onClick={handleOpenPlansModal}>Buy Plan</button>
          </section>
        }
      </div>
      {detailModal &&
        <ReactPortal wrapperId="external_modal_container">
          <BigmockInfo closeBtn={closeBtn} bigMockDetail={bigMockDetail} closeModal={handleCloseBigmockModal} />
        </ReactPortal>

      }

      {plansModal &&
        <ReactPortal wrapperId="external_modal_container">
          <ExtendPlans allPlans={allStandardPlans} closeBtn={closeBtn} closeModal={handleClosePlansModal} handlePurchase={handlePurchansePlan} />
        </ReactPortal>
      }
    </>
  )
}

export default PracticeMocks