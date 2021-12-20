import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import KorpaKontekst from "../../store/korpa-kontekst";

const KorpaHeder = props => {
    
    const korpa=useContext(KorpaKontekst);
    const navigate=useNavigate();

    return (
        <button onClick={()=>navigate('/korpa')} 
            className={`btn ms-md-auto me-auto d-flex ms-1 rounded-pill btn-info ${korpa.azuriranjeKorpe ? 'px-4 py-2 fade text-light' :'text-white '}`} >
            <span className="material-icons my-auto mx-1 fs-6">
                shopping_cart
            </span>
            <span className="fs-6 fw-bold rounded-pill px-2">{korpa.brojKnjiga}</span>
        </button>
        )
}

export default KorpaHeder;