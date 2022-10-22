import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div onClick={props.hideCart} className={classes.backdrop} />
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const Modal =props=>{
    return <div>
 {ReactDOM.createPortal(<Backdrop hideCart={props.onHideCart}/>, document.getElementById('overlay'))}
 {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay'))}    
    </div>
}
export default Modal;