import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU'></img>
            <span className={style.item}>
                Headers
            </span >
        </header>
    );
}

export default Header;