// import React from 'react'

import { useNavigate, useParams } from "react-router-dom"
// import withAuth from "../../../components/withAuth/withAuth";
// import withLayout from "../../../components/withAuth/withLayout";
import { Markup } from 'react-render-markup'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import QuestionnaireQuestion from "../../../components/questionnaireQuestion/QuestionnaireQuestion";
import QuestionNumberButton from "../../../components/questionnaireQuestion/QuestionNumberButton";
import QuestionAllComments from "../../../components/questionnaireQuestion/QuestionAllComments";
import ReactPortal from "../../../components/portal/ReactPortal";
import closeBtn from '../../../assets/icons/dashboard/modal-close.svg';
import LabValuesInfo from '../../../components/modals/LabValuesInfo'
import { useGetAllQuestionsOfCatQuery, useGetSingleQuestionQuery, useLazyGetSingleQuestionQuery, useMarkFlagMutation, useQuestionAnswerMutation } from "../../../redux/features/questionnaire/questionnaireApiSlice";
import ButtonLoader from '../../../components/loaders/ButtonLoader';
import { errorMessage, successMessage } from "../../../components/toastMessages/ToastifyMsg";
import { useFinishMockTimerMutation, useGetAllQuesionOfMockQuery, useMockTimeCheckerMutation, useResetMockMutation, useStartMockTimerMutation } from "../../../redux/features/mocks/MocksApiSlice";
import Timer from "../../../components/timer/Timer";
import { getCurrentTimeDate } from "../../../utils/util";
import { useAddCommentMutation, useDeleteCommentMutation, useGetAllCommentsQuery, useLikeDislikeCommentMutation, useUpdateCommentMutation } from "../../../redux/features/commentsApi/commentsApiSlice";
import { useSelector } from "react-redux";

