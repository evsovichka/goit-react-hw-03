import style from "./SearchBox.module.css";

export default function SearchBox({ inputValue, onSearch }) {
  const handlSearch = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className={style.searchBox}>
      <label htmlFor="3">Find contacts by name:</label>
      <input type="text" value={inputValue} onChange={handlSearch} id="3" />
    </div>
  );
}
