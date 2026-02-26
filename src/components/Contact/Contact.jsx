import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './contactStyles.module.css'

export default function Contact ({ contacts }) {
  
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contacts.id))

    return (
       <>
        <p className={css.title}>
          {contacts.name}: {contacts.number}
          </p>
          <button className={css.removeBtn} onClick={handleDelete}>Delete</button>
     </>
    )
}