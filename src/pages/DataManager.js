import '../style/DataManager.css';
import UserData from '../components/UserData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DataManager(props){
    const [data,setData] = useState([]);
    const {count, loadInfo} = props;
    useEffect(()=>{
        setData(loadInfo());
    },[count,loadInfo])
    return(
      <div className="background">
      <div className="container">
        {(data.length>0)?(<><h1>Dados cadastrados</h1>
        <div className="items">
            <div className="header">
                <p>Nome</p>
                <p>E-mail</p>
                <p>CPF</p>
                <p>Telefone</p>
                <div></div>
            </div>
            {
                data.map((item,index) =>{
                    return(
                        <UserData 
                            name={item.name}
                            cpf={item.cpf} 
                            email={item.email}
                            phone={item.phone}
                            index={index}
                            key={index}
                            deleteItem={props.deleteItem}
                        />
                    )
                })
            }
        </div>
        <Link to='/'>Cadastrar</Link>
        </>)
        :
        (
        <div className='emptyData'>
            <p>Não há dados salvos.</p>
            <Link to='/'>Cadastrar</Link>
        </div>
        )}
      </div>
      </div>
    )
}
export default DataManager;