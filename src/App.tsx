import './App.css'
import TabDadosDeEndereco from './pages/TabDadosDeEndereco'
import TabDadosDeCadastro from './pages/TabDadosDeCadastro'
import "./style/pageStyle.css"
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import TabConcluido from './pages/TabConcluido';

export default function () {
  const dadosPessoais = <div className="content"> <TabDadosDeCadastro/></div>
  const dadosDeEndereco = <div className="content"> <TabDadosDeEndereco /></div>
  const dadosDeConclusao = <div className="content"> <TabConcluido /></div>
  
function step1Validator() {
  return true
}

  function step2Validator(el: any) {
    console.log(el)
    return true
  }

  function step3Validator(el: any) {
    console.log(el)
    return true
  }
   
  function onFormSubmit() {
  }
  return <div>
  <StepProgressBar 
  wrapperClass='dados'
  startingStep={0}
  onSubmit={onFormSubmit}
  previousBtnName="Anterior"
  nextBtnName="Próximo"
  steps={[
    {label: 'Dados Pessoais',
    name: 'infoPessoais',
    content: dadosPessoais,
    validator: step1Validator
    },
    {
      label: 'Endereço',
      name: 'endereco',
      content: dadosDeEndereco,
      validator: step2Validator
    },
    {
      label: 'Finalizado',
      name: 'finalizado',
      content: dadosDeConclusao,
      validator: step3Validator
    }
  ]}/>
  </div>
}