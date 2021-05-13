import style from'./Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={style.navbar}>
         <div className={style.item}>
          Profile
        </div>
        <div className={style.item}>
          Messages
        </div>
        <div className={style.item}>
          News
        </div>
        <div className={style.item}>
          Music
        </div>
    </nav>
    );
}

export default Navbar;