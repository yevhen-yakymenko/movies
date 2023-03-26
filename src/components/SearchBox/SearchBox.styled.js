import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchForm = styled.form`
  padding-top: 1rem;
  width: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.background};

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    padding-top: 1.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 50%;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.text};
  border: none;
  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  outline: none;
  padding: 0.5rem 1rem;
`;

export const SeacrhButton = styled.button`
  display: flex;
  padding: 0.5rem;
  background-color: ${p => p.theme.colors.secondary};
  border: none;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  cursor: pointer;
`;

export const SearchIcon = styled(BiSearch)`
  color: ${p => p.theme.colors.text};
`;