// const questionNumbers = Array.from({ length: 95 }, (_, i) => i + 1);
function Questionnaire({ isMock, type }) {
    const userAuth = useSelector(state=>state.auth);
    const { questionnaire_Id, question_Id, mock_id, practice_id } = useParams();
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');
    const [flagMarked, setFlagMarked] = useState(false);
    const [selected, setSelected] = useState(false);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
    const [labValuesModal, setLabValuesModal] = useState(false);
    const [questionsCount, setQuestionsCount] = useState([]);
    const [getSingleQuestion] = useLazyGetSingleQuestionQuery();
    const [singleQuestionDetails, setSingleQuestionDetails] = useState(null);
    const [questionCatTitle, setQuestionCatTitle] = useState("");
    const [parentId, setParentId] = useState(null);
    const [mockDetail,setMockDetail] = useState(null);
    // const [questionCatDesc,setQuestionCatDesc] = useState("");
    // console.log("mock_id::",mock_id)
    const [apiCall, setApiCall] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGettingNext, setIsGettingNext] = useState(false);
    const [isGettingPrevious, setIsGettingPrevious] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const getDateTimeForGetAll = useMemo(() => getCurrentTimeDate(new Date()), []);

    const [shouldFetch, setShouldFetch] = useState(false);
    
    useEffect(() => {
      // Trigger the API call only once by setting shouldFetch to true
      setShouldFetch(true);
    }, []);
    const { data: mockData, error: mockError } = useGetAllQuesionOfMockQuery({id: mock_id ?? practice_id, current_date: getDateTimeForGetAll}, { skip: !isMock || !shouldFetch });
    const { data, error } = useGetAllQuestionsOfCatQuery(questionnaire_Id, { skip: isMock });
    // console.log("question_Id::",question_Id)
    const [questionAnswer] = useQuestionAnswerMutation();
    const [markFlag] = useMarkFlagMutation();
    const [resetMock] = useResetMockMutation();
    const [startMockTimer] = useStartMockTimerMutation();
    const [finsihMockTimer] = useFinishMockTimerMutation();
    const [mockTimeChecker] = useMockTimeCheckerMutation();
    
    const [removedQuestion, setRemovedQuestion] = useState(false);
    

    const handleGetSingleQuestion = async () => {
        try {
            if (activeQuestionIndex) {
                setApiCall(true);
                const { data, error } = await getSingleQuestion(activeQuestionIndex);
                if (data) {
                    // console.log("getSingleQuestion::data::",data);
                    if (data?.status) {
                        setSingleQuestionDetails(data?.question);
                        setSelectedValue('');
                        setSelected(false);

                        setFlagMarked(data?.question?.is_flagged_count === 1 ? true : false);
                        if (data?.question?.answer) {
                            setSelectedValue(data?.question?.answer?.option_id)
                        }
                        setRemovedQuestion(false);
                    }
                    if (!data?.status) {
                        // console.log(data?.status)
                        setRemovedQuestion(true);
                    }
                    setApiCall(false);
                    setIsGettingPrevious(false);
                    setIsGettingNext(false);
                }
                if (error) {
                    console.log("error::", error);
                }
            }

        } catch (err) {
            console.log("err::", err);
        }
    }

    useEffect(() => {
        if (data) {
            // console.log("data::",data);
            if (data?.status) {
                setParentId(data?.category?.id);
                setQuestionsCount(data?.questions)
                setActiveQuestionIndex(activeQuestionIndex ? activeQuestionIndex : data?.questions[0]?.slug);
                setQuestionCatTitle(data?.category?.name);
            }
            if (!data?.status) {
                console.log(data?.status)
                errorMessage(data?.message)
            }
            setApiCall(false);
        }
        if (error) {
            console.log("error::", error)
        }
    }, [data, error])

    useEffect(() => {
        if (mockData) {
            if (mockData?.status) {
                // console.log("mockData::",mockData)
                setMockDetail(mockData?.mock);
                // setTimeLeft(mockData?.mock?.duration);
                setParentId(mockData?.mock?.id)
                setQuestionsCount(mockData?.questions)
                setActiveQuestionIndex(activeQuestionIndex ? activeQuestionIndex : mockData?.questions[0]?.slug);
                setQuestionCatTitle(mockData?.mock?.name);
            }
            if (!mockData?.status) {
                // console.log(mockData?.status)
                errorMessage(mockData?.message);
            }
            setApiCall(false);
            setIsGettingPrevious(false);
            setIsGettingNext(false);
        }
        if (mockError) {
            console.log("mockError::", mockError);
            errorMessage(error?.data?.message);
            setApiCall(false);
            setIsGettingPrevious(false);
            setIsGettingNext(false);
        }
    }, [mockData, mockError])

    // useEffect(() => {
    //     handleGetSingleQuestion()
    // }, [activeQuestionIndex])
    const { data: getSingleQuestionData, error: getSingleQuestionError } = useGetSingleQuestionQuery({id:question_Id,mock_id:mock_id??practice_id??questionnaire_Id},{skip:!shouldFetch});

    useEffect(() => {
        if (getSingleQuestionData) {
            if (getSingleQuestionData.status) {
                // console.log("getSingleQuestionData::",getSingleQuestionData);
                setSingleQuestionDetails(getSingleQuestionData?.question);
                setSelectedValue('');
                setSelected(false);
                setActiveQuestionIndex(question_Id);
                setFlagMarked(getSingleQuestionData?.question?.is_flagged_count === 1 ? true : false);
                if (getSingleQuestionData?.question?.answer) {
                    setSelectedValue(getSingleQuestionData?.question?.answer?.option_id)
                }
                setRemovedQuestion(false);
            }
            if (!getSingleQuestionData.status) {
                setRemovedQuestion(true);
            }
            setApiCall(false);
            setIsGettingPrevious(false);
            setIsGettingNext(false);
        }
        if (getSingleQuestionError) {
            // console.log("getSingleQuestionError::", getSingleQuestionError);
            errorMessage(getSingleQuestionError?.data?.message);
            setApiCall(false);
            setIsGettingPrevious(false);
            setIsGettingNext(false);
        }
    }, [getSingleQuestionData, getSingleQuestionError])

    const [ allComments,setAllComments] = useState([]);
    const {data: allCommentsData, error: allCommentsError} = useGetAllCommentsQuery({question_id:singleQuestionDetails?.id},{
        skip: !shouldFetch
    });
    const [updateComment] = useUpdateCommentMutation();
    const [likeDislikeComment] = useLikeDislikeCommentMutation();
    const [addComment] =  useAddCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

    useEffect(() => {
        if (allCommentsData) {
            if (allCommentsData?.status) {
                setAllComments(allCommentsData?.comments);
            }
            if (!allCommentsData?.status) {
                setAllComments([]);
            }
        }
        if (allCommentsError) {
            errorMessage(error?.data?.message);
        }
    
    }, [allCommentsData,allCommentsError]);



    const handleCloseLabValuesModal = useCallback(() => {
        setLabValuesModal(false)
    }, [])


    const handleChange = (event) => {
        setSelectedValue(JSON.parse(event.target.value));
        setSelected(true);
        // console.log("handleChange::",event.target.value)
    };


    const handleFlagMark = async () => {
        try {
            // console.log("single::",singleQuestionDetails?.id)
            setApiCall(true);
            const { data, error } = await markFlag({ question_id: singleQuestionDetails?.id, type: !flagMarked ? "add" : "remove" });
            if (data) {
                // console.log("data::",data);
                if (data?.status) {
                    setFlagMarked(!flagMarked);
                    // console.log(data?.status)
                    successMessage(data?.message);
                }
                if (!data?.status) {
                    console.log(data?.status)
                    errorMessage(data?.message)
                }
                setApiCall(false);
            }
            if (error) {
                console.log("error::", error)
            }
        } catch (err) {
            console.log("err::", err);
        }
    }

    const handleChangeQuestion = (questionNumber) => {
        setActiveQuestionIndex(questionNumber);
        navigate(getNewUrl(questionNumber));
    }
    const getNewUrl = (questionNumber) => {
        if (type === "category") return `/${questionnaire_Id}/${questionNumber}`;
        if (type === "mock") return `/mock/${mock_id}/${questionNumber}`;
        if (type === "practice") return `/practice/${practice_id}/${questionNumber}`;
    };

    const handleSubmitAnswer = async (e) => {
        try {
            e.preventDefault();
            setApiCall(true);
            setIsSubmitting(true);
            const body = {
                question_id: singleQuestionDetails?.id,
                option_id: selectedValue,
                parent_id: parentId,
                type: questionnaire_Id ? "category" : mock_id ? "big-mocks" : "practice-mocks"
            }

            const { data, error } = await questionAnswer(body);
            if (data) {
                // console.log("data::",data)
                if (data?.status) {
                    setSingleQuestionDetails(data?.question);
                    setSelectedValue('');
                    setSelected(false);
                    setFlagMarked(data?.question?.is_flagged_count === 1 ? true : false)
                    if (data?.question?.answer) {
                        setSelectedValue(data?.question?.answer?.option_id)
                    }
                }
                setApiCall(false);
                setIsSubmitting(false);
            }
            if (error) {
                console.log("error:", error);
                setIsSubmitting(false);
            }

        } catch (err) {
            console.log("err::", err);
        }
    }
    const [comment,setComment] = useState("");
    const [commentPostLoading,setCommentPostLoading] = useState(false);
    const handleSubmitComment = async (e) => {
        try {
            e.preventDefault();
            setCommentPostLoading(true)
            // console.log("Comment Submitted");
            // console.log("singleQuestionDetails::",singleQuestionDetails)
            const body = {
                question_id : singleQuestionDetails?.id,
                content : comment,
            }
            // console.log("body::",body)
            const {data, error} = await addComment(body);
            if (data) {
                if (data?.status) {
                    successMessage(data?.message);
                    setComment("");
                }
                if (!data?.status) {
                    errorMessage(data?.message);
                }
                setCommentPostLoading(false);
            }
            if (error) {
                console.log(error);
                errorMessage(error?.data?.message);
            }
        } catch (err) {
            console.log("err:",err);
        }
    }

    const [updatingComment,setUpdatingComment] = useState(false);

    const handleUpdateComment = async(commentBody)=>{
        try {
            setUpdatingComment(true);

            const {data, error} = await updateComment(commentBody);

            if (data) {
                if (data?.status) {
                    successMessage(data?.message);
                }
                if (!data?.status) {
                    errorMessage(data?.message);
                }
                setUpdatingComment(false);
            }
            if (error) {
                errorMessage(error?.data?.message);
                setUpdatingComment(false);
            }
        } catch (err) {
            console.log("err::",err);
        }
    }

    const handleReactOnComment = async(reactBody)=>{
        try {
            const body = {...reactBody}
            const {data, error} = await likeDislikeComment(body);
            if (data) {
                if (data.status) {
                    // console.log("data::",data);
                    successMessage(data.message);   
                }
                if (!data.status) {
                    // console.log("data::",data);
                    errorMessage(data.message);   
                }
            }
            if (error) {
                console.log("error::",error);
                errorMessage(error?.data?.message)
            }
        } catch (err) {
            console.log("err::",err);
        }
    }

    const handleDeleteComment = async(id)=>{
        try {
            const { data, error} = await deleteComment(id);
            if (data) {
                if (data?.status) {
                    successMessage(data?.message);
                }
                if (!data?.status) {
                    errorMessage(data?.message);
                }
            }
            if (error) {
                console.log("error:",error);
                errorMessage(error?.data?.message);
            }
        } catch (err) {
            console.log("err::",err);
        }
    }



    const handleNextQuestion = () => {
        const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
        if (currentIndex < questionsCount.length - 1) {
            setIsGettingNext(true);
            handleChangeQuestion(questionsCount[currentIndex + 1].slug);
        }
    };

    const handlePreviousQuestion = () => {
        const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
        if (currentIndex > 0) {
            setIsGettingPrevious(true);
            handleChangeQuestion(questionsCount[currentIndex - 1].slug);
        }
    };
    const [confirmResetMockModal, setConfirmResetMockModal] = useState(false);

    const handleConfirmPurchase = () => {
        setConfirmResetMockModal(true);
        // setPurchaseId(purchaseWebinar);
    }



    const handleResetMock = async () => {
        try {
            const body = { slug: mock_id ?? practice_id }
            const { data, error } = await resetMock(body);
            if (data) {
                if (data?.status) {
                    successMessage(data?.message);
                }
                if (!data?.status) {
                    errorMessage(data?.message);
                }
            }
            if (error) {
                errorMessage(error?.data?.message);
                console.log("error", error);
            }
        } catch (err) {
            console.log("err::", err);
        }
    }

    const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
