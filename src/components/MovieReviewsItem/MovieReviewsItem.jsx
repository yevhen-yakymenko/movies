import { getImg } from 'services/moviesApi';

import {
  ReviewItem,
  UserInfo,
  UserAvatarBox,
  UserReviewBox,
  UserReviewText,
  UserReviewDate,
} from './MovieReviewsItem.styled';
import noAvatarImg from 'images/default-ava.jpg';

const MovieReviewsItem = ({ review }) => {
  const {
    author_details: { name, username, avatar_path, rating },
    content,
    created_at,
    updated_at,
  } = review;

  const author = name ? name : username;
  const avatarPath = () => {
    if (!avatar_path) {
      return noAvatarImg;
    }

    return avatar_path.includes('https://')
      ? avatar_path.slice(1)
      : getImg(avatar_path);
  };

  const dateProcessing = date => new Date(date).toLocaleString();

  return (
    <ReviewItem>
      <UserInfo>
        <UserAvatarBox>
          <img src={avatarPath()} alt={`${author} avatar`} />
        </UserAvatarBox>
        <h3>{author}</h3>
        <p>Rating: {rating ? rating : 0}</p>
      </UserInfo>
      <UserReviewBox>
        <UserReviewText dangerouslySetInnerHTML={{ __html: content }} />
        <UserReviewDate>Create: {dateProcessing(created_at)}</UserReviewDate>
        <UserReviewDate>Update: {dateProcessing(updated_at)}</UserReviewDate>
      </UserReviewBox>
    </ReviewItem>
  );
};

export default MovieReviewsItem;

// "author": "MSB",
// "author_details": {
//     "name": "MSB",
//     "username": "msbreviews",
//     "avatar_path": "/https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
//     "rating": 5.0
// },
// "content": "FULL SPOILER-FREE REVIEW @ https://www.msbreviews.com/movie-reviews/black-adam-spoiler-free-review\r\n\r\n\"Black Adam is far from impressive, being somewhat disappointing due to its formulaic, predictable screenplay when something different was anticipated.\r\n\r\nLorne Balfe's epic score and a magnificent cast - Dwayne Johnson, Aldis Hodge, and most remarkably Pierce Brosnan are phenomenal - try to elevate the decent action and visuals, but the moderate entertainment levels don't make up for the dated narrative structure.\r\n\r\nTiresomely heavy exposition, story with little to no creativity, and inconsistent humor make it impossible for the DCEU to take \"the next step\" in a truly impactful manner.\"\r\n\r\nRating: C+",
// "created_at": "2022-10-19T15:58:22.495Z",
// "id": "63501e9ed363e5007a664110",
// "updated_at": "2022-10-19T15:58:22.580Z",
// "url": "https://www.themoviedb.org/review/63501e9ed363e5007a664110"
