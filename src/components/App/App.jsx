import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';
import ContactForm  from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import css from '../ContactList/contactList.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
  {error && (<p>{error}</p>)}
    <ul className={css.card}>
      <ContactForm />
        <SearchBox />
        {isLoading && !error && (<p>Loading...</p>)}
        {error && (<p>{error}</p>)}
        <ContactList />
    </ul>
    </>
  )
};