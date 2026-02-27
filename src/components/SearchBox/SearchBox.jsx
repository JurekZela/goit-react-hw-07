import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';


export default function SearchBox () {
    const dispatch = useDispatch();

    const SearchBox = evt => dispatch(changeFilter(evt.target.value))
    return (
        <div>
        <p>Find contacts by name</p>
        <input className={css.input}
        type="text"
        name="filter"    
        onChange={SearchBox}
        />
        </div>
    )
}