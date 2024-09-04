import style from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsBook3Fill } from "react-icons/ri";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={style.contact}>
      <div className={style.contactDate}>
        <div className={style.name}>
          <RiContactsBook3Fill size={20} />
          <h2>{name}</h2>
        </div>
        <div className={style.number}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)} className={style.deleteBtn}>
        Delete
      </button>
    </div>
  );
}
