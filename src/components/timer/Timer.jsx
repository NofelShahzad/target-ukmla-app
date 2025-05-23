// import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Timer.css'
function Timer({ 
    handlePause,
    handleFinishSave,handleStart,
    timeLeft,isRunning,
    type,
    isStarted,
 }) {
    // console.log("timeLeft::>",timeLeft)
    // const [timeLeft, setTimeLeft] = useState(initialTime);
    // const [isRunning, setIsRunning] = useState(false);
  
    // useEffect(() => {
    //   let timerId;
  
    //   if (isRunning && timeLeft > 0) {
    //     timerId = setInterval(() => {
    //       setTimeLeft(prevTime => prevTime - 1);
    //     }, 1000);
    //   }
  
    //   // Clear interval when the component unmounts or when the timer is paused/stopped
    //   return () => clearInterval(timerId);
    // }, [isRunning, timeLeft]);
  
    // const handleStart = () => {
    //   setIsRunning(true);
    // };
  
    // const handlePause = () => {
    //   setIsRunning(false);
    // };
  
    // const handleFinishSave = () => {
    //   setIsRunning(false);
    //   setTimeLeft(initialTime);
    // };

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
    
        // Format the time with leading zeros (e.g., 01:05:09)
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };

      const navigate =  useNavigate();

      const handleSaveExit = ()=>{
        if (type==="mock") {
          navigate("/big-mocks")
        }
        if (type==="practice") {
          navigate("/practice-mocks")
          console.log("practice-mocks:::")
          // navigate(-1);
        }
        if (type==="category") {
          navigate("/questions-bank")
        }
      }
  return (
    <div className="timer-wrapper">
    <h2 className='text-center'>Time Left: {formatTime(timeLeft)}s</h2>
    <div className="timer-action">
      {!isStarted && type !== "practice" &&
        <button className="btn btn-primary z-100" onClick={handleStart} disabled={isRunning || timeLeft === 0}>Start</button>
      }
       {type !== "mock" && (isStarted || isRunning) &&
         <button className="btn btn-primary" onClick={handleSaveExit}>Save & Exit</button>
       }
        {isStarted && !isRunning &&
          <button className="btn btn-primary z-100" onClick={handleStart} disabled={isRunning || timeLeft === 0}>Resume</button>
        }
       
        {
        type === "practice" &&
         isRunning &&
            <button className="btn btn-primary" onClick={handlePause} disabled={!isRunning}>Pause</button>
        }
        <button className="btn btn-primary" onClick={handleFinishSave}>Finish Test</button>
    </div>
  </div>
  )
}

export default Timer