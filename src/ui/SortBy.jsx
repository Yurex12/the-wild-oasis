import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searhParams, setSearchParams] = useSearchParams();

  const sortBy = searhParams.get('sortBy') || '';

  function handleChange(e) {
    searhParams.set('sortBy', e.target.value);
    setSearchParams(searhParams);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      type='white'
      onChange={handleChange}
    />
  );
}

export default SortBy;