// console.log("mockDetail::",mockDetail)

   
const [isTimerCalled,setIsTimerCalled] = useState(false); 
const [isConnectionLost, setIsConnectionLost] = useState(false);
const [mockTimeCheckerInterval, setMockTimeCheckerInterval] = useState(null);

    // Timer logic


    // useEffect(() => {
    //     let timerId;
    //     if (isRunning && timeLeft > 0) {
    //         timerId = setInterval(() => {
    //             setTimeLeft((prevTime) => prevTime - 1);
    //         }, 1000);
    //     } else {
    //         clearInterval(timerId);
    //     }
    //     return () => clearInterval(timerId);
    // }, [isRunning, timeLeft]);
    
    // useEffect(() => {
    //     const startTimer = async () => {
    //         try {
    //             const { data, error } = await startMockTimer({ mock_id: mockDetail?.id });
    //             if (data && data?.status) {
    //                 setIsRunning(true);
    //                 setIsTimerCalled(true);
    //             }
    //             if (error) {
    //                 console.log("Error:", error);
    //             }
    //         } catch (err) {
    //             console.log("Error::", err);
    //         }
    //     };
    
    //     if ((type === "mock" || type === "practice") && !isRunning && mockDetail?.id && !isTimerCalled) {
    //         startTimer();
    //     }
    // }, [mockDetail, isRunning, type, isTimerCalled]);
    
    // // Handle API call every 5 seconds to check connection status
    // useEffect(() => {
    //     const handleMockTimeChecker = async () => {
    //         try {
    //             const { data, error } = await mockTimeChecker({ mock_id: mockDetail?.id });
    //             if (data) {
    //                 setIsConnectionLost(false);
    //                 if (!isRunning) setIsRunning(true); // Resume timer if it was stopped
    //             }
    //             if (error) {
    //                 setIsConnectionLost(true);
    //                 setIsRunning(false); // Pause the timer on error
    //             }
    //         } catch (err) {
    //             console.log("Error::", err);
    //             setIsConnectionLost(true);
    //             setIsRunning(false); // Pause timer when no connection
    //         }
    //     };
    
    //     // Start API checking interval only if timer is running
    //     if (isRunning && !mockTimeCheckerInterval) {
    //         const intervalId = setInterval(handleMockTimeChecker, 5000);
    //         setMockTimeCheckerInterval(intervalId);
    //     }
    
    //     // Clear interval on pause or when unmounted
    //     return () => {
    //         if (mockTimeCheckerInterval) clearInterval(mockTimeCheckerInterval);
    //     };
    // }, [isRunning, mockDetail?.id, mockTimeCheckerInterval]);
