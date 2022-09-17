function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.nomeUsuario}
            </div>
        </div>
    )
}


export default function Stories() {

    const storiesProps = [
        {nomeUsuario: "9gag", imagem: "assets/img/9gag.svg"},
        {nomeUsuario: "meowed", imagem: "assets/img/meowed.svg"},
        {nomeUsuario: "barked", imagem: "assets/img/barked.svg"},
        {nomeUsuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg"},
        {nomeUsuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg"},
        {nomeUsuario: "respondeai", imagem: "assets/img/respondeai.svg"},
        {nomeUsuario: "filomoderna", imagem: "assets/img/filomoderna.svg"},
        {nomeUsuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}

    ]
    
    return(
        <div class="stories">
            {storiesProps.map((prop) => 
                <Story nomeUsuario = {prop.nomeUsuario} imagem={prop.imagem}/>
            )}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

} 