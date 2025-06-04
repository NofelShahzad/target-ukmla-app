import { toast } from "react-toastify";
// import toastSuccess from "../assets/images/svg/toastSuccess.svg";
// import toastAlert from "../assets/images/svg/toastAlert.svg";
// import { toastApiMessage } from "../";
// import { toastApiMessage } from "../../utils/utils";
export function errorMessage(msg, options = {}) {
    const toastId = "unique_error_id";
    if (!toast.isActive(toastId)) { 
        toast.error(msg,{ ...options, toastId });
    }
}
export function successMessage(msg, options = {}) {
    const toastId = "unique_success_id";
    if (!toast.isActive(toastId)) { 
        if (typeof msg === "string") {
            toast.success(msg,{ ...options, toastId });
        } else {
            toast.success(msg, 
                { ...options, toastId }
            //     {
            //     // icon: ({ theme, type }) => <img src={toastSuccess} alt="success" />,
            //     // ...options,
            // }
        );
        }
    }
}