import "../style.css"
import "./pris.css"

function Pris() {
  
  return (
    <>
        <div className="container">
            <div className="text-container">
              <h1>Hitta det körkortspaketet som passar just dig</h1>
              <p>Nedan kan du se vad vi erbjuder och våra ständigt låga priser. Undrar du över något så tveka inte att höra av dig till oss.</p>
            </div>
            <div className="firstRow">
              <div className="pris-paket">
                <h2 className="paket-small">Small</h2>
                <h1>3</h1>
                <p>Körlektion 70 min</p>
                <h4 className="h4-text">Riskettan (obligatorisk kurs)</h4>
                <h4 className="h4-text">Komplett digital bokpaket</h4>
                <h4 className="h4-text">ph4Obegränsat med online-tester</h4>
                <h3>4.900 kr</h3>
              </div>        
              <div className="pris-paket">
                <h2 className="paket-small">Medium</h2>
                <h1>5</h1>
                <p>Körlektion 70 min</p>
                <h4 className="h4-text">Riskettan (obligatorisk kurs)</h4>
                <h4 className="h4-text">Komplett digital bokpaket</h4>
                <h4 className="h4-text">ph4Obegränsat med online-tester</h4>
                <h3>7.400 kr kr</h3>
              </div>
              <div className="pris-paket">
                <h2 className="paket-small">Large</h2>
                <h1>9</h1>
                <p>Körlektion 70 min</p>
                <h4 className="h4-text">Riskettan (obligatorisk kurs)</h4>
                <h4 className="h4-text">Komplett digital bokpaket</h4>
                <h4 className="h4-text">ph4Obegränsat med online-tester</h4>
                <h3>11.800 kr</h3>
              </div>
    
            </div>
        </div>
    </>
  );
}

export default Pris;
