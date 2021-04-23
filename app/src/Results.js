import React from 'react';
import ItemResult from './ItemResult';
import './Results.css';

export default class Results extends React.Component {
    render() {
        return (
            <ul className='resultados-lista'>
            {this.props.resultados.map(function (resultado){
                return <ItemResult key={resultado.id} resultado={resultado} />;
            })}
        </ul>
        )
    }
}



// check github API: curl https://api.github.com/users/agzsoftsi/repos
/*export default function Results(props) {
    return (
        <ul className='resultados-lista'>
            {props.resultados.map(resultado =>{
                return <ItemResult key={resultado.id} resultado={resultado} />;
            })}
        </ul>
    )
}*/
