import Style from '../styles/Container.module.css';

function Container({children, className}) {
    className = Style.container + ` ${className}`;

    return (
        <div className={className}>{children}</div>
    )
}

export default Container;
