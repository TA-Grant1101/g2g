import { useState, useEffect } from "react";


export default function BookApi(apiUrl, q) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
        fetch(apiUrl + '"' + q + '"')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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
            /* here we map over the element and display each item as a card  */
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