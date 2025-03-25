// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { blockAccount, unblockAccount } from "../../redux/features/screenshotSlice/screenshotSlice";
// import './ScreenshotProtection.css';

// const ScreenshotProtection = () => {
//     const dispatch = useDispatch();
//     const { isBlocked, blockUntil } = useSelector((state) => state.screenshot);
//     const [timeLeft, setTimeLeft] = useState(0);

//     useEffect(() => {
//         // Check if already blocked and start countdown
//         if (blockUntil) {
//             const interval = setInterval(() => {
//                 const remaining = Math.max(0, Math.floor((blockUntil - Date.now()) / 1000));
//                 setTimeLeft(remaining);
//                 if (remaining === 0) {
//                     dispatch(unblockAccount());
//                     clearInterval(interval);
//                 }
//             }, 1000);
//             return () => clearInterval(interval);
//         }
//     }, [blockUntil, dispatch]);

//     useEffect(() => {
//         const detectScreenshot = () => {
//             alert("Screenshot detected! Your account is disabled for 5 minutes.");
//             const blockTime = Date.now() + 5 * 60 * 1000; // 5 minutes
//             dispatch(blockAccount(blockTime));
//         };

//         // Detect window visibility change (indicating possible screenshot)
//         const handleVisibilityChange = () => {
//             if (document.hidden) detectScreenshot();
//         };

//         document.addEventListener("visibilitychange", handleVisibilityChange);

//         return () => {
//             document.removeEventListener("visibilitychange", handleVisibilityChange);
//         };
//     }, [dispatch]);

//     if (isBlocked) {
//         return (
//             <div className="">
//                 <div className="screenshot-detector-inner-wrapper flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
//                     {/* <img
//                         src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
//                         alt="No Screenshot"
//                         className="w-24 h-24 mb-4"
//                         width={100}
//                         height={100}
//                     /> */}
//                     <svg width={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.463 491.463" xmlSpace="preserve"><path fill="#d50000" d="M454.03 242.291c-42.802-42.802-108.595-48.773-157.953-18.149-12.641-17.471-30.549-30.315-51.487-36.601l-16.49-4.86-70.66 70.66-70.66-70.66-16.54 4.87C28.23 200.161 0 238.101 0 281.961v86.68h240.69a127.2 127.2 0 0 0 32.32 54.67c24.95 24.95 57.73 37.43 90.51 37.43s65.56-12.48 90.51-37.43c49.91-49.91 49.91-131.11 0-181.02m-217.424 105.87H20.48v-66.2c0-34.75 22.36-64.81 55.59-74.78l4.83-1.42 76.54 76.54 76.54-76.54 4.78 1.41c16.614 4.989 30.846 15.224 40.864 29.144-2.234 1.944-4.489 3.851-6.614 5.976-28.864 28.864-40.925 68.18-36.404 105.87m50.884-91.39c20.96-20.96 48.5-31.44 76.03-31.44 24.32 0 48.631 8.209 68.423 24.567L280.617 401.224c-34.874-42.195-32.603-104.977 6.873-144.453m152.06 152.06c-39.476 39.476-102.258 41.747-144.453 6.873l151.326-151.326c34.874 42.196 32.603 104.977-6.873 144.453M153.6 30.721c-39.52 0-71.68 32.16-71.68 71.68s32.16 71.68 71.68 71.68 71.68-32.16 71.68-71.68-32.16-71.68-71.68-71.68m0 122.88c-28.23 0-51.2-22.97-51.2-51.2s22.97-51.2 51.2-51.2 51.2 22.97 51.2 51.2-22.97 51.2-51.2 51.2"/></svg>
//                     <h2 className="text-xl font-bold text-red-600 mb-2">
//                         Oops! Screenshot Detected
//                     </h2>
//                     <p className="text-gray-700">
//                         We have detected that you pressed the <b>Print Screen</b> button.
//                         <br />
//                         If this was an accident, don&apos;t worry—your account will be active again in{" "}
//                         <b>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</b> minutes.
//                     </p>
//                     <p className="mt-2 text-sm text-gray-600">
//                         Please avoid taking screenshots again, as multiple violations will
//                         result in a permanent ban.
//                     </p>
//                     <p className="mt-2">
//                         Refer to our{" "}
//                         {/* <a href="/terms" className="text-blue-500 underline">
//                             Terms and Conditions
//                         </a>{" "} */}
//                         for more details.
//                     </p>
//                     <p className="mt-4 text-green-600 font-semibold">Happy Revising!</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         // <div>
//         //   <h2>Protected Content</h2>
//         //   <p>Do not take screenshots or switch windows.</p>
//         // </div>
//         null
//     );
// };

// export default ScreenshotProtection;

// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { blockAccount, unblockAccount } from "../../redux/features/screenshotSlice/screenshotSlice";
// import './ScreenshotProtection.css';

