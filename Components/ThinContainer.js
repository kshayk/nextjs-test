import Style from '../styles/ThinContainer.module.css';

function ThinContainer({children}) {
    return (
        <div className={Style.container}>{children}</div>
    )
}

export default ThinContainer;