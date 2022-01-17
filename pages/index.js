import {useRouter} from "next/router";
import Container from "../Components/Container";
import Link from "next/link";
import ThinContainer from "../Components/ThinContainer";
import Style from '../styles/Home.module.css'

export default function Home() {
    return (
        <Container className={Style.links}>
            <ThinContainer><Link href="/authors">Authors</Link></ThinContainer>
            <ThinContainer><Link href="/books">Books</Link></ThinContainer>
        </Container>
    )
}
