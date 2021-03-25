import { useEffect, useState } from "react"
import '../style/Note.css';

function Note(props){
    const [show,setShow] = useState(false);
    const {registerCount} = props;
    function ShowNote(){
        setShow(true);
        setTimeout(()=>{
            setShow(false);
        }, 2000);
    }
    useEffect(()=>{
        if(registerCount === 0) return;
        ShowNote();
    },[registerCount])
    return(
        <div className={`note ${!show && 'hide'}`}>
            <p>{props.text}</p>
        </div>
    )
}
export default Note;