// ---------------------------------------------------------------

// useEffect(() => {
//     let timerId;
//     if (isRunning && timeLeft > 0) {
//         timerId = setInterval(() => {
//             setTimeLeft(prevTime => prevTime - 1);
//         }, 1000);
//     }
//     return () => clearInterval(timerId);
// }, [isRunning, timeLeft]);

//     useEffect(() => {
//         const startTimer = async () => {
//             try {
//                 const { data, error } = await startMockTimer({ mock_id: mockDetail?.id });
//                 if (data && data?.status) {
//                     setIsRunning(true);
//                     setIsTimerCalled(true);
//                 }
//                 if (error) {
//                     console.log("Error:", error);
//                 }
//             } catch (err) {
//                 console.log("Error::", err);
//             }
//         };

//         if (type === "mock" && !isRunning && mockDetail?.id && !isTimerCalled) {
//             startTimer();
//         }
//     }, [mockDetail, isRunning, type, isTimerCalled]);
// ============================================================
// Handle API call every 10 seconds to check connection status
// useEffect(() => {
//   const handleMockTimeChecker = async () => {
//     try {
//       const { data, error } = await mockTimeChecker({mock_id:mockDetail?.id}); // API call
//       if (data) {
//         setIsConnectionLost(false);
//         if (!isRunning) setIsRunning(true); // Resume timer if it was stopped
//       }
//       if (error) {
//         setIsConnectionLost(true);
//         setIsRunning(false); // Pause the timer on error
//       }
//     } catch (err) {
//       console.log("Error::", err);
//       setIsConnectionLost(true);
//       setIsRunning(false); // Pause timer when no connection
//     }
//   };

//   console.log("mockDetail?.id::",mockDetail?.id)
//   console.log("mockTimeCheckerInterval::",mockTimeCheckerInterval)
//   if (isRunning && mockTimeCheckerInterval && mockDetail?.id) {
//     // Set interval only if the timer is running and no interval is set
//     const intervalId = setInterval(handleMockTimeChecker, 5000);
//     setMockTimeCheckerInterval(intervalId);
//   }

