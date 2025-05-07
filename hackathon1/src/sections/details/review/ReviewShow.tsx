"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Review {
  _id: number;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  user?: {
    fullName?: string;
    profilePic?: string;
  };
}

interface ProductReviewsDisplayProps {
  productId: string;
  reviews: Review[];
  //   fetchReviews: (productId: string) => Promise<Review[]>;
}

const ProductReviewsDisplay: React.FC<ProductReviewsDisplayProps> = ({
  productId,
  reviews,
}) => {
  // const [reviews, setReviews] = useState<Review[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet for this product.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="p-4 border rounded-md bg-gray-50">
              <div className="flex items-center mb-2">
                <div className="flex">
                  <div className="flex justify-start gap-x-3">
                    <Image
                      src={review.user?.profilePic}
                      alt={""}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-500">
                      {review.user?.fullName}
                    </span>
                  </div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-xl ${
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductReviewsDisplay;
