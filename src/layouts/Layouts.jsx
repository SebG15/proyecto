import Header from "components/Header";
import Footer from "components/Footer";

import 'Styles/estilos.css'

const Layouts = ({children}) => {
    return (
        <div className="maincontainer">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layouts
