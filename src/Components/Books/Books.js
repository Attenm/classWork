import './books.scss';
import { Container, Row, Col, Table } from "react-bootstrap";
import { useContext } from 'react';
import {MyBook} from '../../Context';
import OneRow from '../OneRow/OneRow';
import { FaSortAmountDown } from "react-icons/fa";

import HeaderBooks from '../HeaderBooks/HeaderBooks';

export default function Books() {

    const {books, handlerOpen, handlerSortable} = useContext(MyBook);

    return (
        <Container>
            <HeaderBooks books={books} handlerOpen={handlerOpen} />
            <Row>
                <Col>
                   <Table striped bordered hover responsive>
                       <thead className='table-dark'>
                        <tr>
                            <th>№</th>
                            <th>Назва книги <FaSortAmountDown onClick={()=>{handlerSortable('title')}} /></th>
                            <th>Автор <FaSortAmountDown onClick={()=>{handlerSortable('author')}} /></th>
                            <th>Рік видання <FaSortAmountDown onClick={()=>{handlerSortable('year')}} /></th>
                            <th>Видавництво <FaSortAmountDown onClick={()=>{handlerSortable('publihing')}} /></th>
                            <th>К-сть сторінок <FaSortAmountDown onClick={()=>{handlerSortable('pages')}} /></th>
                            <th>к-сть примірників <FaSortAmountDown onClick={()=>{handlerSortable('count')}} /></th>
                        </tr>
                       </thead>
                       <tbody>
                            {
                                books.map(book => {
                                    return <OneRow key={book.id} {...book}/>
                                })
                            }
                       </tbody>
                   </Table>
                </Col>
            </Row>
        </Container>
    )
}