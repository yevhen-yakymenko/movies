import { NavLink } from 'react-router-dom';

import moviesRefs from 'data/moviesRefs.json';

const ControlBar = () => {
  return (
    <>
      <div>
        <nav>
          {moviesRefs.map(({ name, btnName }) => (
            <NavLink to={name} key={name}>
              {btnName}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default ControlBar;
