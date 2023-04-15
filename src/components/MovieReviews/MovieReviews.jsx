import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieReviewsItem from 'components/MovieReviewsItem';

import { getReviews } from 'services/moviesApi';

import { ReviewsList } from './MovieReviews.styled';

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
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <MovieReviewsItem key={review.id} review={review} />
          ))}
        </ReviewsList>
      ) : (
        <p>There are no reviews about the movie yet</p>
      )}
    </>
  );
};

export default MovieReviews;
