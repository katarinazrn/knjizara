import KarticaKnjiga from "./KarticaKnjiga";

const Lista = props => {
    return (
        <div className="col m-sm-0 m-3 p-0 ">
            {props.naslov && <h2 className="ms-0 ms-sm-3 text-center text-sm-start">{props.naslov}</h2>}
            <ul className='d-sm-flex d-none row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-0 p-0'>
                {
                    props.knjige.map(knjiga =>
                        <KarticaKnjiga key={knjiga.id} knjiga={knjiga} />
                    )}
            </ul>
            <div className="row p-0">
                <ul className='col w-100 d-sm-none'>
                    {
                        props.knjige.map(knjiga =>
                            <KarticaKnjiga key={knjiga.id} knjiga={knjiga} />
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Lista;