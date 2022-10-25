import PropTypes from 'prop-types'
import s from "./ContactList.module.css"


export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, phone }) => {
      return (
        <li key={id} className = {s.item}>
        <p className={s.info}>
          {name}: {phone}
        </p>
        <button
        className={s.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}>
          X
        </button>
      </li>
      )
    })}
    </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};