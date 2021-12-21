import { Fragment, useEffect, useState } from "react";
import Lista from '../Knjige/Lista';

const Paginacija = props => {

    const [brojStrana, setBrojStrana] = useState(Math.ceil(props.podaci.length / props.limit));
    const [trenutnaStrana, setTrenutnaStrana] = useState(1);

    useEffect(() => {
        setBrojStrana(Math.ceil(props.podaci.length / props.limit));
        setTrenutnaStrana(1);
    }, [props.podaci]);

    const sledecaStrana = () => {
        if (trenutnaStrana + 1 <= brojStrana) {
            setTrenutnaStrana(t => t + 1);
        }
    }

    const prethodnaStrana = () => {
        if (trenutnaStrana - 1 >= 0) {
            setTrenutnaStrana(t => t - 1);
        }
    }

    const postaviStranu = (e) => {
        setTrenutnaStrana(parseInt(e.target.textContent));
    }

    const dajGrupu = () => {
        const pocetak = Math.floor((trenutnaStrana - 1) / 3) * 3 + 1;
        let kraj = pocetak + 2;

        if (kraj > brojStrana) kraj = brojStrana;
        let grupa = []
        for (let i = pocetak; i <= kraj; i++) {
            grupa.push(i);
        }

        return grupa;
    }

    const dajPodatke = () => {
        const pocetak = trenutnaStrana * props.limit - props.limit;
        const kraj = pocetak + props.limit;
        return props.podaci.slice(pocetak, kraj);
    }

    return (
        <Fragment>
            <Lista naslov={props.naslov} knjige={dajPodatke()} />
            {props.podaci.length > props.limit &&
                <div className="d-flex justify-content-center my-5 pagination">
                    <div className={`page-item ${trenutnaStrana == 1 && 'disabled'}`}>
                        <button className='page-link material-icons' onClick={prethodnaStrana}>
                            arrow_back_ios
                        </button>
                    </div>
                    {dajGrupu().map(g =>
                        <div key={g} className={`page-item  ${g == trenutnaStrana && ' active'}`}>
                            <button className='page-link' onClick={postaviStranu}>{g}</button>
                        </div>)}
                    <div className={`page-item ${trenutnaStrana == brojStrana && 'disabled'}`}>
                        <button className='page-link material-icons' onClick={sledecaStrana}>
                            arrow_forward_ios
                        </button>
                    </div>
                </div>}
        </Fragment >
    )

}

export default Paginacija;