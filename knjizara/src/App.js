import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heder from './komponente/Heder';
import Kontejner from './komponente/UI/Kontejner';
import { useState, useEffect } from 'react';
import KnjigePoKategorijama from './komponente/Knjige/KnjigePoKategorijama';
import ListaKnjiga from './komponente/Knjige/ListaKnjiga';
import Naslovna from './komponente/Naslovna/Naslovna';
import KnjigaDetalji from './komponente/Knjige/KnjigaDetalji';
import AutorDetalji from './komponente/Autori/AutorDetalji';
import ListaAutora from './komponente/Autori/ListaAutora';

import KNJIGE from './PODACI/KNJIGE/knjige.json';
import AUTORI from './PODACI/AUTORI/autori.json';

const App = () => {

  const [sveKnjige, postaviSveKnjige] = useState([]);
  const [sviAutori, postaviSveAutore] = useState([]);

  useEffect(() => {
    postaviSveKnjige(KNJIGE);
    postaviSveAutore(AUTORI);
  }, [])

  return (
    <BrowserRouter>
      <Heder />
      <Kontejner>
        <Routes>
          <Route path='/'>
            <Route path='' element={<Naslovna />} />
            <Route path='kategorije' element={<KnjigePoKategorijama knjige={sveKnjige} />} >
              <Route path=':kategorija'
                element={<ListaKnjiga knjige={sveKnjige} />} />
              <Route path='' element={<ListaKnjiga knjige={sveKnjige} />} />
            </Route>
          </Route>
          <Route path='knjiga/:id/:naslov' element={<KnjigaDetalji knjige={sveKnjige} />} />
          <Route path='autori'>
            <Route path='' element={<ListaAutora autori={sviAutori} />} />
            <Route path=':id' element={<AutorDetalji knjige={sveKnjige} autori={sviAutori} />} />
          </Route>
        </Routes>
      </Kontejner>
    </BrowserRouter>
  );
}

export default App;
