import React from 'react';
import moment from 'moment';
import './ItemResult.css';

export default class ItemResult extends React.Component {
     render() {
        
        var resultado = this.props.resultado;
        return (
            
            <li className='resultado'>
            <h3>
                <a href={resultado.html_url} target='_blank' rel='noreferrer'>
                    {resultado.name}
                    {resultado.private && <span className='resultado-privado'></span>}
                </a>
            </h3>
            <p className='resultado-info'>
                {resultado.fork && <span className='resultado-fork'>
                        <i className='fas fa-code-branch'/> Forked
                    </span>}
            </p>
            <p className='resultado-description'>{resultado.description}</p>
            <p className='resultado-actualizado'>Updated {moment(resultado.update_at).fromNow()}</p>
            <span className='resultado-language'> {resultado.language}</span>
            <div className='resultado-stats'>
                
                <span> <i className='fas fa-code-branch'/> {resultado.forks_count}</span>
                <span> <i className='fa fa-star'/> {resultado.stargazers_count}</span>
                <span> <i className='fa fa-eye'/> {resultado.watchers_count}</span>
            </div>
           
        </li>
        )
    }
}


/*
export default function ItemResult(props) {
    var resultado = props.resultado;
    return (
        <li className='resultado'>
            <h3>
                <a href={resultado.html_url} target='_blank' rel='noreferrer'>
                    {resultado.name}
                    {resultado.private && <span className='resultado-privado'></span>}
                </a>
            </h3>
            <p className='resultado-info'>
                {resultado.fork && <span className='resultado-fork'>
                        <i className='fa fa-code-fork'/> Forked
                    </span>}
            </p>
            <p className='resultado-description'>{resultado.description}</p>
            <p className='resultado-actualizado'>Updated {moment(resultado.update_at).fromNow()}</p>
            <div className='resultado-stats'>
                <span className='resultado-stat'> {resultado.language}</span>
                <span className='resultado-stat'> <i className='fa fa-code-fork'/> {resultado.forks_count}</span>
                <span className='resultado-stat'> <i className='fa fa-star'/> {resultado.stargazers_count}</span>
                <span className='resultado-stat'> <i className='fa fa-eye'/> {resultado.watchers_count}</span>
            </div>
           
        </li>
    )
}*/