//   return () => {
//     if (mockTimeCheckerInterval) clearInterval(mockTimeCheckerInterval); // Cleanup on unmount or pause
//   };
// }, [isRunning, mockTimeCheckerInterval, mockDetail?.id]);

    // const handleStartTimer = () => {
    //     if (!isConnectionLost) setIsRunning(true); // Only start if there's no connection issue
    // };
    // const handleStartTimer = () => {
    //     if (!isConnectionLost) {
    //         setIsRunning(true); // Start both timer and API calls
    //     }
    // };
  
    // const handleStartTimer = async() => {
    //     try {
    //         const {data, error} = await startMockTimer({mock_id:mockDetail?.id});
    //         if (data) {
    //             if (data?.status) {
    //                 console.log(data);
    //             }
    //         }
    //         if (error) {
    //             console.log("err:",error);
    //         }
    //     } catch (err) {
    //         console.log("err::",err);
    //     }
    //     setIsRunning(true);
     
    // };
  
    // const handlePauseTimer = () => {
    //   setIsRunning(false);
    // };

    // const handlePauseTimer = () => {
    //     setIsRunning(false); // Pause both timer and API calls
    //     if (mockTimeCheckerInterval) {
    //         // console.log("mockTimeCheckerInterval::",mockTimeCheckerInterval)
    //         clearInterval(mockTimeCheckerInterval); // Stop API calls when paused
    //         setMockTimeCheckerInterval(null);
    //     }
    // };
  
    // const handleFinishSave = async() => {
    //     try {

    //         const { data, error } = await finsihMockTimer({mock_id: mockDetail?.id});
    //         if (data) {
    //             if (data?.status) {
    //                 successMessage(data?.message);
    //                 navigate(`/big-mocks`);
    //             }
    //             if (!data?.status) {
    //                 errorMessage(data?.message);
    //             }
    //         }
    //         if (error) {
    //             errorMessage(error?.data?.message);
    //         }
            
    //     } catch (err) {
    //         console.log("err::",err);
    //     }
        
    //     setIsRunning(false);
    //     if (mockTimeCheckerInterval) {
    //       clearInterval(mockTimeCheckerInterval); // Clear interval on finish
    //       setMockTimeCheckerInterval(null);
    //     }
    //     // Additional logic to handle finish save
    //   };

    

    // useEffect(() => {
    //     const handleMockTimeChecker = async () => {
    //       try {
    //         const { data, error } = await mockTimeChecker({mock_id:mockDetail?.id}); // API call
    //         if (data) {
    //           setIsConnectionLost(false);
    //           if (!isRunning) setIsRunning(true); // Resume timer if it was stopped
    //         }
    //         if (error) {
    //           setIsConnectionLost(true);
    //           setIsRunning(false); // Pause the timer on error
    //         }
    //       } catch (err) {
    //         console.log("Error::", err);
    //         setIsConnectionLost(true);
    //         setIsRunning(false); // Pause timer when no connection
    //       }
    //     };
    
    //     // Call the function immediately and then every 10 seconds
    //     if (mockDetail?.id) {
    //         handleMockTimeChecker();
        
    //     }
    //     const intervalId = setInterval(handleMockTimeChecker, 10000);
    
    //     return () => clearInterval(intervalId); // Cleanup on component unmount
    //   }, [isRunning, mockDetail?.id]);


      const handleMockTimeChecker = async()=>{
        try {
            const {data,error} = mockTimeChecker();
            if (data) {
                console.log("data::",data);
            }
            if (error) {
                console.log("error::",error);
            }
        } catch (err) {
            console.log("err::",err);
        }
    }

//====================================----------------________________________-------------===========================


// const [isTimerCalled, setIsTimerCalled] = useState(false);
// const [isConnectionLost, setIsConnectionLost] = useState(false);
// const [mockTimeCheckerInterval, setMockTimeCheckerInterval] = useState(null);
const timeLeftRef = useRef(timeLeft);  // Create a ref to store the current timeLeft value

useEffect(() => {
    timeLeftRef.current = timeLeft;  // Keep ref updated with the latest timeLeft value
}, [timeLeft]);
// Timer logic
useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
        timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
    } else {
        clearInterval(timerId);
        // handleFinishSave();  // Clear interval when paused or finished
    }
    return () => clearInterval(timerId);  // Cleanup interval on component unmount
}, [isRunning, timeLeft]);


function calculateRemainingDuration(start_at, currentDateTime, duration) {
    // Convert date-time strings to Date objects
    const startDate = new Date(start_at.replace(' ', 'T')); // Convert '2024-09-14 21:27:25' to Date
    const currentDate = new Date(currentDateTime.replace(' ', 'T')); // Convert '2024-09-14 21:27:25' to Date
  
    // Calculate the difference in milliseconds
    const diffInMs = currentDate - startDate;
  
    // Convert milliseconds to seconds
    const diffInSeconds = Math.floor(diffInMs / 1000);
  
    // Calculate the remaining time by subtracting the difference from duration
    const remainingTime = duration - diffInSeconds;
  
    return remainingTime >= 0 ? remainingTime : 0; // Ensure no negative values
  }

// Start timer when `mock` type and not running yet
useEffect(() => {
    const startTimer = async () => {
        try {
            const { data, error } = await startMockTimer({ mock_id: mockDetail?.id,current_date: getCurrentTimeDate(new Date())});
            if (data && data?.status) {
                setIsRunning(true);
                setIsTimerCalled(true);
                // console.log("data:",data)
                // console.log("current_date",new Date())
                const remainingDuration = type==='mock'?calculateRemainingDuration(data?.mock?.start_at,getCurrentTimeDate(new Date()),data?.mock?.duration):data?.mock?.duration;
                // console.log(`Remaining time: ${remainingDuration} seconds`,remainingDuration);

                // setTimeLeft(data?.mock?.duration);
                setTimeLeft(remainingDuration);
            }
            if (error) {
                console.log("Error:", error);
            }
        } catch (err) {
            console.log("Error::", err);
        }
    };

    if ((type === "mock" || type === "practice") && !isRunning && mockDetail?.id && !isTimerCalled) {
        startTimer();
    }
}, [mockDetail, isRunning, type, isTimerCalled,timeLeft]);

