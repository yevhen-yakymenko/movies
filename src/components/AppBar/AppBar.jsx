import { useState, useEffect, useRef } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

import {
  MainHeader,
  HeaderContainer,
  LogoContainer,
  LogoLink,
  LogoIcon,
  ToggleMenuBtn,
  MenuContainer,
  NavigationMenu,
  StyledLink,
} from './AppBar.styled';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuBox = useRef();
  const MenuBtn = useRef();

  useEffect(() => {
    const handleCloseMenu = e => {
      if (e.target !== MenuBox.current && e.target !== MenuBtn.current) {
        MenuBox.current.classList.remove('menu-open');
        document.body.classList.remove('mune-open');
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
    MenuBox.current.classList.toggle('menu-open');
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <MainHeader>
      <HeaderContainer>
        <LogoContainer>
          <LogoLink to="/">
            <LogoIcon size="32px" color="white" />
            movieSPA
          </LogoLink>
        </LogoContainer>
        <ToggleMenuBtn
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
        </ToggleMenuBtn>
        <MenuContainer id="navigation-menu" ref={MenuBox}>
          <NavigationMenu>
            <ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="movies">Movies</StyledLink>
              </li>
            </ul>
          </NavigationMenu>
          {/* <form>
            <input />
            <button type="submit">Search</button>
          </form> */}
        </MenuContainer>
      </HeaderContainer>
    </MainHeader>
  );
};

export default AppBar;
