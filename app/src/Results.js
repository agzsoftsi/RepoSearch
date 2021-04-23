import React from 'react';
import ItemResult from './ItemResult';
import './Results.css';

export default class Results extends React.Component {
    render() {
        return (<>
            {this.props.resultados.length > 0 ? 
            <div className='info-repo'>
                 <img src={this.props.resultados[0].owner.avatar_url} width='150' height='150' alt='Avatar'/>
                <div className='info-repo2'>
                    
                    <span>ID: {this.props.resultados[0].owner.id}</span>
                    <span>Name: {this.props.resultados2.name}</span>
                    <span>Bio: {this.props.resultados2bio}</span>
                    <span>E-mail: {this.props.resultados2.email}</span>
                    <span>Blog: {this.props.resultados2.blog}</span>
                    <span>Nº Repos: {this.props.resultados2.public_repos}</span>
                    <span>Nº Followers: {this.props.resultados2.followers}</span>
                    <span>Nº Followings: {this.props.resultados2.following}</span>
                    <span>Location: {this.props.resultados2.location}</span>
                    <span><a href={this.props.resultados2.html_url}>Go to Github</a></span>
                    
               </div> 
            </div>: ''}
            <ul className='resultados-lista'>
            {this.props.resultados.map(function (resultado){
                return <ItemResult key={resultado.id} resultado={resultado} />;
            })}
        </ul>
       </> )
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
