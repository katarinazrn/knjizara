import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Heder from './komponente/Heder';
import Kontejner from './komponente/UI/Kontejner';
import { useState, useEffect, Fragment } from 'react';
import KnjigePoKategorijama from './komponente/Knjige/KnjigePoKategorijama';
import ListaKnjiga from './komponente/Knjige/ListaKnjiga';
import Naslovna from './komponente/Naslovna/Naslovna';
import KnjigaDetalji from './komponente/Knjige/KnjigaDetalji';
import AutorDetalji from './komponente/Autori/AutorDetalji';
import ListaAutora from './komponente/Autori/ListaAutora';

import KNJIGE from './PODACI/KNJIGE/knjige.json';
import AUTORI from './PODACI/AUTORI/autori.json';
import Korpa from './komponente/Kupovina/Korpa';
import Futer from './komponente/Futer';
import NijePronadjeno from './komponente/UI/NijePronadjeno';

const App = () => {

  const [sveKnjige, setSveKnjige] = useState([]);
  const [sviAutori, setSviAutori] = useState([]);

  const [rezultatPretrage, setRezultatPretrage] = useState([]);
  const [terminZaPretragu, setTermin] = useState('');

  const [proizvodiUKoripi, setProizvodi] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setSveKnjige(KNJIGE);
    setSviAutori(AUTORI);
  }, []);

  const pretrazi = (e, termin) => {
    e.preventDefault();
    setTermin(termin);

    let knjige = [];

    termin = oLatinica(termin.toLowerCase());

    sveKnjige.forEach(knjiga => {

      if (oLatinica(knjiga.naslov.toLowerCase()).includes(termin) || oLatinica(knjiga.autor.toLowerCase()).includes(termin)) {
        knjige.push(knjiga);
      }
    });

    setRezultatPretrage(knjige);
    navigate('knjige/pretraga');
  }

  const oLatinica = str => {
    return str.replace('č', 'c').replace('ć', 'c').replace('ž', 'z').replace('š', 's').replace('đ', 'dj');
  }

  return (
    <Fragment>
      <Heder pretrazi={pretrazi} brojProizvoda={proizvodiUKoripi.length} />
      <Kontejner>
        <Routes>
          <Route path='/'>
            <Route path='' element={<Naslovna />} />
            <Route path='knjige/:id/:naslov' element={<KnjigaDetalji knjige={sveKnjige} />} />
            <Route path='knjige' element={<KnjigePoKategorijama knjige={sveKnjige} />} >
              <Route path=':kategorija' element={<ListaKnjiga knjige={sveKnjige} />} />
              <Route path='' element={<ListaKnjiga knjige={sveKnjige} />} />
              <Route path='pretraga' element={<ListaKnjiga naslov={`Pretraga: ${terminZaPretragu}`} knjige={rezultatPretrage} />} />
            </Route>
            <Route path='autori'>
              <Route path='' element={<ListaAutora autori={sviAutori} />} />
              <Route path=':id' element={<AutorDetalji knjige={sveKnjige} autori={sviAutori} />} />
            </Route>
            <Route path='korpa' element={<Korpa />} />
            <Route path='*' element={<NijePronadjeno />} />
          </Route>
        </Routes>
      </Kontejner>
      <Futer />
    </Fragment>
  );
}

export default App;
