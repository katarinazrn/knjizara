import { useContext } from "react";
import { Link } from 'react-router-dom';
import KorpaKontekst from "../../store/korpa-kontekst";

const Korpa = props => {
    const korpa = useContext(KorpaKontekst);

    return (
        <div className="row">
            <h1>Korpa</h1>
            {korpa.brojKnjiga > 0 &&
                <div className="border-0 text-end my-3" colSpan={4} >
                    <span className='btn bg-primary text-white fw-bold mt-2 '>
                        Nastavi ka plaćanju
                    </span>
                </div>}
            <div className="tabele-responsive" >
                <table className="table table-sm align-middle">
                    <thead className="table-light">
                        <tr key='-1'>
                            <th scope="col">Proizvod</th>
                            <th scope="col">Cena</th>
                            <th scope="col" >Količina</th>
                            <th scope="col" className='text-end pe-2'>Suma</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {korpa.knjige.map(element =>
                            <tr key={element.knjiga.id} >
                                <td>
                                    <Link className="text-dark d-flex" style={{ textDecoration: 'none' }} to={`/knjige/${element.knjiga.id}/${element.knjiga.naslov}`} >
                                        <img style={{ width: '40px' }} src={require(`../../PODACI/KNJIGE/korice/${element.knjiga.korice}`)} alt='knjiga' />
                                        <span className='ms-2 fw-bold'>{element.knjiga.naslov} </span>
                                    </Link>
                                </td>
                                <td>
                                    <span>
                                        {element.knjiga.cena} din.
                                    </span>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <span className="btn text-white bg-info rounded-0 btn-info px-2 text-white fw-bolder  py-0" onClick={() => korpa.ukloni(element.knjiga)}>-</span>
                                        <span style={{ cursor: 'inherit' }} className='border rounded-0 btn px-2 py-0'>{element.kolicina}</span>
                                        <span className="btn  text-white bg-info rounded-0 btn-info px-2 text-white fw-bolder  py-0" onClick={() => korpa.dodaj(element.knjiga)}>+</span>
                                    </div>
                                </td>
                                <td className='text-end  pe-2'>{(element.kolicina * element.knjiga.cena).toFixed(2)} din.</td>
                                <td className="text-end">
                                    <span onClick={() => korpa.ukloni(element.knjiga, element.kolicina)}
                                        style={{ cursor: 'pointer' }}
                                        className="mx-1 p-0 btn fs-5  m-0  material-icons text-danger">
                                        delete
                                    </span>
                                </td>
                            </tr>)}
                        <tr className="border-0">
                            <td className='text-end p-0 m-0 border-0' colSpan={4}>
                                Ukupno: <b>{korpa.cena.toFixed(2)} din.</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Korpa;