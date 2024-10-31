import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className="justify-center text-center">
        <h3 className="font-bold text-4xl font-palanquin">What Our 
          <span className="text-coral-red"> Customers</span> Says?</h3>
        <p className="m-auto info-text max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>
      </div>

      <div className="flex gap-10 text-center justify-center mt-10 max-sm:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
