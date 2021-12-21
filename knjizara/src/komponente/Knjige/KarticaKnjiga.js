import { Link } from "react-router-dom";
import DodavanjeUKorupuButton from "../UI/DodavanjeUKorpuButton";

const KarticaKnjiga = props => {

    return (
        <div className="col">
            <div className="card h-100 border-0 m-3 m-sm-0 rounded-0 ">
                <Link className='ratio' style={{"--bs-aspect-ratio": '154%'}} to={`/knjige/${props.knjiga.id}/${props.knjiga.naslov}`} >
                    <img className="card-img-top mt-auto " src={require(`../../PODACI/KNJIGE/korice/${props.knjiga.korice}`)} alt={props.knjiga.naslov} />
                </Link>
                <div className='card-body text-center m-0 p-0 '>
                    <Link className="text-dark" style={{ textDecoration: 'none' }} to={`/knjige/${props.knjiga.id}/${props.knjiga.naslov}`} >
                        <p className="card-text m-0 p-0 pt-1 fw-bold">{props.knjiga.naslov}</p>
                    </Link>
                    <Link className="text-dark" style={{ textDecoration: 'none' }} to={`/autori/${props.knjiga.autor_id}`} >
                        <p className="card-text m-0 text-secondary">{props.knjiga.autor}</p>
                    </Link>
                    <p className="card-text m-0  text-danger">{props.knjiga.cena.toFixed(2)}</p>
                </div>
                <div className="card-footerm-0 p-0">
                    <DodavanjeUKorupuButton knjiga={props.knjiga} />
                </div>
            </div>
        </div>
    )
}

export default KarticaKnjiga;