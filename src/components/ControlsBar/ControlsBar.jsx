import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import moviesRefs from 'data/moviesRefs.json';

import { Aside, Controls, MenuItem, StyledLink } from './ControlsBar.styled';

const ControlsBar = () => {
  return (
    <Aside>
      <Controls>
        {/* <ToggleMenuBtn
          type="button"
          aria-controls="navigation-menu"
          aria-expanded={isOpen}
          onClick={() => toggleMenu()}
          ref={MenuBtn}
          // {...props}
        >
          <span aria-label="mobile menu switch">
            {!isOpen ? <IoMenuOutline /> : <IoCloseOutline />}
          </span>
        </ToggleMenuBtn> */}
        <ul>
          {moviesRefs.map(({ name, title }) => (
            <MenuItem key={name}>
              <StyledLink to={`../${name}`}>
                {title}
                {({ isActive, isPending }) => (
                  <span className={isActive ? 'active' : ''}>
                    <HiOutlineArrowNarrowRight />
                  </span>
                )}
                {/* <span>
                  <HiOutlineArrowNarrowRight />
                </span> */}
              </StyledLink>
            </MenuItem>
          ))}
        </ul>
      </Controls>
    </Aside>
  );
};

export default ControlsBar;
