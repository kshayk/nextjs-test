import Author from '../model/Author';
import Error from "next/error";
import AuthorItem from "../Components/AuthorItem";
import {Fragment} from "react";
import AuthorForm from "../Components/AuthorForm";
import {useRouter} from "next/router";
import Container from "../Components/Container";

export default function AuthorsPage(props) {
    const router = useRouter();

    if (props.errCode) {
        return <Error statusCode={props.errCode} />
    }

    async function addAuthorHandler(authorData) {
        const response = await fetch('/api/author', {
            method: 'POST',
            body: JSON.stringify(authorData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        router.push('/authors');
    }

    return (
        <Fragment>
            <Container>
                <AuthorForm onAddAuthor={addAuthorHandler}/>
            </Container>
            <Container>
                <div>
                    {
                        JSON.parse(props.authors).map(author => {
                            return <AuthorItem key={author._id} id={author._id} firstName={author.firstName} lastName={author.lastName}/>
                        })
                    }
                </div>
            </Container>
        </Fragment>
    )
}

export async function getServerSideProps() {
    let authors = [];
    let errCode = null;
    try {
        authors = await Author.find();
    } catch (err) {
        errCode = 404;
    }

    return {
        props: {
            authors: JSON.stringify(authors),
            errCode
        }
    }
}
