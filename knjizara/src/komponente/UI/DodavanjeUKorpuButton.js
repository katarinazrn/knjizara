import { useContext } from "react";
import KorpaKontekst from "../../store/korpa-kontekst";

const DodavanjeUKorupuButton = props => {
    
    const korpa=useContext(KorpaKontekst);

    return (
        <button onClick={() => korpa.dodaj(props.knjiga)} className="btn btn-success text-center d-flex justify-content-center w-sm-auto w-100 ms-sm-auto">
            Dodaj u korpu
            <span className="material-icons text-white ps-2 ">
                shopping_cart
            </span>
        </button>
    )
}

export default DodavanjeUKorupuButton;