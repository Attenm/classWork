import './oneRow.scss';
import {BiSolidPencil as Pencil} from 'react-icons/bi';
import { MdDelete as Delete} from "react-icons/md"
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { MyBook } from '../../Context';

export default function OneRow({id, title, author, year, publishing, pages, count}) {

    const {handlerDelete} = useContext(MyBook);

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{publishing}</td>
            <td>{pages}</td>
            <td>
                {count}
                <Button variant='primary' className="me-2 ms-5"><Pencil/></Button>
                <Button variant='danger' onClick={()=>handlerDelete(id)}><Delete/></Button>
            </td>
        </tr>
    )
}