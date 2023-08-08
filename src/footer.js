import React from "react";
import "./style.css"

 
export default function Footer() {



    return (
        <>
            <div className="footer">
                <div className="footer-kontakt">
                    <h1>Kontakta oss:</h1>
                    <p>Mail: trafikskola@hotmail.com <br></br> Telefon: 072423528</p>
                </div>
                <div className="footer-tider">
                    <h1>Öppet-tider:</h1>
                    <p>Måndag - tisdag: 07:00 - 18:00</p>  
                </div>
                    <p className="peter">Hemsidan skapad av Peter Bsada</p>
            </div>
        </>
    )
}