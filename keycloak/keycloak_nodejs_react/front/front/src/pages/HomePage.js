import { UserModal } from "../components/UserModal";
import React, { useEffect, useState } from 'react';
import { useKeycloak } from "@react-keycloak/web"
import { CardTheme } from "../components/CardTheme";
import "../css/page/HomePageStyle.css"

/**
 1.19 horas
 */
export function HomePage(){
    const {keycloak} = useKeycloak()
    const [themes, setThemes] = useState([])

    const updateThemes = async () => {
        const response = await request("http://localhost:3333/thems", keycloak.token)
        if(!response.ok) return showError()
        const themes = await response.json()
        setThemes(themes)
    }

    useEffect(() => {
        updateThemes()
    }, [])

    const cardsThemes = themes.map((theme) => <CardTheme key={theme.id} name = {theme.name} />)
    return(
        <div className="home_page">
            <UserModal output={keycloak.logout} name={"Fernando"}/>
            <h1>Escolha um grupo de estudo</h1>
            <div className="home_page_cards">{cardsThemes}</div>
        </div>
    )
}

function showError(error){
    console.log(`erro ${error}`)
}

function request(url, token){
    return  fetch(url, {headers: new Headers({"Content-Type": "application/json", "authorization": token}), method: 'GET'})
}