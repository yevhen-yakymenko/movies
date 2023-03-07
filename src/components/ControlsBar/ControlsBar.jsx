import {
  Aside,
  Controls,
  StyledLink,
  ArrowRightIcon,
} from './ControlsBar.styled';

import moviesRefs from 'data/moviesRefs.json';

const ControlsBar = () => {
  return (
    <Aside>
      <Controls>
        <ul>
          {moviesRefs.map(({ name, title }) => (
            <li key={name}>
              <StyledLink to={`../${name}`}>
                {title} <ArrowRightIcon />
              </StyledLink>
            </li>
          ))}
        </ul>
      </Controls>
    </Aside>
  );
};

export default ControlsBar;
