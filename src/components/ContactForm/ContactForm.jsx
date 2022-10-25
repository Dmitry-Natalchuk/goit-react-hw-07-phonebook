import { useState } from "react";
import s from "./ContactForm.module.css"
import { addContact } from "redux/operation";
import { useDispatch} from 'react-redux';


export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  

 const handleChange = (event) => {
  const {name,value} = event.target
    switch (name) {
      case "name" :
        setName(value)
        break;
      case "phone" :
        setPhone(value)
        break;
      default :
        return
      }
    };

 const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({name,phone}))
    setName("");
    setPhone("");
  };

    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
          className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label} >
          Phone
          <input
            className={s.input}
            value={phone}
            onChange={handleChange}
            type="tel"
            name="phone"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
}
