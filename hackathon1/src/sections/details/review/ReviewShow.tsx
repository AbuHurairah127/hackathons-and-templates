"use client";

import { useEffect, useState } from "react";

interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ProductReviewsDisplayProps {
  productId: string;
  //   fetchReviews: (productId: string) => Promise<Review[]>;
}

const ProductReviewsDisplay: React.FC<ProductReviewsDisplayProps> = ({
  productId,
  //   fetchReviews,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        // const fetchedReviews = await fetchReviews(productId);
        // setReviews(fetchedReviews);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews");
        setLoading(false);
      }
    };
    loadReviews();
  }, [productId]);

  if (loading) {
    return <div className="text-center p-6">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet for this product.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-md bg-gray-50">
              <div className="flex items-center mb-2">
                <div className="flex">
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
                <span className="ml-2 text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
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
