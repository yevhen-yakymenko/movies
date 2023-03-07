import {
  MainHeader,
  HeaderContainer,
  LogoContainer,
  LogoLink,
  LogoIcon,
  NavigationContainer,
  NavigationList,
  StyledLink,
} from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <MainHeader>
        <HeaderContainer>
          <LogoContainer>
            <LogoLink to="/">
              <LogoIcon size="32px" color="white" />
              movieSPA
            </LogoLink>
          </LogoContainer>
          <NavigationContainer>
            <NavigationList>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="movies">Movies</StyledLink>
            </NavigationList>
            {/* <form>
            <input />
            <button type="submit">Search</button>
          </form> */}
          </NavigationContainer>
        </HeaderContainer>
      </MainHeader>
    </>
  );
};

export default AppBar;
