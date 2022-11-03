import { useState } from 'react';

import {
  SearchForm,
  SearchInput,
  SeacrhButton,
  SearchIcon,
} from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value);

    const form = e.target;
    form.reset();
    setValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="search"
        placeholder="Find a movies..."
        autofocus
        required
        onChange={handleChange}
      />
      <SeacrhButton type="submit">{<SearchIcon size="24px" />}</SeacrhButton>
    </SearchForm>
  );
};

export default SearchBox;
