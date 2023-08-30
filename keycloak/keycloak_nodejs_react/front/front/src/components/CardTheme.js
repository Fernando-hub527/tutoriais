import "../css/components/CardThemStyle.css"
import { successfulOperation } from "./Alerts"

export function CardTheme(props){
    const registerInTheClass = () => {
        successfulOperation('Você está cadastrado na turma')
    }
    return(<div onClick={registerInTheClass} className="card">
        <h2 className="card_title">{props.name}</h2>
    </div>)
}


