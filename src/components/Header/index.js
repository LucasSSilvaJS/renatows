import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

import { BsYoutube } from "react-icons/bs";

function Header() {
    return ( 
        <HeaderContainer>
            <h1>
                <BsYoutube size={40} color="red"/>                
                <span>/Renatows</span>
            </h1>
            <nav>
                <Link to="/">Pagina Inicial</Link>   
                <Link to="/about">Sobre</Link>   
            </nav>
        </HeaderContainer>
     );
}

export default Header;