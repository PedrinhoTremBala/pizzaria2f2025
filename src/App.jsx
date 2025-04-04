import { useState } from "react";
import poke from './assets/pokeapi_256.png'
 
function App() {
 
const Formulario = (props)=>{
const [nome, setNome] = useState("Memphis")

 
  return (
    <div>
      <h3></h3>


      <input
      className="nome"
      name = "nome"
      onChange={(e)=>{setName(e.target.value)}}
      placeholder={props.sombra}
      type="text" />



      <button
      className="botao"
      onClick={()=>{alert(nome)}}>
      CLIQUE AQUI
      </button>
    </div>
  )
}
 
return (


<div>
  <h3>Pizzaria 2F</h3>
  <img src = {poke} style={{width:500, height:200}}/>
    <Formulario sombra="Digite seu nome..."/>
    <Formulario sombra="Digite seu email..."/>
    <Formulario sombra=""/>
</div>
)
}

export default App