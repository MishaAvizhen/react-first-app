import style from './Dialogs.module.css'
import DialogItem from "../dialogItem/DialogItem";
import Message from "../message/Message";
import React from "react";
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let newMessageOnClick = () => {
        props.store.dispatcher(sendNewMessageCreator());
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.store.dispatcher(updateNewMessageTextCreator(text));
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