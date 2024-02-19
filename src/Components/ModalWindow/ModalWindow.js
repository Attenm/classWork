import { Button, Modal } from "react-bootstrap"
import { useContext } from "react";
import {MyBook} from '../../Context'

export default function ModalWindow() {
    const {modal, handleOpen, handleClose} = useContext(MyBook);
    if(!modal) {
        return null;
    }
    return (
        <Modal onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Додати нову книгу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Тут буде форма для додавання нового запису
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleOpen}>
                    Open
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
      </Modal>
    )
}
