import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onHideCart}></div>
    );
}

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const ModalElement = document.getElementById('overlays');

const Modal = (props)=>{
    return (
        <Fragment >
            {ReactDOM.createPortal(<BackDrop onHideCart={props.OnHideCart}/>,ModalElement)}
            {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,ModalElement)}
        </Fragment>
    );
}
export  default Modal;