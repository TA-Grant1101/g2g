import {React, useEffect} from 'react';

function BookResults({ books }) {
    const resultsElement = document.getElementById("search-result");


    return (
        <div id="search-result">
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
    );
}


export default BookResults;