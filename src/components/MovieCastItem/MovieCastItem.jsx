import { getImg } from 'services/moviesApi';

import noPhotoImg from 'images/no-image-camera.jpg';

import { CastItem, PhotoBox } from './MovieCastItem.styled';

const MovieCastItem = ({ person }) => {
  const { name, profile_path, character } = person;

  return (
    <CastItem>
      <PhotoBox>
        <img
          src={profile_path ? getImg(profile_path) : noPhotoImg}
          alt={`${name}`}
        />
      </PhotoBox>
      <h3>{name}</h3>
      <p>{character}</p>
    </CastItem>
  );
};

export default MovieCastItem;
