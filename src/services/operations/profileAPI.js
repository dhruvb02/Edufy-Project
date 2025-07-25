import { toast } from "react-hot-toast"
import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const { 
  GET_USER_DETAILS_API, 
  GET_USER_ENROLLED_COURSES_API,
  GET_INSTRUCTOR_DATA_API 
} = profileEndpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      console.log("GET_USER_DETAILS API ERROR............", error)
      if (error.response?.status === 401) {
        dispatch(logout(navigate))
      } else {
        toast.error("Could Not Get User Details")
      }
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    
    console.log("GET_USER_ENROLLED_COURSES_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }
  toast.dismiss(toastId);
  return result;
}

export async function getInstructorData(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    console.log("Calling GET_INSTRUCTOR_DATA_API with token:", token?.substring(0, 20));
    
    const response = await apiConnector("GET", GET_INSTRUCTOR_DATA_API, null, {
      Authorization: `Bearer ${token}`
    });
    
    console.log("GET_INSTRUCTOR_DATA_API_RESPONSE", response);
    
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    
    result = response?.data?.courses || [];
  } catch (error) {
    console.log("GET_INSTRUCTOR_API ERROR:", error);
    
    // Don't show error toast for 401 - let the user stay on page
    if (error.response?.status !== 401) {
      toast.error("Could not get instructor data");
    }
  }
  toast.dismiss(toastId);
  return result;
}