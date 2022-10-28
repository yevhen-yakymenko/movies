import Box from 'components/Box';

import { getImg } from 'services/moviesApi';

const MovieCastItem = ({ person }) => {
  const { name, profile_path, character } = person;
  console.log(person);

  return (
    <li>
      <Box width="160px">
        <img src={getImg(profile_path)} alt={`${name}`} />
      </Box>
      <h3>{name}</h3>
      <p>{character}</p>
    </li>
  );
};

export default MovieCastItem;

// "adult": false,
// "gender": 1,
// "id": 1882502,
// "known_for_department": "Acting",
// "name": "Lauren LaVera",
// "original_name": "Lauren LaVera",
// "popularity": 90.678,
// "profile_path": "/wrVoBR5YhdEcadqwPICkcXXTbWk.jpg",
// "cast_id": 3,
// "character": "Sienna",
// "credit_id": "5f69c113688cd000361d4090",
// "order": 0
