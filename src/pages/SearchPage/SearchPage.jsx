import { useSearchParams } from 'react-router-dom';

import MoviesBox from 'components/MoviesBox';
import SearchBox from 'components/SearchBox';

import {
  PageSection,
  SectionContainer,
  NavigationBox,
  ContentBox,
} from './SearchPage.styled';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchMovie = request => {
    setSearchParams({ request });
  };

  const serchRequets = searchParams.get('request');

  return (
    <PageSection>
      <SectionContainer>
        <NavigationBox />
        <ContentBox>
          <SearchBox onSubmit={onSearchMovie} />
          <MoviesBox movieRef={serchRequets} />
        </ContentBox>
      </SectionContainer>
    </PageSection>
  );
};

export default SearchPage;
