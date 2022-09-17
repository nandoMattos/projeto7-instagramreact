import React from "react";

function Post(props) {
    const [likedClass, setLikedClass] = React.useState("")
    const [likedOutline, setLikedOutline] = React.useState("heart-outline")
    const [bookmarkOutline, setBookmarkOutline] = React.useState("bookmark-outline")
    const [qtdeCurtidas, setQtdeCurtidas] = React.useState(props.qtdeCurtidas)

    function incrementaOuDecrementaCurtida(sinal) {
        let numero;
        if(sinal === "+"){
            numero = Number(qtdeCurtidas.replace(".", "")) + 1;
        } 
        if (sinal === "-"){
            numero = Number(qtdeCurtidas.replace(".", "")) - 1;

        }

        setQtdeCurtidas(new Intl.NumberFormat('de-DE').format(numero))
    }

    function toggleLike() {
        if(likedClass === "") {
            setLikedClass("liked")
            setLikedOutline("heart")
            incrementaOuDecrementaCurtida('+')

        } else {
            setLikedClass("")
            setLikedOutline("heart-outline")
            incrementaOuDecrementaCurtida('-')
        }
    }

    function toggleBookmarkOutline() {
        if (bookmarkOutline === "bookmark-outline"){
            setBookmarkOutline("bookmark")
        } else {
            setBookmarkOutline("bookmark-outline")
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemPerfil} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={likedClass} name={likedOutline} onClick={toggleLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmarkOutline} onClick={toggleBookmarkOutline} ></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto"> 
                        Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {qtdeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const postsProps = [
        {nomeUsuario: "meowed", 
        imagemPerfil: "assets/img/meowed.svg", 
        imagemPost: "assets/img/gato-telefone.svg", 
        curtidoPor: "respondeai", 
        qtdeCurtidas: "101.523"},
        
        {nomeUsuario: "barked", 
        imagemPerfil: "assets/img/barked.svg", 
        imagemPost: "assets/img/dog.svg", 
        curtidoPor: "adorable_animals", 
        qtdeCurtidas: "99.159"}
    ];

    return(
        <div class="posts">
            {postsProps.map((prop)=> 
            <Post nomeUsuario={prop.nomeUsuario} imagemPerfil={prop.imagemPerfil} imagemPost={prop.imagemPost} curtidoPor={prop.curtidoPor} qtdeCurtidas={prop.qtdeCurtidas}/>
            )}
        </div>
    )
}