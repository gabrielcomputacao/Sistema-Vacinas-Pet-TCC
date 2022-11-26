import Input from "../form/Input";
import Button from "../form/Button"
import {FlexForm} from "./stylepages/AnimaisStyle"
import { useEffect, useState } from "react";
import Selection from "../form/Select";
import {useSelector} from "react-redux";

function AnimaisCadastro() {

    const stateUser = useSelector( state =>  state.usercheck)
    const [animaisDados,setAnimaisDados] = useState({})
    const iduser = stateUser.iduser;
    const [nomes,setNomes] = useState([])
    
    useEffect(()=>{
      console.log(iduser)

      fetch(`http://localhost:3005/getpropnomes/${iduser}`, {
        method: 'get',
        headers:{
          "Content-Type": "application/json"
        },
      })
      .then( res => res.json())
      .then( data => {
          setNomes(data.rows)
          console.log(nomes)
      })
      .catch( ex => console.log(ex))

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    function capturarDadosAnimal(e){
        setAnimaisDados( {...animaisDados,
            [e.target.name] : e.target.value})
            console.log(animaisDados)
    }

    function submitDadosAnimal(e){
        e.preventDefault()

        
        console.log(animaisDados)
    }

  return (
    <section>
      <h1>Cadastre seu Animal no Ipet</h1>
      <div>
        <form onSubmit={submitDadosAnimal}>
          <FlexForm>
            <Input texto="Nome" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Selection text="Proprietário" options={nomes} name='proprietario' handleOnChange={capturarDadosAnimal}/>
            <Input texto="Data Nascimento" tipo="text" placeholder="01/01/2001"handleOnChange={capturarDadosAnimal}/>
            <Input texto="Sexo" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Tipo" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Pelagem" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Doenças/Alergias" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Observações" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Peso" tipo="number" placeholder="Em Kg" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Tamanho" tipo="number" placeholder="Em Metros" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Raça" tipo="text" handleOnChange={capturarDadosAnimal}/>
            <Input texto="Espécie" tipo="text" handleOnChange={capturarDadosAnimal}/>
          </FlexForm>
          <Button text="Enviar Cadastro"/>
        </form>
      </div>
    </section>
  );
}

export default AnimaisCadastro;
