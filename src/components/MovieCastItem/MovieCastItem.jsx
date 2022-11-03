import Box from 'components/Box';

import { getImg } from 'services/moviesApi';

const MovieCastItem = ({ person }) => {
  const { name, profile_path, character } = person;

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
