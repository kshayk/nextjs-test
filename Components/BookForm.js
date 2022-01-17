import Style from "../styles/AuthorItem.module.css";
import {useRef} from "react";

function BookForm({onAddBook, authors}) {
    const bookNameRef = useRef();
    const isbnRef = useRef();
    const authorIDRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const bookName = bookNameRef.current.value;
        const isbn = isbnRef.current.value;
        const authorID = authorIDRef.current.value;

        const authorData = {
            book_name: bookName,
            isbn,
            author: authorID
        };

        onAddBook(authorData);
    }

    return (
        <form onSubmit={submitHandler}>
            Book Name: <input required type="text" id="bookName" placeholder="Book Name" ref={bookNameRef} />
            ISBN: <input required type="text" id="lastName" placeholder="last name" ref={isbnRef}/>
            Authors: <select required id="lastName" ref={authorIDRef}>
                {
                    JSON.parse(authors).map(author => {
                        return <option key={author._id} value={author._id}>{author.firstName} {author.lastName}</option>
                    })
                }
            </select>
            <button>Add Book</button>
        </form>
    )
}

export default BookForm;