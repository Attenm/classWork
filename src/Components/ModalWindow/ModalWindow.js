import { Button, Modal, Form, InputGroup } from "react-bootstrap"
import { useContext, useRef, } from "react";
import {MyBook} from '../../Context'

export default function ModalWindow() {
    const {modal, handlerClose, handlerAdd} = useContext(MyBook);

    const titleRef = useRef(null)
    const authorRef = useRef(null)
    const yearRef = useRef(null)
    const publishingRef = useRef(null)
    const pagesRef = useRef(null)
    const countRef = useRef(null)

    const book = [titleRef, authorRef, yearRef, publishingRef, pagesRef, countRef];

    if(!modal){
        return null
    }

    return (
        <Modal show={modal}>
            <Modal.Header closeButton onClick={handlerClose}>
                <Modal.Title>Додати нову книгу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>Назва книги</InputGroup.Text>
                            <Form.Control name="title" ref={titleRef} type='text' placeholder='Назва книги'/>
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>Автор</InputGroup.Text>
                            <Form.Control name="author" ref={authorRef} type='text' placeholder='Автор'/>
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>Рік видання</InputGroup.Text>
                            <Form.Control name="year" ref={yearRef} type='text' placeholder='Рік видання'/>
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>Видавництво</InputGroup.Text>
                            <Form.Control name="publishing" ref={publishingRef} type='text' placeholder='Видавництво'/>
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>К-сть сторінок</InputGroup.Text>
                            <Form.Control name="pages" ref={pagesRef} type='text' placeholder='К-сть сторінок'/>
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text>К-сть примірників</InputGroup.Text>
                            <Form.Control name="count" ref={countRef} type='text' placeholder='К-сть примірників'/>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>{handlerAdd(book)}}>
                    Add
                </Button>
                <Button variant="danger" onClick={handlerClose}>
                    Close
                </Button>
            </Modal.Footer>
      </Modal>
    )
}
