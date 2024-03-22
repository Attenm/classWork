import { IoNewspaperSharp } from "react-icons/io5";
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import {MyBook} from '../../Context';
import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function HeaderBooks(){

  const searchField = useRef(null);
  const {handlerOpen, handlerSearch} = useContext(MyBook)

  return (
    <Row className='header__books'>
        <Col xs={10}>
            <h2>Список книг</h2>
        </Col>
        <Col xs={2} >
            <Button variant="primary" onClick={handlerOpen}>
              <IoNewspaperSharp/>
            </Button>
            <InputGroup>
              <Form.Control type='text' placeholder='Назва книги' ref={searchField}/>
              <Button variant="primary" onClick={() => handlerSearch(searchField.current.value)}>
                <FaSearch />
              </Button>
            </InputGroup>
        </Col>
    </Row>
  )
}
