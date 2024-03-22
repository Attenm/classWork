
import {useState} from 'react';

export default function useModal() {
    const [modal, setModal] = useState(null)
    
        const handlerOpen = function() {
            setModal(true);
        }
    
        const handlerClose = function() {
            setModal(null);
        }
        
  return {handlerOpen, handlerClose, modal}
}


