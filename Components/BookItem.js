import Style from "../styles/AuthorItem.module.css";
import {useRouter} from "next/router";
import ThinContainer from "./ThinContainer";

function BookItem({id, bookName, isbn}) {
    const router = useRouter();

    return (
        <ThinContainer>
            <span className={Style.title}>Book Name: </span> {bookName + " "}
            <span className={Style.title}>ISBN: </span> {isbn + " "}
            <button onClick={() => router.push(`/book/${id}`)}>Details</button>
        </ThinContainer>
    )
}

export default BookItem;