import { useState } from 'react';

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
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="search" required />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBox;

// export const SearchBoxMain = () => {
//   return (
//     <form>
//       <input />
//       <button type="submit">Search</button>
//     </form>
//   );
// };
