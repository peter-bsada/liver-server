import "../style.css"
import "./pris.css"

function Info() {
  
  return (
    <>
        <div className="container container-info">
            <div className="text-container">
                <h1>Kontakta Oss</h1>
            </div>
            <div className="smal-box">
                <div className="kontakt">
                    <h1>Kontakta oss:</h1>
                    <p>Mail: trafikskola@hotmail.com</p>
                    <p>Telefon: 072423528</p>
                    <p>adress: tensta alle 17</p>
                </div>   
                <div className="kontakt">
                    <h1>Öppettider:</h1>
                    <p>Måndag - tisdag: 07:00 - 18:00</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Info;
