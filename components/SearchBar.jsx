const SearchBar = ({onChange}) => {
  return (
    <div>
      <input placeholder="Search" className="bg-dark-secondary py-2 px-4 rounded outline-none" onChange={onChange} />
    </div>
  );
};

export default SearchBar;
