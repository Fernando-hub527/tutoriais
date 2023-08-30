import { useState } from "react"
import "../css/components/UserModal.css"
import user from "../img/account_circle.svg"

export function UserModal(props){
    const [modal, setModal] = useState(false)
    return(
    <div>
        <img alt="icone de usuário" src={user} className="user_icon" onClick={() => setModal(true)}/>

        {modal && <div className="user_modal">
            <h1>{props.name}</h1>
            <button onClick={props.output}>Sair</button>
        </div>}
        {modal && <div onClick={() => setModal(false)} className="user_modal_background" ></div>}
    </div>)
}