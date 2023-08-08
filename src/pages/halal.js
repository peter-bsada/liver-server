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
			<div className='rest'>
				<h1>Om oss</h1>
				<div className='omOss-div'>
					<img className='om-oss' src={omOss} alt='Logo' />
					<p>
						Vi är stolta att presentera vår nyöppnade trafikskola! Med erfarna
						instruktörer och moderna undervisningsmetoder erbjuder vi en
						spännande och säker körupplevelse. Vårt mål är att hjälpa dig att
						bli en självsäker förare. Boka din första lektion idag och påbörja
						din resa mot körkortet hos oss!
					</p>
				</div>
      </div>
				<div className='tjänst-div'>
					<h1>Våra tjänster</h1>

					<div className='test'>
						<div className='handledar'>
							<img className='images-kurs' src={kurs} alt='Logo' />
							<h2>Handledarkurs</h2>
						</div>
						<div className='risk1'>
							<img className='images-risk' src={risk} alt='Logo' />
							<h2>Risk 1</h2>
						</div>
						<div className='risk2'>
							<img className='images-risk2' src={risk2} alt='Logo' />
							<h2>Risk 2</h2>
						</div>
					</div>
				</div>
				<div className='footer'>
					<div className='footer-kontakt'>
						<h1>Kontakta oss:</h1>
						<p>
							Mail: trafikskola@hotmail.com <br></br> Telefon: 072423528
						</p>
						<p>adress: ten+</p>
					</div>
					<div className='footer-tider'>
						<h1>Öppettider:</h1>
						<p>Måndag - tisdag: 07:00 - 18:00</p>
					</div>
					<p className='peter'>Hemsidan skapad av Peter Bsada</p>
				</div>
		</>
	);
}

export default Home;
