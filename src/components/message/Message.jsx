import style from './../dialogs/Dialogs.module.css'

const Message = (props) => {
    let className = style.message;
    return (
        <div className={className}>{props.message}
        </div>
    )
}
export default Message;