import { useState, useEffect, useRef } from 'react';
import { IoChevronForward } from 'react-icons/io5';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import moviesRefs from 'data/moviesRefs.json';

import {
  Aside,
  // AsideWrapper,
  AsideNav,
  AsideBtnControl,
  MenuItem,
  StyledLink,
  LinkIcon,
} from './AsideMenu.styled';

const AsideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const AsideRef = useRef();
  const AsideBtnRef = useRef();
  const AsideNavRef = useRef();

  useEffect(() => {
    const handleCloseMenu = e => {
      if (
        e.target !== AsideNavRef.current &&
        e.target !== AsideBtnRef.current
      ) {
        AsideRef.current.classList.remove('menu-open');
        setIsOpen(false);
      }
    };

    if (!isOpen) {
      return;
    }

    document.addEventListener('click', handleCloseMenu);

    return () => {
      document.removeEventListener('click', handleCloseMenu);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    AsideRef.current.classList.toggle('menu-open');
    setIsOpen(!isOpen);
  };

  return (
    <Aside id="aside-menu" ref={AsideRef}>
      {/* <AsideWrapper id="aside-menu" ref={AsideRef}> */}
      <AsideNav ref={AsideNavRef}>
        <ul>
          {moviesRefs.map(({ name, title }) => (
            <MenuItem key={name}>
              <StyledLink to={`../${name}`}>
                {title}

                <LinkIcon>
                  <HiOutlineArrowNarrowRight />
                </LinkIcon>
              </StyledLink>
            </MenuItem>
          ))}
        </ul>
      </AsideNav>
      {/* </AsideWrapper> */}
      <AsideBtnControl
        type="button"
        aria-label="open aside menu button"
        aria-controls="aside-menu"
        aria-expanded={isOpen}
        onClick={() => toggleMenu()}
        ref={AsideBtnRef}
      >
        <span aria-label="button icon">
          <IoChevronForward />
        </span>
      </AsideBtnControl>
    </Aside>
  );
};

export default AsideMenu;