// console.log("timeLeft::",timeLeft)
// Handle API calls every 5 seconds to check connection status
useEffect(() => {
    const handleMockTimeChecker = async () => {
        if (!isRunning || (type === "practice" && !isRunning)) return; // Only run the checker if the timer is running
        // console.log("timeLeft::",timeLeftRef.current);
        try {
            const { data, error } = await mockTimeChecker({ mock_id: mockDetail?.id,remaining_duration: timeLeftRef.current,current_date: getCurrentTimeDate(new Date()) });
            if (data) {
                if (data?.status) {
                    setIsConnectionLost(false);
                    if (!isRunning) setIsRunning(true); // Resume timer if it was stopped
                }
                if (!data?.status) {
                    navigate(-1);
                }
            }
            if (error) {
                setIsConnectionLost(true);
                setIsRunning(false); // Pause the timer on error
            }
        } catch (err) {
            console.log("Error::", err);
            setIsConnectionLost(true);
            setIsRunning(false); // Pause timer when no connection
        }
    };

    // Start interval only if timer is running and type is not "practice" or is running in "practice"
    if (isRunning && !mockTimeCheckerInterval && ( type === "practice")) {
        const intervalId = setInterval(handleMockTimeChecker, 5000);
        setMockTimeCheckerInterval(intervalId);
    }

    return () => {
        if (mockTimeCheckerInterval) {
            clearInterval(mockTimeCheckerInterval);  // Clear the interval when timer pauses
            setMockTimeCheckerInterval(null);
        }
    };
}, [isRunning, mockDetail?.id, mockTimeCheckerInterval, type]);

// Handle Start, Pause, and Finish for the timer
const handleStartTimer = () => {
    if (!isConnectionLost) {
        setIsRunning(true); // Start both the timer and the API checker
    }
};

const handlePauseTimer = async() => {
    if (type === "practice") {
        setIsRunning(false); // Pause both the timer and the API checker only for "practice"
        if (mockTimeCheckerInterval) {
            clearInterval(mockTimeCheckerInterval); // Stop API calls when paused
            setMockTimeCheckerInterval(null);
        }
        try {
            const { data, error } = await mockTimeChecker({ mock_id: mockDetail?.id,remaining_duration:timeLeftRef.current,current_date: getCurrentTimeDate(new Date()) });
            if (data) {
                setIsConnectionLost(false);
                if (!isRunning) setIsRunning(true); // Resume timer if it was stopped
            }
            if (error) {
                setIsConnectionLost(true);
                setIsRunning(false); // Pause the timer on error
            }
        } catch (err) {
            console.log("Error::", err);
            setIsConnectionLost(true);
            setIsRunning(false); // Pause timer when no connection
        }
    }
};

const handleFinishSave = async () => {
    try {
        const { data, error } = await finsihMockTimer({ mock_id: mockDetail?.id,current_date: getCurrentTimeDate(new Date()) });
        if (data) {
            if (data?.status) {
                successMessage(data?.message);
                // console.log("data::",data)
                if (type === "mock") {
                    // console.log("big-mocks")
                    navigate(`/big-mocks`);
                }
                if (type === "practice") {
                    // console.log("practice")
                    navigate(`/practice-mocks`);
                }
            } else {
                errorMessage(data?.message);
            }
        }
        if (error) {
            errorMessage(error?.data?.message);
        }
    } catch (err) {
        console.log("err::", err);
    }

    // Stop the timer and clear the API interval
    setIsRunning(false);
    if (mockTimeCheckerInterval) {
        clearInterval(mockTimeCheckerInterval);
        setMockTimeCheckerInterval(null);
    }
};

