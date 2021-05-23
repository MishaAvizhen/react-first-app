import style from './Dialogs.module.css'
import DialogItem from "../dialogItem/DialogItem";
import Message from "../message/Message";
import React from "react";
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../redux/store";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let newMessageOnClick = () => {
        props.sendNewMessage();
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }
    let newMessageText = state.newMessageText;

    let dialogElement =
        state.dialogs.map(d => {
                return <DialogItem id={d.id} name={d.name}/>
            });

    let messageElement =
        state.messages.map(m => {
            return <Message id={m.id} message={m.message} />
        });

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div>
                    <textarea value={newMessageText}
                              placeholder="Enter message"
                              onChange={onNewMessageChange}>
                </textarea>
                </div>
                <div>
                    <button onClick={newMessageOnClick}> Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;