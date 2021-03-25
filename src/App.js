import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Note from './components/Note';
import Home from './pages/Home';
import DataManager from './pages/DataManager';

import './App.css';


function App() {
  const [registerCount,setRegisterCount] = useState(0);

  function handleSubmit(event){
    event.preventDefault();
    if (typeof(Storage) === "undefined") {
      alert("Não foi possível salvar!");
      return;
    }
    const newRegistration = {};
    newRegistration.name = event.target[0].value;
    newRegistration.email = event.target[1].value;
    newRegistration.cpf = event.target[2].value;
    newRegistration.phone = event.target[3].value;
    SaveInfo(newRegistration);
    ClearAllFormFields();
  }
  function ClearAllFormFields(){
    document.querySelector('form').reset();
  }
  function SaveInfo(_newRegistration){
    let registrations = [];
    setRegisterCount(registerCount+1);
    if (localStorage.savedRegisters) {
      registrations = JSON.parse(localStorage.savedRegisters);
    }
    registrations.push(_newRegistration);
    localStorage.savedRegisters = JSON.stringify(registrations);
  }
  function loadInfo(){
    let registrations = [];
    if (localStorage.savedRegisters) {
      registrations = JSON.parse(localStorage.savedRegisters);
    }
    return registrations;
  }
  function deleteItem(index){
    let allItems = loadInfo();
    if(allItems.length <= 0) return;
    allItems.splice(index, 1);
    localStorage.savedRegisters = JSON.stringify(allItems);
    setRegisterCount(registerCount-1);
  }

  return (
    <div className="App">
      <Note text={(window.location.pathname === '/cadastros')?'Deletado com sucesso!':'Cadastrado com sucesso!'}
            registerCount={registerCount} 
      />
      <Switch>
        <Route path="/cadastros" component={() => <DataManager count={registerCount} loadInfo={loadInfo} deleteItem={deleteItem} />} />
        <Route path="/" component={()=> <Home handleSubmit={handleSubmit}/>} />
      </Switch>
    </div>
  );
}

export default App;
