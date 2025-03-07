import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};
export default SearchBar;
