export default function BookList({ books }) {
  return (
    <ul>
      {books.map((book, index) => {
        return <li key={index}>{book.name}</li>;
      })}
    </ul>
  );
}
