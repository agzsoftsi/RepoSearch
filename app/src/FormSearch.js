import React from 'react';
import './FormSearch.css';


export default class FormSearch extends React.Component {
    constructor(props){
        super();
        this.state = {
            usuario: props.usuario,
            incluirMiembro: props.incluirMiembro
        };
    }

    handleSubmit(ev){
        ev.preventDefault();
        this.props.onBuscar({     
            usuario: this.state.usuario,
            incluirMiembro: this.state.incluirMiembro
        });     
    }

    handleUsuario(ev){
        this.setState({usuario: ev.target.value});
    }
    handleMiembro(ev){
        this.setState({incluirMiembro: ev.target.checked});
    }


    render() {
        return (
            <form className='formulario-busqueda' onSubmit={this.handleSubmit.bind(this)}>
            <input 
                className='input-usuario'
                type='text'
                value={this.state.usuario}
                
                onChange={this.handleUsuario.bind(this)}
            /> 
            <button className='formulario-submit' type='submit'>Search</button>
            <p>
            <label className='check-miembro'>
            <input type='checkbox'
                   checked={this.state.incluirMiembro}
                   onChange={this.handleMiembro.bind(this)}
                   /> Include repositories where user is part     
            </label>
            </p>
        </form>
        )
    }
}



/*
export default function FormSearch(props) {
    const [incluirMiembro, setIncluirMiembro] = useState(props.incluirMiembro);
    const [usuario, setUsuario] = useState(props.usuario);
    
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        props.onBuscar({     
            usuario: usuario,
            incluirMiembro: incluirMiembro
        })
        
    }

    const handleUsuario = (ev) =>{
        setUsuario(ev.target.value);
    }
    const handleMiembro = (ev) =>{
        setIncluirMiembro(ev.target.checked);
    }
   
    return (
        <form className='formulario-busqueda' onSubmit={handleSubmit}>
            <input 
                className='input-usuario'
                type='text'
                value={usuario}
                onChange={handleUsuario}
            /> 
            <button className='formulario-submit' type='submit'>Search</button>
            <label className='check-miembro'>
            <input type='checkbox'
                   checked={incluirMiembro}
                   onChange={handleMiembro}
                   /> Include repositories where user is part     
            </label>

        </form>
    )
}*/
