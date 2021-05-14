import style from './../dialogs/Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let className = style.dialog;
    let path = "/dialogs/" + props.id;
    return (
        <div className={className}>
            <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;