import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './contactForm.module.css';
import { addContactToList } from '../../redux/contactsOps';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required'),
    number: Yup.number()
      .min(9, 'Too Short!')
      .required('Required'),
  });
export default function ContactForm  ()  {
    const dispatch = useDispatch();

  return (
    <Formik
    initialValues={{
      name: '',
      number: '',
    }}

    validationSchema={SignupSchema}
    onSubmit={async (values, actions) => {
      await new Promise((r) => setTimeout(r, 500));
      
      dispatch(addContactToList({
        name: values.name,
        number: values.number,
      }))
      actions.resetForm();
    }}
  >
    <Form className={css.form}>
      <label className={css.label}>
        Name
        <Field className={css.field}  name="name" placeholder="Phil Collins" />
        <ErrorMessage className={css.errMessage} name="name" component="span" />
        </label>

      <label className={css.label}>
        Number
        <Field className={css.field} type="tel"  name="number" placeholder="+48-000-000-000" />
        <ErrorMessage className={css.errMessage} name="number" component="span" />
        </label>

      <button className={css.button} type="submit">Add contact</button>
    </Form>    
  </Formik>
  )
}