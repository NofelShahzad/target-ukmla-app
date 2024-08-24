import { toast } from "react-toastify";
// import toastSuccess from "../assets/images/svg/toastSuccess.svg";
// import toastAlert from "../assets/images/svg/toastAlert.svg";
// import { toastApiMessage } from "../";
// import { toastApiMessage } from "../../utils/utils";
export function errorMessage(msg, options = {}) {
    toast.error(msg,options);
}
export function successMessage(msg, options = {}) {
    if (typeof msg === "string") {
        toast.success(msg,options);
    } else {
        toast.success(msg, {
            // icon: ({ theme, type }) => <img src={toastSuccess} alt="success" />,
            // ...options,
        });
    }
}