import { createPortal } from "react-dom";
import Backdrop from "../backdrop/Backdrop";

function ReactPortal({ children, wrapperId }) {
    return createPortal(<Backdrop>{children}</Backdrop>, document.getElementById(wrapperId));
}
export default ReactPortal;
