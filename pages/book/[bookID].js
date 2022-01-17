import Book from '../../model/Book';
import Author from '../../model/Author';
import Error from "next/error";
import Style from "../../styles/Book.module.css";
import Container from "../../Components/Container";

export default function BookPage(props) {
    if (props.errCode) {
        return <Error statusCode={props.errCode} />
    }
    return (
        <Container>
            <div><span className={Style.title}>Book Name</span>: {props.bookName}</div>
            <div><span className={Style.title}>ISBN</span>: {props.isbn}</div>
            <div><span className={Style.title}>Author</span>: {props.author.firstName} {props.author.lastName}</div>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const [bookErrCode, book] = await getBook(context.params.bookID);

    let props = {errCode: bookErrCode}

    const [authorErrCode, author] = await getAuthor(book.author);

    props.errCode = authorErrCode;
    props.author = {};

    if (!props.errCode) {
        props.bookName = book.bookName;
        props.isbn = book.isbn;
        props.author.firstName = author.firstName;
        props.author.lastName = author.lastName;
    }

    return {
        props
    }
}

async function getBook(bookID) {
    let book;
    let errCode = null
    try {
        book = await Book.findById(bookID);
    } catch (err) {
        errCode = 404;
    }

    return [errCode, book];
}

async function getAuthor(authorID) {
    let author;
    let errCode = null;
    try {
        author = await Author.findById(authorID.toString());
    } catch (err) {
        errCode = 404;
    }

    return [errCode, author];
}
