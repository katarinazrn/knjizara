import { Link, NavLink } from 'react-router-dom';
import knjige from '../../PODACI/KNJIGE/knjige.json';
import KarticaKnjiga from '../Knjige/KarticaKnjiga';

const Naslovna = props => {

  return (
    <div>
      <div id="carouselExampleControls" className="carousel carousel-light slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"
            style={{
              backgroundImage: `url(${require('../../PODACI/KNJIGE/izdovjeno/bg3.jpg')})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              backdropFilter: 'greyscale(0.5)'
            }}>
            <div className='d-flex justify-content-center'>
              <a href='#toplista' >
                <img className='p-2' style={{ maxHeight: '300px', width: 'auto' }}
                  src={require('../../PODACI/KNJIGE/izdovjeno/top.png')} alt="..." />
              </a>
              <h2 className='text-center fw-bold col-4 text-light my-auto'>
                Nedeljna top lista
              </h2>
            </div>
          </div>
          <div className="carousel-item"
            style={{
              backgroundImage: `url(${require('../../PODACI/KNJIGE/izdovjeno/bg8.jpg')})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              backdropFilter: 'greyscale(0.5)'
            }}>
            <div className='d-flex justify-content-center'>
              <h1 className='text-center fw-bold col-4 my-auto' style={{ color: 'rgb(6, 6, 78)' }}>
                Dečja knjiga meseca
              </h1>
              <NavLink to={`/knjige/${knjige[38].id}/${knjige[38].naslov}`} >
                <img className='p-3' style={{ maxHeight: '300px', width: 'auto' }}
                  action='toplista'
                  src={require(`../../PODACI/KNJIGE/korice/${knjige[38].korice}`)} alt="..." />
              </NavLink>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id='noviNaslovi' className='my-4'>
        <h2 className='text-center'>Novi naslovi</h2>
        <div className='row justify-content-center p-3'>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[0]} />
          </div>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[3]} />
          </div>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[6]} />
          </div>
        </div>
      </div>

      <div id='toplista' className='my-4'>
        <h2 className='text-center'>Nedeljna top lista</h2>
        <div className='row justify-content-center p-3'>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[37]} />
          </div>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[11]} />
          </div>
          <div className='col-sm-3'>
            <KarticaKnjiga knjiga={knjige[36]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Naslovna;