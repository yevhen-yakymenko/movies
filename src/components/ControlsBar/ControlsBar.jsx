import { Controls, StyledLink, ArrowRightIcon } from './ControlsBar.styled';

import moviesRefs from 'data/moviesRefs.json';

const ControlsBar = () => {
  return (
    <Controls>
      {moviesRefs.map(({ name, title }) => (
        <StyledLink key={name} to={`../${name}`}>
          {title} <ArrowRightIcon />
        </StyledLink>
      ))}
    </Controls>
  );
};

export default ControlsBar;
