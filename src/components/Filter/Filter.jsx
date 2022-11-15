import { useSelector, useDispatch } from 'react-redux';

import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

import css from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const inputValue = e.currentTarget.value;

    dispatch(setFilterValue(inputValue));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.field}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </label>
  );
}
