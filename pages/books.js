import Book from '../model/Book';
import Author from '../model/Author';
import Error from "next/error";
import {Fragment} from "react";
import {useRouter} from "next/router";
import BookForm from "../Components/BookForm";
import BookItem from "../Components/BookItem";
import Container from "../Components/Container";

export default function AuthorsPage(props) {
    const router = useRouter();

    if (props.errCode) {
        return <Error statusCode={props.errCode} />
    }

    async function addBookHandler(bookData) {
        const response = await fetch('/api/book', {
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        router.push('/books');
    }

    return (
        <Fragment>
            <Container>
                <BookForm onAddBook={addBookHandler} authors={props.authors}/>
            </Container>
            <Container>
                <div>
                    {
                        JSON.parse(props.books).map(book => {
                            return <BookItem key={book._id} id={book._id} bookName={book.bookName} isbn={book.isbn}/>
                        })
                    }
                </div>
            </Container>
        </Fragment>
    )
}

export async function getServerSideProps() {
    let books = [];
    let authors = [];
    let errCode = null;
    try {
        books = await Book.find();
        authors = await Author.find();
    } catch (err) {
        errCode = 404;
    }

    return {
        props: {
            books: JSON.stringify(books),
            authors: JSON.stringify(authors),
            errCode
        }
    }
}
