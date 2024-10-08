import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import ContactList from '../ContactList/ContactList';
import ContactForm  from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import { Card } from '../ContactList/contactLIst-styled';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  console.log(isLoading);
  
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
  {error && (<p>{error}</p>)}
    <Card>
      <ContactForm />
        <SearchBox />
        {isLoading && !error && (<p>Loading...</p>)}
        {error && (<p>{error}</p>)}
        <ContactList />
    </Card>
    </>
  )
};