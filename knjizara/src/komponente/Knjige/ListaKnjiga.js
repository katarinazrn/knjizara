import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import Paginacija from "../UI/Paginacija";
import Ucitavanje from "../UI/Ucitavanje";

const ListaKnjiga = props => {

    const params = useParams();
    const [knjige, setKnjige] = useState([]);
    const [naslov, setNaslov] = useState('');

    useEffect(() => {
        if (props.knjige && params.kategorija) {
            setKnjige(props.knjige.filter(knjiga => knjiga.kategorije.includes(params.kategorija)));
            setNaslov(params.kategorija.charAt(0).toUpperCase() + params.kategorija.slice(1));
        }
        else if (props.knjige) {
            setKnjige(props.knjige);
            setNaslov('');
        }
    }, [props.knjige, params.kategorija])

    if(props.knjige.length==0 && (props.naslov && !props.naslov.startsWith('Pretraga'))){
        return <Ucitavanje />
    }

    return (
        <Paginacija naslov={props.naslov? props.naslov : naslov} podaci={knjige} limit={20} />
    )
}

export default ListaKnjiga;