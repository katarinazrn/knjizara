import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import KarticaKnjiga from "./KarticaKnjiga";
import Lista from "./Lista";

const ListaKnjiga = props => {

    const params = useParams();
    const [knjige, postaviKnjige] = useState([]);
    const [naslov, postaviNaslov] = useState('');

    useEffect(() => {
        if (props.knjige && params.kategorija) {
            postaviKnjige(props.knjige.filter(knjiga => knjiga.kategorije.includes(params.kategorija)));
            postaviNaslov(params.kategorija.charAt(0).toUpperCase() + params.kategorija.slice(1));
        }
        else if (props.knjige) {
            postaviKnjige(props.knjige);
            postaviNaslov('');
        }
    }, [props.knjige, params.kategorija])

    return (
        <Lista naslov={props.naslov? props.naslov : naslov} knjige={knjige} />
    )
}

export default ListaKnjiga;