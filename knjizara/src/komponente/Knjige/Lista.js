import KarticaKnjiga from "./KarticaKnjiga";

const Lista = props => {
    return (
        <div className="col m-0 p-0 ">
            {props.naslov && <h2 className="ms-0 ms-3 text-center text-sm-start">{props.naslov}</h2>}
            <ul className='d-sm-flex d-flex d-none row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0 p-0'>
                {
                    props.knjige.map(knjiga =>
                        <KarticaKnjiga key={knjiga.id} knjiga={knjiga} />
                    )}
            </ul>
            <ul className='d-flex d-sm-none flex-column justify-content-center '>
                {
                    props.knjige.map(knjiga =>
                        <KarticaKnjiga key={knjiga.id} knjiga={knjiga} />
                    )}
            </ul>
        </div>
    )
}

export default Lista;