export default function Book({ params }) {
  let { bookID } = params
  return (
    <main>
      <h1>Book {bookID}</h1>
    </main>
  )
}
