const Kontejner = props => {
    return (
        <div className="mt-5 mb-5 pt-5 d-flex justify-content-center">
            <div className="col-sm-10">
                {props.children}
            </div>
        </div>
    )
}

export default Kontejner;