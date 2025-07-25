import toast from "react-hot-toast";
import {studentEndpoints} from "../apis";
import { apiConnector } from "../apiconnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png";
import {setPaymentLoading} from "../../slices/courseSlice";
import {resetCart} from "../../slices/cartSlice";

const {COURSE_PAYMENT_API,COURSE_VERIFY_API,SEND_PAYMENT_SUCCESS_EMAIL_API}= studentEndpoints;

// creating script and appending it 
function loadScript(src){
    return new Promise((resolve)=>{
        const script=document.createElement("script");
        script.src=src;

        script.onload=()=>{
            resolve(true);
        }
        script.onerror=()=>{
            resolve(false);
        }
        document.body.appendChild(script);

    })

}



export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading....")
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            toast.error("RazorPay SDK failed to load")
            return
        }

        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
            { courses },
            { Authorization: `Bearer ${token}` }
        )

        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY, // Fix environment variable name
            currency: orderResponse?.data?.data.currency,
            amount: `${orderResponse?.data?.data?.amount}`,
            order_id: orderResponse?.data?.data.id,
            name: "EduFy",
            description: "Thank you for Purchasing the Course",
            image: rzpLogo,
            prefill: {
                name: `${userDetails?.firstName} ${userDetails?.lastName}`,
                email: userDetails.email,
            },
            handler: function(response) {
                sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
                verifyPayment({...response, courses}, token, navigate, dispatch)
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on("payment.failed", function(response) {
            toast.error("Oops, payment failed")
            console.log(response.error)
        })

    } catch(error) {
        console.log("PAYMENT API ERROR", error)
        toast.error(error?.response?.data?.message || "Could not make Payment")
    }
    toast.dismiss(toastId)
}

async function sendPaymentSuccessEmail(response,amount,token){
    try{
        await apiConnector("POST",SEND_PAYMENT_SUCCESS_EMAIL_API,{
            orderId:response.razorpay_order_id,
            paymentId:response.razorpay_payment_id,
            amount,
        },{
            Authorization: `Bearer ${token}`
        })
    }
    catch(error){
        console.log("Payment success email error",error);
    }
}



//verify payment
async function verifyPayment(bodyData,token,navigate,dispatch){
    const toastId=toast.loading("Verifying Payment...");
    dispatch(setPaymentLoading(true));
    console.log(typeof(dispatch));
    console.log(dispatch);
    try{
        const response=await apiConnector("POST",COURSE_VERIFY_API,bodyData,{
            Authorization: `Bearer ${token}`,
        })

        if(!response?.data?.success){
            throw new Error(response?.data?.message);
        }
        toast.success("Payment Successful, you are added to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    }
    catch(error){
        console.log("Payment verify error",error);
        toast.error("Could not verify Payment");

    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}