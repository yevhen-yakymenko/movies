import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieReviewsItem from 'components/MovieReviewsItem';

import { getReviews } from 'services/moviesApi';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getReviews(movieId).then(reviews => setReviews(reviews.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  console.log(reviews);

  return (
    <section>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <MovieReviewsItem key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <p>There are no reviews about the movie yet</p>
      )}
    </section>
  );
};

export default MovieReviews;
