import './SearchBar.module.css';
export default function SearchBar(props) {
   const {onSearch}=props;
   return (
      <div className="search-container">
         <input type='search' placeholder='Search'/>
         <span className="focus-border">
            <i></i>
         </span>
      <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
