import Style from "../styles/AuthorItem.module.css";
import {useRouter} from "next/router";
import ThinContainer from "./ThinContainer";

function AuthorItem({id, firstName, lastName}) {
    const router = useRouter();

    return (
        <ThinContainer>
            <span className={Style.title}>First Name: </span> {firstName + " "}
            <span className={Style.title}>Last Name: </span> {lastName + " "}
            <button onClick={() => router.push(`/author/${id}`)}>Details</button>
        </ThinContainer>
    )
}

export default AuthorItem;