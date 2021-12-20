import { Link } from "react-router-dom";

const ListaAutora = props => {
    return (
        <div className="row row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-4 ">
            {props.autori.sort((a, b) => a.ime > b.ime).map(autor =>
                <Link to={' '+autor.id} key={autor.id} className="col d-flex justify-content-center">
                    <div className="card border-0 h-100 rounded-0 overflow-hidden card bg-dark text-white" style={{ width: '200px' }}>
                        <div className="overflow-hidden" style={{ width: '200px', height: '200px' }}>
                            <img style={{filter:'grayscale(0.1)'}} className="border-0 card-img img-fluid" src={require(`../../PODACI/AUTORI/slike/${autor.slika !== '' ? autor.slika : 'blank-profile-picture.webp'}`)} alt={autor.ime} />
                        </div>
                        <div className="card-img-overlay d-flex justify-content-center">
                            <p className="card-title fs-5  bg-dark opacity-75 position-absolute w-100 text-center  bottom-0 my-auto ">{autor.ime}</p>
                        </div>
                    </div>
                </Link>)}
        </div>
    )
}

export default ListaAutora;