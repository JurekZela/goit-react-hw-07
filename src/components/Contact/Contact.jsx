 import {useDispatch} from 'react-redux';
    import {deleteContact} from '../../redux/contactsOps';
    import css from './contactStyles.module.css'

    export default function Contact({contacts}) {

        const dispatch = useDispatch();
        const handleDelete = () => {
            let resut = confirm(`Are you sure you want to delete this contact?`);
            if (resut) {
                dispatch(deleteContact(contacts.id))
                console.log('Confirm deleting');
            }else {
                console.log('Confirm not deleting');
            }
        };

        return (
            <>
                <p className={css.title}>
                    {contacts.name}: {contacts.number}
                </p>
                <button className={css.deleteBtn} onClick={handleDelete}>Delete</button>
            </>
        )
    }