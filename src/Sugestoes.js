import Usuario from "./Usuario"

function Sugestao(props) {
    return (
        <div class="sugestao">
            <Usuario imagemPerfil={props.imagemPerfil} nomeUsuario={props.nomeUsuario} razao={props.razao}/>
            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const sugestoesProps = [
        {imagemPerfil:"assets/img/bad.vibes.memes.svg", nomeUsuario:"bad.vibes.memes", razao:"Segue você"},
        {imagemPerfil:"assets/img/chibirdart.svg", nomeUsuario:"chibirdart", razao:"Segue você"},
        {imagemPerfil:"assets/img/razoesparaacreditar.svg", nomeUsuario:"razoesparaacreditar", razao:"Novo no Instagram"},
        {imagemPerfil:"assets/img/adorable_animals.svg", nomeUsuario:"adorable_animals", razao:"Segue você"},
        {imagemPerfil:"assets/img/smallcutecats.svg", nomeUsuario:"smallcutecats", razao:"Segue você"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

        {sugestoesProps.map((prop)=> 
            <Sugestao imagemPerfil={prop.imagemPerfil} nomeUsuario={prop.nomeUsuario} razao={prop.razao}/>
        )}
        </div>
    )
}