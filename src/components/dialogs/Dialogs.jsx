import style from './Dialogs.module.css'
import DialogItem from "../dialogItem/DialogItem";
import Message from "../message/Message";
import React from "react";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let newMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }


    let dialogElement =
        props.state.dialogs.map(d => {
                return <DialogItem id={d.id} name={d.name}/>
            }
        )

    let messageElement =
        props.state.messages.map(m => {
            return <Message message={m.message}/>
        });

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <textarea ref={newMessageElement}>
                </textarea>
                <div>
                    <button onClick={newMessage}> send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;