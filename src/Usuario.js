export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.imagemPerfil}/>
            <div class="texto">
                <div class="nome">{props.nomeUsuario}</div>
                <div class="razao">{props.razao}</div>
            </div>
        </div>
    )
}