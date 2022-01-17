import Author from '../../model/Author';
import Error from "next/error";
import Container from "../../Components/Container";

export default function AuthorPage(props) {
    if (props.errCode) {
        return <Error statusCode={props.errCode} />
    }
    return (
        <Container>
            <div>First Name: {props.firstName}</div>
            <div>Last Name: {props.lastName}</div>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const authorID = context.params.authorID;
    let author = {firstName: null, lastName: null};
    let errCode = null;
    try {
        author = await Author.findById(authorID);
    } catch (err) {
        errCode = 404;
    }

    return {
        props: {
            firstName: author.firstName,
            lastName: author.lastName,
            errCode
        }
    }
}
