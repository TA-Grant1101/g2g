
export const BookCoverUrl = (bookCover, coverSize) => {
    const coverUrl = "https://covers.openlibrary.org/b/id/";
    const mediumSize = "-M.jpg";
    const largeSize = "-L.jpg";

    let setSize = coverSize = "L" ? largeSize : mediumSize;

    return (coverUrl + bookCover + setSize);
} 

export default async function ApiBookDetails(searchTerm) {
    const apiSearchUrl = "https://openlibrary.org/search.json?q=";
    
    async function fetchBooks() {
        const response = await fetch((apiSearchUrl + searchTerm));
        const bookJson = await response.json();
        return bookJson;
        }

    let books = await fetchBooks();
    return (books)
}






