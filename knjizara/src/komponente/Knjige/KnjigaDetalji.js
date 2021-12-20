import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const KnjigaDetalji = props => {
    const params = useParams();
    const [knjiga, postaviKnjigu] = useState(null);

    useEffect(() => {
        if (props.knjige && params.id) {
            postaviKnjigu(props.knjige.filter(k => k.id === +params.id)[0]);
        }
    }, [params.id, props.knjige]);

    if (!knjiga) {
        return <div>Ucitavanje...</div>
    }

    return (
        <div className="row p-5 p-sm-0">
            <div className="col-sm-4">
                <img className="w-100" src={require(`../../PODACI/KNJIGE/korice/${knjiga.korice}`)} />
            </div>
            <div className="col-sm-8">
                <h1 className="text-center text-sm-start">{knjiga.naslov}</h1>
                <Link className="text-dark" style={{ textDecoration: 'none' }} to={`/autori/${knjiga.autor_id}`} >
                    <h3 className="text-secondary text-center text-sm-start">{knjiga.autor}</h3>
                </Link>
                <div className="row">
                    <div className="col-sm my-2 mt-1 mb-1 mb-sm-0 d-flex text-center text-sm-start flex-column mt-sm-auto">
                        <span>Broj strana: <b>{knjiga.broj_strana}</b></span>
                        <span>Godina izdanja: <b>{knjiga.godina_izdanja}.</b></span>
                        <span>Kategorije: <b>{knjiga.kategorije.replace(', ',',').replace(',',', ')}.</b></span>
                    </div>
                    <div className="col-sm">
                        <p className="text-danger h5 fw-bold text-center text-sm-end">{knjiga.cena.toFixed(2)} din.</p>
                        <button className="btn btn-success text-center d-flex justify-content-center w-sm-auto w-100 ms-sm-auto">
                            Dodaj u korpu
                            <span className="material-icons text-white ps-2 ">
                                shopping_cart
                            </span>
                        </button>
                    </div>
                </div>
                <p className="text-justify border-top mt-3 pt-3" style={{ textAlign: 'justify' }}>
                    {knjiga.opis}
                </p>
            </div>
        </div>
    )
}

export default KnjigaDetalji;