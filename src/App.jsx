import React, {useState} from 'react'
import "./App.css"
import Header from "./components/Header"
import Input from "./components/Input"
import Table from "./components/Table"

const App = () => {
  const initialFormState = {
    id: null,
    firstName: '',
    email: '',
  }
  
  const [userList, setUserList] = useState([]) 
  const [currentUser, setCurrentUser] = useState(initialFormState) 
  const [editing, setEditing] = useState(false)

  const handleSubmit = newUser => {
    setUserList(userList => [...userList, newUser]);
    newUser.id = userList.length + 1
    setCurrentUser({
      id:null,
      email:'',
      firstName:'',
    })
  }

  const handleUpdate = (id, handleUpdate) => {
    setUserList(userList.map(newUser=> (newUser.id === id ? handleUpdate : newUser)))
    setEditing(false)
    setCurrentUser({
      id: null,
      email: '',
      firstName: '',
    })
  }
  
  const handleEdit = userToEdit => {
    setEditing(true);    
     const userSelected = userList.find(user => user.id === userToEdit.id);
     setCurrentUser(userSelected);
  
       }

       const handleRemove = id => {
         setEditing(false);
         setUserList(userList.filter(newUser => newUser.id !== id));
         setCurrentUser({
           id:null,
           email: '',
           firstName: '',
         });
       }

  return(
  <div className="FormContainer">
    <Header />
    <div className="content">
        <div className="left">
          <h2>{editing ? "Editar" : "Adicionar novo"} <span> Usuario</span></h2>
          <Input handleUpdate={handleUpdate} editing={editing} currentUser={currentUser} enviarDados={handleSubmit} />
        </div>

        <div className="right">
          <h2>Lista De <span>Usuarios Cadastrados</span></h2>
          <Table handleRemove={handleRemove}  handleEdit={handleEdit} userList={userList}  />
        </div>
    </div>
  </div>
  
  )};

export default App;