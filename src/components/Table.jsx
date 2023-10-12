import React from "react"

import "./Table.css"

const Table = ({userList, handleEdit, handleRemove}) => {
    return (
        <>
        <table className="styleTable">
            <thead >
                <tr className="styleDados">
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>

            
                <tbody className="styleBody">
            {
                    userList.map((user) => (
                        <tr className="rowTable" key={user.id}> 
                        <div className="content">
                            <td>
                                 {user.firstName}
                            </td>

                            <td className="styleTableEmail">
                                 {user.email}
                            </td>
                            <td className="styleTableAge">
                                 {user.age}
                            </td>
                            <td className="styleTablePhone">
                                 {user.phone}
                            </td>
                        </div>
                            <div className="buttons">
                                <td>
                                    <button className="styleEdit" type="button" onClick={() => handleEdit(user)}>Editar</button>

                                    <button className="styleRemove" type="button" onClick={() => handleRemove(user.id)}>Remover</button>
                                </td>
                            </div>

                            
                        </tr>
                    ))
                }
            </tbody>
            
        </table>

        </>
    )
}

export default Table;



