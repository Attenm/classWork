import { createContext, useReducer } from "react";
import {myBooks} from './demo';
import useModal from './Hooks/useModal';

export const MyBook = createContext();

export default function Context({children}) {
    const {modal, handlerOpen, handlerClose} = useModal()

    const reducer = function(books, action) {
        switch(action.type){
            case 'ADD': return [...books, action.payload];
            case 'REMOVE': return books;
            case 'EDIT': return books;
            case 'SORT': return books.toSorted((a, b) => a[action.payload] < b[action.payload] && -1);
            case 'SEARCH': return books.filter(book => book.title.includes(action.payload));
            default : return books;
        }
    }

    const [books, dispatch] = useReducer(reducer, myBooks);
    const handlerSortable = function(field) {
        dispatch({type: 'SORT', payload: field})
    }

    const handlerSearch = function(str) {
        dispatch({type:'SEARCH', payload: str})
    }

    const handlerAdd = function([t, a, y, pb, pg, c]) {
        let tmp = {
            title: t.current.value,
            id: Date.now(),
            author: a.current.value,
            year: y.current.value,
            publishing: pb.current.value,
            pages: pg.current.value,
            count: c.current.value
        };
        dispatch({type:'ADD', payload: tmp});
        // handlerClose();
    }
    
    const value = { 
        books,
        modal,
        handlerOpen,
        handlerClose,
        handlerSortable,
        handlerSearch,
        handlerAdd,
    };
    return (
        <MyBook.Provider value = {value}> {children} </MyBook.Provider>
    )
}