const SearchBox = ({ value }) => {
  return (
    <form>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBox;
