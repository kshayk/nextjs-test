import Style from "../styles/AuthorItem.module.css";
import {useRef} from "react";

function AuthorForm({onAddAuthor}) {
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;

        const authorData = {
            first_name: firstName,
            last_name: lastName
        };

        onAddAuthor(authorData);
    }

    return (
        <form onSubmit={submitHandler}>
            Author First Name: <input required type="text" id="firstName" placeholder="first name" ref={firstNameRef} />
            Author Last Name: <input required type="text" id="lastName" placeholder="last name" ref={lastNameRef}/>
            <button>Add author</button>
        </form>
    )
}

export default AuthorForm;