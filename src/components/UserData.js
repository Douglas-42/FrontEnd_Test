import '../style/UserData.css';
import {FaTrash} from 'react-icons/fa';


function UserData(props){
    const {name, cpf, email, phone, index} = props;
    
    return(
        <div className="item">
            <p>{name}</p>
            <p>{email}</p>
            <p>{cpf}</p>
            <p>{phone}</p>
            <button onClick={()=>{props.deleteItem(index)}}><FaTrash /></button>
        </div>
    );
}
export default UserData;