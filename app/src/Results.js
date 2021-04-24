import React from 'react';
import ItemResult from './ItemResult';
import './Results.css';

export default class Results extends React.Component {
    render() {
        return (<>
            {this.props.resultados.length > 0 ? 
            <div className='info-repo'>
                <div className='info-picture'>
                     <img src={this.props.resultados[0].owner.avatar_url} width='110' height='110' alt='Avatar'/>
                </div>
                 
                <div className='info-repo2'>
                    <div className='info-about'>
                    <span>{this.props.resultados2.name}</span>
                    <span>#{this.props.resultados[0].owner.id}</span>
                    <span>{this.props.resultados2.bio}</span>
                    <span>{this.props.resultados2.location}</span>
                    </div>
                    
                    <div className='info-follow'>
                        <span>Repos: {this.props.resultados2.public_repos}</span>
                        <span>Followers: {this.props.resultados2.followers}</span>
                        <span>Followings: {this.props.resultados2.following}</span>
                    </div>
                    
               </div> 

               <div className='info-social'>
                    {this.props.resultados2.html_url ? <span className="info-icon"><a href={this.props.resultados2.html_url} title='Go to Github' target='_blank' rel='noreferrer'><i class="fab fa-github" /></a></span> : ''}
                    {this.props.resultados2.twitter_username ? <span className="info-icon"><a href={'https://twitter.com/'+this.props.resultados2.twitter_username} title='Go to Twitter' target='_blank' rel='noreferrer'> <i class="fab fa-twitter" /></a></span> : ''}
                    {this.props.resultados2.blog ? <span className="info-icon"><a href={this.props.resultados2.blog} title='Go to my Website' target='_blank' rel='noreferrer'> <i class="fas fa-globe"/></a></span> : ''}
                    {this.props.resultados2.email ? <span className="info-icon"><a href={'mailto:'+this.props.resultados2.email} title='Send a Message' target='_blank' rel='noreferrer'><i class="far fa-envelope"/></a></span>: ''}
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
