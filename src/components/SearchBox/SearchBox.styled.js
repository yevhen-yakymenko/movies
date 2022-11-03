import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const FormWrapper = styled.div``;

export const SearchForm = styled.form`
  width: 75%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 50%;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.text};
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  outline: none;
  padding: 8px 16px;
`;

export const SeacrhButton = styled.button`
  display: flex;
  padding: 8px;
  background-color: ${p => p.theme.colors.secondary};
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
`;

export const SearchIcon = styled(BiSearch)`
  color: ${p => p.theme.colors.text};
`;
