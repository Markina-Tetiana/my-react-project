import { useId } from 'react';

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();
  //const [lang, setLang] = useState('uk');

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={event => onSelect(event.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
export default LangSwitcher;
