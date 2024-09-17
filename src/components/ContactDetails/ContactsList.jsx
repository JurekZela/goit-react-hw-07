import { useSelector } from 'react-redux';
import { ListContact } from './contactCard-styled';
import Contact from '../Contacts/ContactCard';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));

export default function ContactList () {
  
  const selectNameFilter = useSelector((state) => state.filters);
    
  const selectContacts = useSelector((state) => state.contacts.items);
  
  const filteredContacts = itemsFilter(selectContacts, selectNameFilter);

    return (  
 <ul>
  {
selectNameFilter.length > 0 ? (
  filteredContacts.map((selectContacts) => (
    <ListContact key={selectContacts.id}>
      <Contact  contacts={selectContacts}/>
    </ListContact>
  ))
) : (
  selectContacts.map((selectContacts) => (
    <ListContact key={selectContacts.id}>
      <Contact  contacts={selectContacts}/>
    </ListContact>
  ))
)
  }
  </ul>
  )
}