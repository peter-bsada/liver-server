import "../style.css"
import "./pages.css"
import hero from './images/hero-images.jpg'; 
import omOss from './images/om-oss.jpg'; 
import kurs from './images/Handledarkurs.jpg'; 
import risk from './images/risk1.jpg'; 
import risk2 from './images/risk2.jpg'; 



function Home() {
  

  return (
		<>
			<div className='container-hero'>
					<img className='images-hero' src={hero} alt='Logo' />
					<div className='hero-text'>
						<h1>Körkortsaspirant</h1>
						<p>Vi hjälper dig att ta körkortet snabbt</p>
					</div>
			</div>
      <div className="container-omOss">
        <h1>Om Oss</h1>
        <div className="omOss-box">
          <div className="images-omOss">
					  <img className='omOss-bild' src={omOss} alt='Logo' />
          </div> 
          <div className="text-omOss">
            <p>
              Vi är stolta att presentera vår nyöppnade trafikskola! Med erfarna
              instruktörer och moderna undervisningsmetoder erbjuder vi en
              spännande och säker körupplevelse. Vårt mål är att hjälpa dig att
              bli en självsäker förare. Boka din första lektion idag och påbörja
              din resa mot körkortet hos oss!
            </p>          
          </div>
        </div>
      </div>
      <div className="tjänst-box">
        <h1 className="tjänstText">Våra tjänster</h1>
        <div className="row-tjänst">
          <div className="tjänst">
            <img className='images-kurs' src={kurs} alt='Logo' />
            <h1 className="handledarkurs">Handledarkurs</h1>
          </div>
          <div className="tjänst">
            <img className='images-kurs' src={risk} alt='Logo' />
            <h1 className="handledarkurs">Risk 1</h1>
          </div>
          <div className="tjänst">
            <img className='images-kurs' src={risk2} alt='Logo' />
            <h1 className="handledarkurs">Risk 2</h1>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className='footer-kontakt'>
            <h1>Kontakta oss:</h1>
            <p>
              Mail: trafikskola@hotmail.com <br></br> Telefon: 072423528
            </p>
            <p>adress: ten+</p>
          </div>
          <div className='footer-kontakt'>
						<h1>Öppettider:</h1>
						<p>Måndag - tisdag: 07:00 - 18:00</p>
					</div>
      </div>
		</>
	);
}

export default Home;
