import ContactList from '../ContactDetails/ContactsList';
import ContactForm  from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { Card } from '../ContactDetails/contactCard-styled';

export default function App() {

  return (
    <Card>
      <ContactForm />
        <Filter />
        <ContactList />
    </Card>
  )
}