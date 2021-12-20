import ZANROVI from '../../PODACI/KNJIGE/zanrovi.json';
import './Knjige.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Zanrovi = props => {

    const [zanrovi, postaviZanrove] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let z = ZANROVI;
        z = z.sort((a, b) => a.ime > b.ime);
        postaviZanrove(z);
    }, [])

    return (
        <div className='p-2 m-0'>
            <select className='d-md-none form-select' >
                <option value='sve kategorije' key={'-1'} onClick={() => navigate('')}>Sve Kategorije</option>
                {zanrovi.map(zanr => {
                    let link = encodeURIComponent(zanr.ime);
                    return <option key={zanr.id} onClick={() => navigate(link)} value={link}>{zanr.ime} </option>
                })}
            </select>

            <ul className='pe-1 d-none d-md-block m-0 list-group border-end'>
                <h4>Kategorije</h4>
                {zanrovi.map(zanr => {
                    let link = encodeURIComponent(zanr.ime);
                    return <NavLink to={'/kategorije/' + link} key={zanr.id}
                        className='list-group-item list-group-item-action p-1 border-0' style={{ cursor: 'pointer' }}>
                        {zanr.ime}
                    </NavLink>
                })}
            </ul>
        </div>
    )
}

export default Zanrovi;