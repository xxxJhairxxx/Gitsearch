
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import dark from '../../images/githubDark.svg' 
import white from '../../images/githubWhite.svg' 

export const userContext = React.createContext();

const HomeSearch = () => {

    const [ valor, setValor ] = useState("");

    let darkmode='false';
    let urlimg=dark;

    (darkmode=='true') ? urlimg=dark : urlimg=white;

    return (
            <div className="ContentHome">
 
                    <div className="LogoHome">
                        <img className="Home__img" src={urlimg} alt=""/>
                        <h1 style={{textAlign: "center",}}>Search</h1>
                    </div>
                    
                    <div className="FormSearch">
                                <input
                                className="Home__search"
                                onChange={(e) => setValor(e.target.value)}
                                
                                placeholder="Buscar..." />

                                <Link to={`/users/${valor}`} className="Home__link">
                                        Buscar
                                </Link>
                    </div>
                    

            </div>
    )
}

export default HomeSearch