import { Link, NavLink } from "react-router-dom";
import fb from '../sredstva/facebook.png';
import ig from '../sredstva/instagram.png';
import li from '../sredstva/linkedin.png';
import tw from '../sredstva/twitter.png';

const Futer = props => {
    return (
        <footer className='bg-secondary mb-0 w-100 navbar mt-auto row m-0 p-0'>
            <div className="col m-0 p-4 d-flex justify-content-sm-end">
                <NavLink to='/' className='text-light p-2'  style={{textDecoration:'none'}}>Naslovna</NavLink>
                <NavLink to='/knjige' className='text-light p-2'  style={{textDecoration:'none'}}>Knjige</NavLink>
                <NavLink to='/autori' className='text-light p-2'  style={{textDecoration:'none'}}>Autori</NavLink>
            </div>
            <div className="col m-0 p-4 d-flex justify-content-sm-start">
                <Link to='/'>
                    <img src={fb} alt='facebook' className="p-1" style={{width:'36px'}}/>
                </Link>
                <Link to='/'>
                    <img src={ig} alt='instagram'  className="p-1" style={{width:'36px'}}/>
                </Link>
                <Link to='/'>
                    <img src={li} alt='linkedin' className="p-1"  style={{width:'36px'}}/>
                </Link>
                <Link to='/'>
                    <img src={tw} alt='twitter' className="p-1"  style={{width:'36px'}}/>
                </Link>
            </div>
        </footer>
    )
}

export default Futer;