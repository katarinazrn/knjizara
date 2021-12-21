import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DodavanjeUKorupuButton from "../UI/DodavanjeUKorpuButton";
import Ucitavanje from "../UI/Ucitavanje";

const KnjigaDetalji = props => {
    const params = useParams();
    const navigate = useNavigate();
    const [knjiga, setKnjiga] = useState(null);

    useEffect(() => {
        document.title='Knjige';
        
        if (props.knjige && params.id) {
            setKnjiga(props.knjige.filter(k => k.id === +params.id)[0]);
        }
    }, [params.id, props.knjige]);

    if (!knjiga) {
        return <Ucitavanje />
    }

    return (
        <div className="row p-sm-5 p-sm-0">
            <div className="col-sm-3">
                <img className="w-100" src={require(`../../PODACI/KNJIGE/korice/${knjiga.korice}`)} alt={knjiga.korice} />
            </div>
            <div className="col-sm-9">
                <h1 className="text-center text-sm-start">{knjiga.naslov}</h1>
                <Link className="text-dark" style={{ textDecoration: 'none' }} to={`/autori/${knjiga.autor_id}`} >
                    <h3 className="text-secondary text-center text-sm-start">{knjiga.autor}</h3>
                </Link>
                <div className="row">
                    <div className="col-sm my-2 mt-1 mb-1 mb-sm-0 d-flex text-center text-sm-start flex-column mt-sm-auto">
                        <span>Broj strana: <b>{knjiga.broj_strana}</b></span>
                        <span>Godina izdanja: <b>{knjiga.godina_izdanja}.</b></span>
                        <span>Kategorije: {knjiga.kategorije.split(',').map((k, i) =>
                            <b key={i} style={{ cursor: 'pointer' }} onClick={() => navigate(`/knjige/${encodeURIComponent(k)}`)}>
                                {k.trim() + (knjiga.kategorije.split(',').length - 1 != i ? ', ' : '')}
                            </b>)}
                        </span>
                    </div>
                    <div className="col-sm">
                        <p className="text-danger h5 fw-bold text-center text-sm-end">{knjiga.cena.toFixed(2)} din.</p>
                        <DodavanjeUKorupuButton knjiga={knjiga} />
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