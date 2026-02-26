import { useSelector } from 'react-redux';
import css from './contactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

export default function ContactList () {
    
  const selectContacts = useSelector(selectFilteredContacts);

    return (  
 <ul>
{
 selectContacts.map((contact) => (
  <li className={css.listContact} key={contact.id}>
    <Contact  contacts={contact}/>
  </li>
  ))
  }
  </ul>
  )
}