
export const BookCoverUrl = (bookCover, coverSize) => {
    const coverUrl = "https://covers.openlibrary.org/b/id/";
    const mediumSize = "-M.jpg";
    const largeSize = "-L.jpg";

    let setSize = coverSize = "L" ? largeSize : mediumSize;

    return (coverUrl + bookCover + setSize);
} 

export default async function ApiBookDetails(searchTerm) {
    const searchResult = document.getElementById("search-result");
    const populatedSearchResult = document.getElementById("populated-search-result");
    const apiSearchUrl = "https://openlibrary.org/search.json?q=";
    
    async function fetchBooks() {
        const response = await fetch((apiSearchUrl + searchTerm));
        const bookJson = await response.json();
        return bookJson;
        }

    let books = await fetchBooks();


    searchResult.replaceWith(populatedSearchResult);

    <div id="populated-search-result">
    <ul className="card-grid">
        {books.map((book) => (
        <li>
            <article className="card" key={book.bookKey}>
                <div className="card-image">

                    <img src={"https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">{book.title}</h2>
                </div>
            </article>
        </li>
        ))}
    </ul>
    </div>

}






