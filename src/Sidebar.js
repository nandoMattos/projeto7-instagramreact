import React from "react";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
    let [nome, setNome] = React.useState("Catana")
    let [imagemPerfil, setImagemPerfil] = React.useState("assets/img/catanacomics.svg")

    function alterarNome() {
        const novoNome = prompt("Insira o novo nome de usuário");
        if(novoNome) {
            setNome(novoNome)
        }
    }

    function alterarImagemPerfil() {
        const novaImagem = prompt("Insira o URL da nova imagem")
        if(novaImagem) {
            setImagemPerfil(novaImagem)
        }
    }

    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={imagemPerfil} onClick={alterarImagemPerfil} />
                <div class="texto">
                    <strong>catanacomics</strong>
                    <span>
                        {nome}
                        <ion-icon name="pencil" onClick={alterarNome} ></ion-icon>
                    </span>
                </div>
            </div>

            <Sugestoes/>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}