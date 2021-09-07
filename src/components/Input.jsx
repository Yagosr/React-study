import React, {useState, useEffect} from 'react';

import "./Input.css"

const Input = ({enviarDados, currentUser, editing, handleUpdate}) => {
    const [ newUser, setNewUser] = useState(currentUser);

        useEffect(() => {
            setNewUser(currentUser)

        },[currentUser])

     const onChangeUser = (event) => {
         setNewUser({...newUser, [event.target.name]: event.target.value})
     }

     const onSubmit = (event) => {
         event.preventDefault()
     }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input className="Edit-Email" value={newUser.email} name =  "email" placeholder= "Digite seu E-mail" onChange={onChangeUser} />
                <input className="Edit-Input"  value={newUser.firstName} name= "firstName" placeholder= "Nome Completo" onChange={onChangeUser}/>
                <input className="Edit-nasc" name= "age" placeholder= "Data de Nascimento" type="date" onChange={onChangeUser}/>
                <input className="Edit-tel" name= "phone" placeholder= "Celular" type="tel'" onChange={onChangeUser}/>
                <button className="editButton" onClick={() => !editing ?  enviarDados(newUser) : handleUpdate(newUser.id, newUser)} >{editing ? "Editar" : "Adicionar Novo"}  Usuário</button>
            </form>

        </>
    )
}

export default Input;