// const ScreenshotProtection = () => {
//     const dispatch = useDispatch();
//     const { isBlocked, blockUntil, blockedUserId } = useSelector((state) => state.screenshot);
//     const user = useSelector(state=>state.auth?.user);
//     const userId = user?.id;
//     const [timeLeft, setTimeLeft] = useState(0);
//     const [lastHiddenTime, setLastHiddenTime] = useState(null);

//     useEffect(() => {
//         let interval;
//         if (blockUntil && blockedUserId === userId) { // ✅ Ensure correct user
//             setTimeLeft(Math.max(0, Math.floor((blockUntil - Date.now()) / 1000))); 

//             interval = setInterval(() => {
//                 const remaining = Math.max(0, Math.floor((blockUntil - Date.now()) / 1000));
//                 setTimeLeft(remaining);
//                 if (remaining === 0) {
//                     dispatch(unblockAccount(userId)); // ✅ Unblock only if the same user
//                     clearInterval(interval);
//                 }
//             }, 1000);
//         }

//         return () => clearInterval(interval);
//     }, [blockUntil, blockedUserId, userId, dispatch]);

//     useEffect(() => {
//         const detectScreenshot = () => {
//             if (isBlocked && blockedUserId === userId) return; // ✅ Prevent re-blocking if already blocked
            
//             const blockTime = Date.now() + 5 * 60 * 1000; // 5 min block
//             dispatch(blockAccount({ blockTime, userId })); // ✅ Store user ID
//             setTimeLeft(300);
//             window.scrollTo({ top: 0, behavior: "smooth" });
//         };

//         const handleKeyup = (event) => {
//             if (event.key === "PrintScreen") {
//                 detectScreenshot();
//             }
//         };

//         const handleKeydown = (event) => {
//             if (event.ctrlKey && event.key.toLowerCase() === "p") {
//                 event.preventDefault(); // Block print dialog
//                 detectScreenshot();
//             }
//         };

//         const handleVisibilityChange = () => {
//             if (document.hidden) {
//                 setLastHiddenTime(Date.now());
//             } else if (lastHiddenTime) {
//                 const timeAway = Date.now() - lastHiddenTime;
//                 if (timeAway < 3000) detectScreenshot();
//                 setLastHiddenTime(null);
//             }
//         };

//         document.addEventListener("keyup", handleKeyup);
//         document.addEventListener("keydown", handleKeydown);
//         document.addEventListener("visibilitychange", handleVisibilityChange);

//         return () => {
//             document.removeEventListener("keyup", handleKeyup);
//             document.removeEventListener("keydown", handleKeydown);
//             document.removeEventListener("visibilitychange", handleVisibilityChange);
//         };
//     }, [dispatch, lastHiddenTime, isBlocked, blockedUserId, userId]);

//     if (isBlocked) {
//         return (
//             <div className="screenshot-detector-inner-wrapper flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
//                 <svg width={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.463 491.463" xmlSpace="preserve">
//                     <path fill="#d50000" d="M454.03 242.291c-42.802-42.802-108.595-48.773-157.953-18.149-12.641-17.471-30.549-30.315-51.487-36.601l-16.49-4.86-70.66 70.66-70.66-70.66-16.54 4.87C28.23 200.161 0 238.101 0 281.961v86.68h240.69a127.2 127.2 0 0 0 32.32 54.67c24.95 24.95 57.73 37.43 90.51 37.43s65.56-12.48 90.51-37.43c49.91-49.91 49.91-131.11 0-181.02m-217.424 105.87H20.48v-66.2c0-34.75 22.36-64.81 55.59-74.78l4.83-1.42 76.54 76.54 76.54-76.54 4.78 1.41c16.614 4.989 30.846 15.224 40.864 29.144-2.234 1.944-4.489 3.851-6.614 5.976-28.864 28.864-40.925 68.18-36.404 105.87m50.884-91.39c20.96-20.96 48.5-31.44 76.03-31.44 24.32 0 48.631 8.209 68.423 24.567L280.617 401.224c-34.874-42.195-32.603-104.977 6.873-144.453m152.06 152.06c-39.476 39.476-102.258 41.747-144.453 6.873l151.326-151.326c34.874 42.196 32.603 104.977-6.873 144.453M153.6 30.721c-39.52 0-71.68 32.16-71.68 71.68s32.16 71.68 71.68 71.68 71.68-32.16 71.68-71.68-32.16-71.68-71.68-71.68m0 122.88c-28.23 0-51.2-22.97-51.2-51.2s22.97-51.2 51.2-51.2 51.2 22.97 51.2 51.2-22.97 51.2-51.2 51.2"/>
//                 </svg>
//                 <h2 className="text-xl font-bold text-red-600 mb-2">
//                     Oops! Screenshot Detected
//                 </h2>
//                 <p className="text-gray-700">
//                     We have detected that you pressed the <b>Print Screen</b> button.
//                     <br />
//                     If this was an accident, don&apos;t worry—your account will be active again in{" "}
//                     <b>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</b> minutes.
//                 </p>
//                 <p className="mt-2 text-sm text-gray-600">
//                     Please avoid taking screenshots again, as multiple violations will
//                     result in a permanent ban.
//                 </p>
//                 {/* <p className="mt-2">
//                     Refer to our{" "}
//                     <a href="/terms" className="text-blue-500 underline">
//                         Terms and Conditions
//                     </a>{" "}
//                     for more details.
//                 </p> */}
//                 <p className="mt-4 text-green-600 font-semibold">Happy Revising!</p>
//             </div>
//         );
//     }

