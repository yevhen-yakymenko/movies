import {
  MainHeader,
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
        <LogoContainer>
          <LogoIcon size="32px" color="white" />
          <LogoLink to="/">movieSPA</LogoLink>
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
      </MainHeader>
    </>
  );
};

export default AppBar;
