import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Loader } from "./Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import { useEffect } from "react";
import { fetchContacts,deleteContact } from "redux/operation";
import { selectItems,selectFilter, selectState } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const contacts = useSelector(selectItems)
  const {loading,error} = useSelector(selectState)

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
        {!loading && contacts.length > 0 && <ContactList contacts = {visibleUser} 
        onDeleteContact = {deleteContactItem}
        />}
        {loading && <Loader />}
      </Section>
      }
      {error && <p>oops, something went wrong</p>}
    </>
  )
};
