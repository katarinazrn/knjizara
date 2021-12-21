import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lista from "../Knjige/Lista";
import NijePronadjeno from "../UI/NijePronadjeno";
import Ucitavanje from "../UI/Ucitavanje";

const AutorDetalji = props => {

    const [autor, setAutor] = useState(null);
    const [greska, setGreska] = useState(false);
    const [knjige, setKnjige] = useState([]);
    const params = useParams();

    useEffect(() => {

        document.title = 'Autor';
        setGreska(false);

        if (props.autori && params.id && props.knjige) {
            setAutor(props.autori.filter(a => a.id == +params.id)[0]);
            setKnjige(props.knjige.filter(k => k.autor_id == +params.id));

            if (props.autori.filter(a => a.id == +params.id).length < 1) {
                setGreska(true);
            }
        }

    }, [props.autori, props.knjige, params.id]);

    if(greska){
        return <NijePronadjeno />
    }

    if (!autor) {
        return <Ucitavanje />
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