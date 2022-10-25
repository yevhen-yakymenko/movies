import { NavLink, Outlet } from 'react-router-dom';

import ControlBar from 'components/ControlBar';

import { MainHeader, NavigationList } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <MainHeader>
        <NavigationList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </NavigationList>
        <form>
          <input />
          <button type="submit">Search</button>
        </form>
      </MainHeader>
      <ControlBar />
      <Outlet />
    </>
  );
};

export default AppBar;
