import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter, selectContacts, selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contactsOps';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));

const ContactList = () => {

    const dispatch = useDispatch();
    const items = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filter = useSelector(selectNameFilter);

    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
    
    
    const filteredContacts = itemsFilter(items, filter);

    return (  
     <ul>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
     {filter.length > 0 ?
      filteredContacts.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
       </ListContact>
       )
       )
       :  items.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
       </ListContact>
       )
       )
     }
     </ul>
    )
}

export default ContactList;