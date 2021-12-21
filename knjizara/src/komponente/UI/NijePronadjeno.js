import { useEffect } from "react";

const NijePronadjeno = () => {

    useEffect(() => {
        document.title = 'Nepostojeca stranica';
    }, []);

    return (
        <h1 className="text-center mt-5 my-auto">
            Tražena stranica ne postoji
        </h1>
    )
}

export default NijePronadjeno;