import Card from '../Card';
import './Main.css';
import { useEffect, useState } from 'react';

function Main() {
    const [ dados, setDados ] = useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/b-Portaluppi/emprego-api/emprego")
        .then( respostas => respostas.json() )
        .then( resp => {
            setDados(resp)
        } )
    }, [])
    return (
        <main className='container-main'>
            { dados.map( (dado) => {
                return <Card { ...dado } key={ dado.id } />
            } ) }
        </main>
    )
}

export default Main 