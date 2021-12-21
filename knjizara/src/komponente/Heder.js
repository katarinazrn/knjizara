import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import Logo from '../logo image.png';
import { useRef } from 'react';
import KorpaHeder from "./Kupovina/KorpaHeder";

const Heder = props => {
    const terminZaPretragu = useRef();

    return (
        <div className='navbar navbar-expand-md navbar-light bg-light shadow-sm fixed-top '>
            <div className='container-fluid'>
                <div className='nav-item'>
                    <Link to='/' className='nav-link navbar-brand'>
                        <img className='p-0 m-0 ' alt='logo' src={Logo} style={{ maxWidth: '40px' }} />
                        <span className='ps-2 pe-0 '>novela</span>
                    </Link>
                </div>
                <button className='navbar-toggler border-0' data-bs-toggle='collapse' data-bs-target="#navbarContent" aria-controls='navbarContent' aria-expanded='false'>
                    <span className="material-icons ">
                        menu
                    </span>
                </button>
                <div className='collapse navbar-collapse' id='navbarContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link'>Naslovna</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/knjige' className='nav-link'>Knjige</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/autori' className='nav-link'>Autori</NavLink>
                        </li>
                        <li className='nav-item'>
                            <form onSubmit={e => { props.pretrazi(e, terminZaPretragu.current.value); terminZaPretragu.current.value = '' }} className='form-control d-flex'>
                                <input ref={terminZaPretragu} type='search' className='h-100 border-0' style={{ outline: 'none' }} placeholder='Pretražite sajt...' />
                                <button type='submit' className="material-icons opacity-50 border-0 bg-transparent" style={{ cursor: 'pointer' }}>
                                    search
                                </button>
                            </form>
                        </li>
                    </ul>
                    <KorpaHeder />
                </div>
            </div>
        </div>
    )
}

export default Heder;