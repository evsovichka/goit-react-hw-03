import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={style.contactItem} key={contact.id}>
            {<Contact contact={contact} onDelete={onDelete} />}
          </li>
        );
      })}
    </ul>
  );
}
