import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import KarticaKnjiga from "../Knjige/KarticaKnjiga";
import Lista from "../Knjige/Lista";

const AutorDetalji = props => {

    const [autor, postaviAutora] = useState(null);
    const [knjige, postaviKnjige] = useState([]);
    const params = useParams();

    useEffect(() => {

        if (props.autori && params.id && props.knjige) {
            postaviAutora(props.autori.filter(a => a.id == +params.id)[0]);
            postaviKnjige(props.knjige.filter(k => k.autor_id == +params.id));
        }

    }, [props.autori, props.knjige, params.id]);

    if (!autor) {
        return <div>Ucitavanje...</div>
    }

    return (
        <div className='row'>
            <h1>{autor.ime}</h1>
            <div className="border-bottom pb-3">
                <div className="col-12 col-sm-3 float-start me-2 d-flex justify-content-center"  >
                    <img className="img-fluid" src={require(`../../PODACI/AUTORI/slike/${autor.slika}`)} alt={autor.ime} />
                </div>
                <p className="m-3 m-sm-1 mt-sm-0" style={{ textAlign: 'justify' }}>
                    {autor.opis}
                </p>
            </div>
            {knjige.length > 0 &&
                <div className="row">
                    <Lista knjige={knjige} />
                </div>
            }
        </div>
    )
}

export default AutorDetalji;