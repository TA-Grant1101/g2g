import {React, useState, useEffect} from 'react';


const BookCoverUrl = (bookCover, coverSize) => {
    const coverUrl = "https://covers.openlibrary.org/b/id/";
    const mediumSize = "-M.jpg";
    const largeSize = "-L.jpg";

    let setSize = coverSize = "L" ? largeSize : mediumSize;

    return (coverUrl + bookCover + setSize);
} 

export default BookCoverUrl;

export function localBookDetails(id) {
    const restApiGet = "http://localhost:8080/api/books"
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(restApiGet + '"' + q + '"')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div >
                <ul >
                    {books.docs.map((book) => (
                        <li>
                            <article key={book.key}>
                                <div>
                                    <img src={"https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title} />
                                </div>
                                <div >
                                    <h2 >{book.title}</h2>
                                    <ol >
                                        <li>
                                            Title: <span>{book.title}</span>
                                        </li>
                                        <li>
                                            Author: <span>{book.author_name}</span>
                                        </li>
                                        <li>
                                            First Published: <span>{book.first_publish_year}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export function apiBookDetails(q) {

    const apiSearchUrl = "https://openlibrary.org/search.json?q="
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(apiSearchUrl + q )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">
                <ul className="card-grid">
                    {books.docs.map((book) => (
                        <li>
                            <article className="card" key={book.key}>
                                <div className="card-image">
                                    <img src={"https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title} />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{book.title}</h2>
                                    <ol className="card-list">
                                        <li>
                                            Title: <span>{book.title}</span>
                                        </li>
                                        <li>
                                            Author: <span>{book.author_name}</span>
                                        </li>
                                        <li>
                                            First Published: <span>{book.first_publish_year}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}