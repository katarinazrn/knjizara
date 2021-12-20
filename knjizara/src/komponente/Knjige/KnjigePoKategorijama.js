import { Outlet } from 'react-router-dom';
import Zanrovi from './Zanrovi';

const KnjigePoKategorijama = props => {
    return (
        <div className='row'>
            <div className='col-md-auto'>
                <Zanrovi />
            </div>
            <Outlet />
        </div>)
}

export default KnjigePoKategorijama;