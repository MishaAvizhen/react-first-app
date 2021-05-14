import style from './Dialogs.module.css'
import DialogItem from "../dialogItem/DialogItem";
import Message from "../message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Misha"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Tom"},
        {id: 4, name: "Bob"},
    ]
    let dialogElement =
        dialogs.map(d => {
                return <DialogItem id={d.id} name={d.name}/>
            }
        )

    let messages = [
        {message: "Hello"},
        {message: "How are you?"},
        {message: "Bla bla bla"},
    ]
    let messageElement =
        messages.map(m => {
            return <Message message={m.message}/>
        });

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}

            </div>
        </div>
    )
}
export default Dialogs;