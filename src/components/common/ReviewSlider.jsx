import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; 

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"

// Icons
import { FaStar } from "react-icons/fa"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const truncateWords = 15
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        
        if (data?.success) {
          setReviews(data?.data || [])
        } else {
          // If API returns unsuccessful response
          console.log("Reviews API returned unsuccessful response")
          setReviews([]) // Set empty array instead of showing error
        }
      } catch (error) {
        console.log("Could not fetch reviews:", error)
        setError(error)
        setReviews([]) // Set empty array instead of showing error
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlides(1);
      } else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setSlides(2);
      } else if (window.innerWidth > 1024) {
        setSlides(3);
      }
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="text-white">
        <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  // If no reviews available, show placeholder content
  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-white">
        <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-richblack-5 mb-2">
                No Reviews Yet
              </h3>
              <p className="text-richblack-300">
                Be the first to leave a review for our courses!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={slides}
          spaceBetween={25}
          loop={reviews.length > slides} // Only enable loop if we have enough slides
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex items-center flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 h-fit rounded-md">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="User"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">
                        {`${review?.user?.firstName || 'Anonymous'} ${review?.user?.lastName || ''}`}
                      </h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName || 'Course Review'}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review && review.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review || 'Great course!'}`}
                  </p>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating ? review.rating.toFixed(1) : '5.0'}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating || 5}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider