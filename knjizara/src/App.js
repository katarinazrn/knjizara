import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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

const App = () => {

  const [sveKnjige, postaviSveKnjige] = useState([]);
  const [sviAutori, postaviSveAutore] = useState([]);

  const [rezultatPretrage, postaviRezultatPretrage] = useState([]);
  const [terminZaPretragu, postaviTermin] = useState('');

  const [proizvodiUKoripi, postaviProizvode] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    postaviSveKnjige(KNJIGE);
    postaviSveAutore(AUTORI);
  }, []);

  const pretrazi = (e, termin) => {
    e.preventDefault();
    postaviTermin(termin);

    let knjige = [];

    termin = oLatinica(termin.toLowerCase());

    sveKnjige.forEach(knjiga => {

      if (oLatinica(knjiga.naslov.toLowerCase()).includes(termin) || oLatinica(knjiga.autor.toLowerCase()).includes(termin)) {
        knjige.push(knjiga);
      }
    });

    postaviRezultatPretrage(knjige);
    navigate('kategorije/pretraga');
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
            <Route path='kategorije' element={<KnjigePoKategorijama knjige={sveKnjige} />} >
              <Route path=':kategorija' element={
                <ListaKnjiga knjige={sveKnjige} />} />
              <Route path='' element={
                <ListaKnjiga knjige={sveKnjige} />} />
              <Route path='pretraga' element={
                <ListaKnjiga naslov={`Pretraga: ${terminZaPretragu}`} knjige={rezultatPretrage} />} />
            </Route>
          </Route>
          <Route path='knjiga/:id/:naslov' element={
            <KnjigaDetalji knjige={sveKnjige} />} />
          <Route path='autori'>
            <Route path='' element={<ListaAutora autori={sviAutori} />} />
            <Route path=':id' element={<AutorDetalji knjige={sveKnjige} autori={sviAutori} />} />
          </Route>
          <Route path='korpa' element={<Korpa />}/>
        </Routes>
      </Kontejner>
      <Futer />
    </Fragment>
  );
}

export default App;
