import ContactList from '../ContactList/ContactList';
import ContactForm  from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import { Card } from '../ContactList/contactLIst-styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Card>
      <ContactForm />
        <SearchBox />
        <ContactList />
    </Card>
  )
}