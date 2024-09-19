import { useSelector } from 'react-redux';
import { ListContact } from './contactLIst-styled';
import { selectItemsFilter } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

export default function ContactList () {
    
  const selectContacts = useSelector(selectItemsFilter);
  
  

    return (  
 <ul>
{
 selectContacts.map((contact) => (
  <ListContact key={contact.id}>
    <Contact  contacts={contact}/>
  </ListContact>
  ))
  }
  </ul>
  )
}