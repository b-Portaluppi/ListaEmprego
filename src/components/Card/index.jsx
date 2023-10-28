import './Card.css'

function Card({ company, id, contract, languages, position, level, postedAt, location  }) {
    return (
        <section className='container-card'>
            <div className='container__nome'>
                <h1>{ company }</h1>
                <a href="#" className='link-new'>NEW!</a>
                <a href="#" className='link-featured'>FEATURED</a>
            </div>
            <p className='position'>{ position }</p>
            <ul className='lista'>
                <li>{ postedAt }</li>
                <li>{ contract }</li>
                <li>{ location }</li>
            </ul>
            { languages.map( (linguagem) => {
                return <div className='linguagens' key={ id } >
                            <ul className='linguagem__lista'>
                                <li className='item'>{ linguagem }</li>
                            </ul>
                        </div>
                
            } ) }
        </section>
    )
}

export default Card