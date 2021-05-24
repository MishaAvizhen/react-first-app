import React from "react";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogReducer";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))

        },
        sendNewMessage: () => {
            dispatch(sendNewMessageCreator())

        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;