useEffect(() => {
    // console.log(timeLeft,"beforeIff",isRunning)
    if (timeLeft===0 && isRunning) {
        // console.log("InIFf::")
        handleFinishSave();
    }
}, [timeLeft,isRunning])





    return (
        <>
            <div className="container-fluid">
                <div className="questionnaire-wrapper">
                    <div className="questionnaire-inner-wrapper">

                        <div className="col-md-7 col-lg-7 col-xxl-8 col-12 pe-lg-2 pe-0">
                            <div className="question-notes-wrapper">
                                <div className="question-container">
                                    <form onSubmit={handleSubmitAnswer}>


                                        <div className="question-header">
                                            {!removedQuestion &&
                                                <>
                                                    <h2 className="questionnaire-title">
                                                        {questionCatTitle}
                                                        {/* Anatomy <span>(AN 3331)</span> */}
                                                    </h2>
                                                    <div className="flag-action">
                                                        <button type="button" className={flagMarked ? 'flag-marked' : ''} onClick={handleFlagMark} disabled={apiCall}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                                <path id="flag" d="M10,2A2,2,0,0,0,8,0H0V16H1.333V8.667H6.667v.667a2,2,0,0,0,2,2H16V2.667H10ZM1.333,1.333H8A.667.667,0,0,1,8.667,2V7.333H1.333ZM14.667,4v6h-6A.667.667,0,0,1,8,9.333V8.667h2V4Z" />
                                                            </svg>
                                                            <span>{flagMarked ? 'Unmark' : 'Mark'} Flag</span>
                                                        </button>
                                                    </div>

                                                </>

                                            }
                                        </div>

                                        <div className="question-body">
                                            {!removedQuestion &&
                                                <QuestionnaireQuestion selectedValue={selectedValue} handleChange={handleChange} questionDetails={singleQuestionDetails} isTimmerRunning={isRunning} type={type} />
                                            }
                                            {removedQuestion &&
                                                <div className="removed-question">
                                                    <p>This question has been removed.</p>
                                                </div>

                                            }
                                            <div className="questionnaire-form-actions-btn-wrapper">
                                                {!singleQuestionDetails?.answer && !removedQuestion &&
                                                    <div className="col-12 py-1">
                                                        <button type="submit" className="btn btn-primary" disabled={!selected || apiCall || isSubmitting || (!isRunning && (type==="practice" || type==="mock"))}>
                                                            {isSubmitting ? <ButtonLoader /> : 'Submit Answer'}
                                                        </button>
                                                    </div>
                                                }
                                                <div className="col-6 pe-1 pt-3">
                                                    <button type="button" className="btn btn-secondary" onClick={handlePreviousQuestion}
                                                        disabled={currentIndex === 0 || apiCall || (!isRunning && (type==="practice" || type==="mock"))}>
                                                        {isGettingPrevious ? <ButtonLoader /> : 'Previous Question'}
                                                    </button>
                                                </div>
                                                <div className="col-6 ps-1 pt-3">
                                                    <button type="button" className={`btn ${isGettingNext ? 'btn-secondary' : 'btn-primary'}`} onClick={handleNextQuestion}
                                                        disabled={currentIndex === questionsCount.length - 1 || apiCall || (!isRunning && (type==="practice" || type==="mock"))}>
                                                        {isGettingNext ? <ButtonLoader /> : 'Next Question'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                {singleQuestionDetails?.description && singleQuestionDetails?.answer &&
                                    <div className="notes-container">
                                        <div className="notes-inner-container">
                                            <div className="notes-description">
                                                {/* <p>
                                                The term here would be &quot;Saturday night palsy&quot;. It can result from resting the medial side of the arm against an edge of the operating table for a prolonged period when the patient is anaesthetised. This results in compression of the radial nerve. Ideally, the anaesthetist should realise this and move the patient&aps;s hand back.<br/><br/> Clear hints in this question are the &quot;wrist drop&quot; and sensory loss of the dorsal aspect of 1st and 2nd metacarpals.
                                                </p>
                                                <i>The term &quot;Saturday nigh palsy&quot; probably originated from patients having their radial nerves compressed by leaning the medial aspect of their arm on the edge of the chair after being intoxicated from a Saturday night drinking session.</i> */}
                                                <Markup markup={singleQuestionDetails?.description} />
                                            </div>

                                            {/* <div className="notes-actions pt-3">
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Radial Nerve</button>
                                                </div>
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Ulnar Nerve, Radial Nerve Sensory Distribution</button>
                                                </div>
                                                <div className="col-12 py-1">
                                                    <button type="button" className="btn btn-primary">Summary of Common Nerve Injuries</button>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xxl-4 col-12 ps-1">
                            <div className="question-index-comments-wrapper">
                                <div className="question-index-comments-inner-wrapper">
                                    {/* {(type === "practice" || type === "mock") &&
                                        <div className="reset-questionnaire-container">
                                            <button onClick={handleConfirmPurchase}>Reset Mock</button>
                                        </div>
                                    } */}
                                    {(type === "practice" || type === "mock") && 
                                        <Timer
                                            handleStart={handleStartTimer}
                                            handlePause={handlePauseTimer}
                                            handleFinishSave={handleFinishSave}
                                            timeLeft={timeLeft}
                                            isRunning={isRunning}
                                            type={type}
                                        />

                                    }

                                    <div className="question-index-container">

                                        {/* {questionNumbers.map(number=>(<QuestionNumberButton key={number} handleChangeQuestion={handleChangeQuestion} number={number} activeQuestionIndex={activeQuestionIndex}/>) )} */}
                                        {
                                            questionsCount?.map((questCountDetails, key) =>

                                                <QuestionNumberButton key={questCountDetails?.id}
                                                    handleChangeQuestion={handleChangeQuestion}
                                                    number={key + 1}
                                                    activeQuestionIndex={activeQuestionIndex}
                                                    questCountDetails={questCountDetails}
                                                    apiCall={apiCall}
                                                    isTimmerRunning={isRunning}
                                                    type={type}
                                                />)
                                        }
                                    </div>
                                    {!removedQuestion &&
                                        <div className="col-12 py-4">
                                            <button type="button" className="btn btn-primary" onClick={() => setLabValuesModal(true)}>Lab Values</button>
                                        </div>
                                    }
                                    {!removedQuestion && singleQuestionDetails?.answer &&
                                        <div className="question-comment-container">
                                            <div className="question-comment-inner-container">
                                                <QuestionAllComments 
                                                    handleReactOnComment={handleReactOnComment} 
                                                    allComments={allComments} 
                                                    handleDeleteComment={handleDeleteComment} 
                                                    updatingComment={updatingComment} 
                                                    handleUpdateComment={handleUpdateComment}
                                                />

                                                <div className="post-comment">
                                                    <form action="" onSubmit={handleSubmitComment}>
                                                        <div className="col-12">
                                                            <textarea name="comment" required id="comment" rows="5" onChange={(e)=>setComment(e.target.value)} value={comment} placeholder={`Write a comment as ${userAuth?.user?.name} ${userAuth?.user?.last_name}`}></textarea>
                                                        </div>
                                                        <div className="col-12 py-2">
                                                            <button type="submit" className="btn btn-primary" disabled={commentPostLoading || !comment?.trim()}> 
                                                                {commentPostLoading? <ButtonLoader/>:'Post Comment'}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {labValuesModal &&
                <ReactPortal wrapperId="labvalues_external_modal_container">
                    <LabValuesInfo closeBtn={closeBtn} handleModal={handleCloseLabValuesModal} />
                </ReactPortal>
            }
            {confirmResetMockModal &&
                <ReactPortal wrapperId="external_modal_container">
                    <section className='detail-modal'>
                        <div className='close-btn-container'>
                            <img src={closeBtn} alt='close' onClick={() => setConfirmResetMockModal(false)} />
                        </div>
                        <div className='title-wrapper'>
                            <h2 className='title'>Reset Mock</h2>
                            {/* <div className='date-time-wrapper'><span>18th May 2024 (9:00 AM to 11:00 AM UK time)</span></div> */}
                        </div>
                        <div className='description'>
                            <p className="text-balance">Are you sure you want to reset this mock exam ?</p>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-primary mb-2" onClick={() => handleResetMock()}>Yes</button>
                            <button className="btn btn-secondary" onClick={() => setConfirmResetMockModal(false)}>No</button>
                        </div>
                    </section>
                </ReactPortal>
            }
        </>
    )
}

// const AuthenticatedDashboard = withAuth(Questionnaire);
// const LayoutAuthenticatedDashboard = withLayout(AuthenticatedDashboard);

// export default LayoutAuthenticatedDashboard;




export default Questionnaire

{/* <div className="questionnaire-question-container">
                                                <p>A 26 year old man presents to the Emergency Department complaining of difficulty in raising his arm above his head following a minor traffic accident a week ago, where he injured his left shoulder. On examination, there is noticeable winging of the scapula on the affected side when he presses against the wall with his hands. There is also weakness in forward flexion of the arm at the shoulder. Sensory examination is normal. Which nerve is most likely injured?</p>
                                                <div className="question-single-option">
                                    
                                                    <div className="question-radio-group">
                                                        <label className={`radio-option ${selectedValue === 'radial' ? 'checked' : ''}`} htmlFor="radial">
                                                            <input type="radio" className="col-1" id="radial" name="nerve" value="radial" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>A. Radial nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'median' ? 'checked' : ''}`} htmlFor="median">
                                                            <input type="radio" className="col-1" id="median" name="nerve" value="median" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>B. Median nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'ulnar' ? 'checked' : ''}`} htmlFor="ulnar">
                                                            <input type="radio" className="col-1" id="ulnar" name="nerve" value="ulnar" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>C. Ulnar nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'axillary' ? 'checked' : ''}`} htmlFor="axillary">
                                                            <input type="radio" className="col-1" id="axillary" name="nerve" value="axillary" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>D. Axillary nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>

                                                        <label className={`radio-option ${selectedValue === 'long-thoracic' ? 'checked' : ''}`} htmlFor="long-thoracic">
                                                            <input type="radio" className="col-1" id="long-thoracic" name="nerve" value="long-thoracic" onChange={handleChange} />
                                                            <div className="question-label-result col-11">
                                                                <p>E. Long thoracic nerve</p>
                                                                <div className="result-percentage"><span></span></div>
                                                            </div>
                                                            <div className="submitted-status-wrapper"><div className="submitted-status-inner-wrapper"></div></div>
                                                        </label>
                                                    </div>
                                                </div>

                                            </div> */}


                                                // const handleNextQuestion = () => {
    //     setIsGettingNext(true);
    //     const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
    //     if (currentIndex < questionsCount.length - 1) {
    //         setActiveQuestionIndex(questionsCount[currentIndex + 1].slug);
    //     }
    // };

    // const handlePreviousQuestion = () => {
    //     setIsGettingPrevious(true);
    //     const currentIndex = questionsCount.findIndex(q => q.slug === activeQuestionIndex);
    //     if (currentIndex > 0) {
    //         setActiveQuestionIndex(questionsCount[currentIndex - 1].slug);
    //     }
    // };