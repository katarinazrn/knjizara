import { createContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const KorpaKontekst = createContext({
    knjige: [],
    dodaj: () => { },
    isprazni: () => { },
    ukloni: () => { },
    azuriranjeKorpe: false,
    brojKnjiga: 0,
    cena: 0
});

export const KorpaKontextProvider = props => {
    const [knjige, setKnjige] = useState([]);
    const [cena, setCena] = useState(0);
    const [brojKnjiga, setBrojKnjiga] = useState(0);
    const [azuriranjeKorpe, setAzuriranjeKorpe] = useState(false);

    useEffect(() => {

        if (localStorage.getItem('korpa')) {
            const korpa = JSON.parse(localStorage.getItem('korpa'));
            setKnjige(korpa.knjige);
            setCena(korpa.cena);
            setBrojKnjiga(korpa.brojKnjiga);
        }
        else {
            localStorage.setItem('korpa', JSON.stringify({ knjige, cena, brojKnjiga }));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('korpa', JSON.stringify({ knjige, cena, brojKnjiga }));
    }, [knjige, cena, brojKnjiga])

    useEffect(() => {
        let interval = setInterval(() => {
            setAzuriranjeKorpe(false);
            clearInterval(interval);
        }, 300)
    }, [azuriranjeKorpe])

    const dodaj = knjiga => {
        setKnjige(pret => {
            let novi = [...pret];
            if (novi.length > 0) {
                let knjigaVecUKorpi = pret.filter(k => k.knjiga.id == knjiga.id)[0];
                if (knjigaVecUKorpi) {
                    knjigaVecUKorpi.kolicina = knjigaVecUKorpi.kolicina + 1;
                    novi = novi.map(k => k.knjiga.id == knjiga.id ? knjigaVecUKorpi : k)
                }
                else {
                    novi.push({ knjiga, kolicina: 1 });
                }
            }
            else {
                novi.push({ knjiga, kolicina: 1 });
            }
            return novi;
        })
        setCena(pret => pret + knjiga.cena);
        setBrojKnjiga(pret => pret + 1);
        setAzuriranjeKorpe(true);
    }

    const isprazni = () => {
        setKnjige([]);
        setCena(0);
        setBrojKnjiga(0);
        localStorage.clear();
    }


    const ukloni = (knjiga, kolicina = 1) => {
        setKnjige(pret => {
            let nove = [...pret];
            let t = pret.filter(k => k.knjiga.id == knjiga.id)[0];
            let broj = t.kolicina;
            if (t) {
                t.kolicina = t.kolicina - kolicina;
                if (t.kolicina <= 0) {
                    nove = nove.filter(k => k.knjiga.id != knjiga.id);
                    setCena(pret => pret - knjiga.cena * broj);
                    setBrojKnjiga(pret => pret - broj);
                }
                else {
                    nove = nove.map(k => k.knjiga.id == knjiga.id ? t : k);
                    setCena(pret => pret - knjiga.cena * kolicina);
                    setBrojKnjiga(pret => pret - kolicina);
                }
            }
            return nove;
        });
    }

    const kontekst = {
        knjige,
        dodaj,
        ukloni,
        isprazni,
        brojKnjiga,
        cena,
        azuriranjeKorpe: azuriranjeKorpe
    }

    return (
        <KorpaKontekst.Provider value={kontekst}>
            {props.children}
        </KorpaKontekst.Provider>
    )
}

export default KorpaKontekst;