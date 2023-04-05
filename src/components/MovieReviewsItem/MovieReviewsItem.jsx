import Box from 'components/Box';

import { getImg } from 'services/moviesApi';

const MovieReviewsItem = ({ review }) => {
  const {
    author_details: { name, username, avatar_path, rating },
    content,
    created_at,
    updated_at,
  } = review;

  const author = name ? name : username;

  return (
    <Box as="li" display="flex">
      <Box width="200px">
        <Box width="120px">
          <img src={getImg(avatar_path)} alt={`${author} avatar`} />
        </Box>
        <h3>{author}</h3>
        <p>Rating: {rating}</p>
      </Box>
      <div>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <p>Create: {created_at}</p>
        <p>Update: {updated_at}</p>
      </div>
    </Box>
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
