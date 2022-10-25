import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import { useEffect } from "react";
import { fetchContacts,deleteContact } from "redux/operation";
import { getItems,getFilter } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);
  const contacts = useSelector(getItems)

  useEffect(() => {
    dispatch(fetchContacts())
}, [dispatch]);
 
const deleteContactItem = (id) => dispatch(deleteContact(id));

const changeContact = event => {
  dispatch(setFilter(event.currentTarget.value));
}

 const visibleUser = contacts.filter(items =>
  items.name.toLowerCase().includes(filters.toLowerCase())
); 

  return (
    <>
  <Section title="Phonebook">
    <ContactForm />
      {contacts.length === 0 ? (null) :
        <Filter value={filters} 
        changeContact={changeContact} 
    />}
  </Section>
      {contacts.length === 0 ? (null) :
      <Section title = "Contacts">
        <ContactList contacts = {visibleUser} 
        onDeleteContact = {deleteContactItem}
        /> 
      </Section>
      }
    </>
  )
};
