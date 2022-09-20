import InputNomeCompleto from "../components/DadosPessoais/InputNomeCompleto"
import InputDataNasc from "../components/DadosPessoais/InputDataNasc"
import InputEmail from "../components/DadosPessoais/InputEmail"

export default function() {

    return <div className="info">
        <h2>Informe os dados necessários:</h2>
        <div>
            <InputNomeCompleto/>
            <InputDataNasc/>
            <InputEmail/>

        </div>
    </div>
}