//     return null; // Hide component when not blocked
// };

// export default ScreenshotProtection;


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockAccount, unblockAccount } from "../../redux/features/screenshotSlice/screenshotSlice";
import './ScreenshotProtection.css';

const ScreenshotProtection = () => {
    const dispatch = useDispatch();
    const { blockedUsers } = useSelector((state) => state.screenshot);
    const user = useSelector((state) => state.auth?.user); // Current logged-in user
    const [timeLeft, setTimeLeft] = useState(0);

    // Find the current user's block status
    const userBlockData = blockedUsers.find((blockedUser) => blockedUser.userId === user?.id);
    
    useEffect(() => {
        let interval;
        if (userBlockData?.blockUntil) {
            setTimeLeft(Math.max(0, Math.floor((userBlockData.blockUntil - Date.now()) / 1000)));

            interval = setInterval(() => {
                const remaining = Math.max(0, Math.floor((userBlockData.blockUntil - Date.now()) / 1000));
                setTimeLeft(remaining);
                if (remaining === 0) {
                    dispatch(unblockAccount({ userId: user?.id }));
                    clearInterval(interval);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [userBlockData, dispatch, user?.id]);

    useEffect(() => {
        const detectScreenshot = () => {
            if (!user?.id) return;

            const blockTime = Date.now() + 5 * 60 * 1000; // Block for 5 minutes
            dispatch(blockAccount({ userId: user.id, blockUntil: blockTime }));
            setTimeLeft(300);
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        // Detect Print Screen key (Use keyup instead of keydown)
        const handleKeyup = (event) => {
            if (event.key === "PrintScreen") {
                detectScreenshot();
            }
        };

        // Detect Ctrl + P (Print Dialog)
        const handleKeydown = (event) => {
            if (event.ctrlKey && event.key.toLowerCase() === "p") {
                event.preventDefault(); // Block print dialog
                detectScreenshot();
            }
        };

        document.addEventListener("keyup", handleKeyup);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keyup", handleKeyup);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [dispatch, user?.id]);

    if (userBlockData) {
        return (
            <div className="screenshot-detector-inner-wrapper flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
                <svg width={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.463 491.463" xmlSpace="preserve">
                    <path fill="#d50000" d="M454.03 242.291c-42.802-42.802-108.595-48.773-157.953-18.149-12.641-17.471-30.549-30.315-51.487-36.601l-16.49-4.86-70.66 70.66-70.66-70.66-16.54 4.87C28.23 200.161 0 238.101 0 281.961v86.68h240.69a127.2 127.2 0 0 0 32.32 54.67c24.95 24.95 57.73 37.43 90.51 37.43s65.56-12.48 90.51-37.43c49.91-49.91 49.91-131.11 0-181.02m-217.424 105.87H20.48v-66.2c0-34.75 22.36-64.81 55.59-74.78l4.83-1.42 76.54 76.54 76.54-76.54 4.78 1.41c16.614 4.989 30.846 15.224 40.864 29.144-2.234 1.944-4.489 3.851-6.614 5.976-28.864 28.864-40.925 68.18-36.404 105.87m50.884-91.39c20.96-20.96 48.5-31.44 76.03-31.44 24.32 0 48.631 8.209 68.423 24.567L280.617 401.224c-34.874-42.195-32.603-104.977 6.873-144.453m152.06 152.06c-39.476 39.476-102.258 41.747-144.453 6.873l151.326-151.326c34.874 42.196 32.603 104.977-6.873 144.453M153.6 30.721c-39.52 0-71.68 32.16-71.68 71.68s32.16 71.68 71.68 71.68 71.68-32.16 71.68-71.68-32.16-71.68-71.68-71.68m0 122.88c-28.23 0-51.2-22.97-51.2-51.2s22.97-51.2 51.2-51.2 51.2 22.97 51.2 51.2-22.97 51.2-51.2 51.2"/>
                </svg>
                <h2 className="text-xl font-bold text-red-600 mb-2">
                    Oops! Screenshot Detected
                </h2>
                <p className="text-gray-700">
                    We have detected that you pressed the <b>Print Screen</b> button.
                    <br />
                    If this was an accident, don&apos;t worry—your account will be active again in{" "}
                    <b>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</b> minutes.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                    Please avoid taking screenshots again, as multiple violations will
                    result in a permanent ban.
                </p>
                <p className="mt-4 text-green-600 font-semibold">Happy Revising!</p>
            </div>
        );
    }

    return null; // Hide component when not blocked
};

export default ScreenshotProtection;
