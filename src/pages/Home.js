import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

import '../style/Home.css';

function Home(props){
    return(
      <>
      <Link className="floatingLink" to="/cadastros">Ver cadastros</Link>
      <div className="bp">
          <div className="overlay"></div>
      </div>
      <div className="infoForm">
        <h1>Lean Cadastro</h1>
        <form onSubmit={props.handleSubmit}>
          <InputField 
            iName="name" 
            iLabel="Nome completo" 
            iPattern="[a-zA-ZÀ-ž\s]+"
          />

          <InputField 
            iName="email" 
            iLabel="E-mail" 
            iPattern="[a-zA-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />

          <InputField 
            iName="cpf" 
            iLabel="CPF" 
            iPattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          />

          <InputField 
            iName="Telefone" 
            iLabel="phone" 
            iPattern="\(?[0-9]{2}\)?\s?[0-9]{4,5}[- ]?[0-9]{4}$"
          />
          <div className="buttons">
            <button type="sumbit">Cadastrar</button>
            <button disabled>Login <BsArrowRight className="arrow" /></button>
          </div>
        </form>
      </div>
      </>
    )
}
export default Home;