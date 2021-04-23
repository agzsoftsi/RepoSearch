import React from 'react';
import FormSearch from './FormSearch';
import Results from './Results';
import './App.css';


var resultados = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultados: resultados,
      resultados2: [],
      usuario: 'agzsoftsi',
      incluirMiembro: false
    };
  }

  buscarResultados(params){
    var url = 'https://api.github.com/users/'+ params.usuario +'/repos?sort=updated';
    var url2 = 'https://api.github.com/users/'+ params.usuario;
    if (params.incluirMiembro){
      url += '&type=all';
    }
    fetch(url).then(function(response) {
      if(response.ok){
          response.json().then(function(body) {
          this.setState({resultados : body});


          fetch(url2).then(function(response) {
            if(response.ok){
              response.json().then(function(body) {
                this.setState({resultados2 : body});
              }.bind(this));
            } else {
              this.setState({resultados2: []});
            }
          }.bind(this));


        }.bind(this));
      } else {
        this.setState({resultados: []});
      }
    }.bind(this));
  }

  cambiarCriterioBusqueda(state){
    this.setState(state);
    this.buscarResultados(state);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='App-title'><i class="fab fa-github"></i> Repo<span>SEARCH</span>++</h1>
        <h5 className='author'>by Karlgarmor</h5>
        <FormSearch 
          usuario = {this.state.usuario}
          incluirMiembro = {this.state.incluirMiembro}
          onBuscar = {this.cambiarCriterioBusqueda.bind(this)}
        />

        <Results resultados = {this.state.resultados} resultados2={this.state.resultados2}/>
      </div>
    )
  }
}


export default App




/* Funtion React 16.8

function App() {
  let data = [];
  const [resultados, setResultados] = useState(data);
  const [incluirMiembro, setIncluirMiembro] = useState(false);
  const [usuario, setUsuario] = useState('agzsoftsi');

  const buscarNewUser = newUser =>{
      
    let url = 'https://api.github.com/users/'+ newUser.usuario +'/repos?sort=updated';
    if(newUser.incluirMiembro){
      url += '&type=all';
    }
    fetch(url)
    .then(response => response.json())
    .then(body =>{
          console.log(body);
          setResultados(body);
      })
      .catch(error => {
        console.log(error)
        setResultados([]);
      })
     
  }
      
  

  const cambiarBusqueda = (newSearch) =>{
    console.log(newSearch)
    setUsuario(newSearch.usuario);
    setIncluirMiembro(newSearch.incluirMiembro);
    setResultados(newSearch);
    buscarNewUser(newSearch);
  }
  return (
    <div className="App">
      <FormSearch 
        usuario = {usuario}
        incluirMiembro = {incluirMiembro}
        onBuscar={cambiarBusqueda}
      />

      <Results resultados={resultados}/>

    </div>
  );
}*/


