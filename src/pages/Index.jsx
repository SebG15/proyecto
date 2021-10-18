import 'Styles/EstilosIndex.css'
import VelaMuestra1 from 'Media/jessica-delp-smNzhFQRktg-unsplash.jpg'
import VelaMuestra2 from 'Media/taisiia-shestopal-1dsf9yCXQAg-unsplash.jpg'
import VelaMuestra3 from 'Media/kate-hliznitsova-LMvuoYEFrYw-unsplash.jpg'






const Index = () => {
    return (
      
        <main className="fondo" > 
         <div class="container-all">
        <div class="container-cover">
            <div class="container-info-cover">
                <h1>BIENVENIDO A ANDRÓMEDA</h1>
                <p>Velas bonitas para ambientes tranquilos</p>
            </div>
        </div>

    </div>
        <div class="container-cards">
          <div class="cards">
            <img src={VelaMuestra1} alt=''/>
            <h4>Ilumina tus ambientes favoritos</h4>
          </div>
          <div class="cards">
            <img src={VelaMuestra2} alt=''/>
            <h4>Da tranquilidad </h4>
          </div>
        <div class="cards">
            <img src={VelaMuestra3} alt=''/>
            <h4>Decora y da luz a tu espacio</h4>
        </div>
        </div>   
     </main>
     
    )
}

export default Index
