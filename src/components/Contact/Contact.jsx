import style from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={style.contact}>
      <div className={style.contactDate}>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} className={style.deleteBtn}>
        Delete
      </button>
    </div>
  );
}
