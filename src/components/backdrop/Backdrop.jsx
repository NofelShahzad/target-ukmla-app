import { useEffect } from "react";
import "./Backdrop.css";

function Backdrop(props) {
    useEffect(()=>{
        document.body.style.overflow= 'hidden';
        document.body.style.paddingRight= '15px';
        return () => {
            document.body.style.overflow= 'unset';
            document.body.style.paddingRight= 'unset';
        }

    },[])

    // eslint-disable-next-line react/prop-types
    return <section className="backdrop-container">{props.children}</section>;
}

export default Backdrop;
