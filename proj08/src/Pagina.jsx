import React from "react"

import './style.css';

export default function Pagina() {
    return <main>
        <img src="./foto.svg" alt="foto" width="128" />
        <div>
            <p><strong> Almir José Fidelis </strong> | 39 anos | Desenvolvedor Web</p>
        </div> 
        <div>
            <p>
                <strong> Perfil </strong> : Olá eu sou o Almir e sou Desenvolvedor Web.
                Adoro programar em React e em outras diversas tecnologias novas.
            </p>
        </div>
        <div>
            <p><strong> Experiências </strong> : Já trabalhei com React, desenvolvendo projetos como MeuBlog e passei 06 anos fazendo curso na SuperGeeks.</p>
        </div>
        <div>
            <p>
                <strong> Competências </strong> :
                Lógica de programação,
                Raciocínio computacional,
                Python,
                C#,
                HTML,
                CSS,
                JavaScript e
                React.
            </p>
        </div>
        <div>
            <a href="almir.concordia@supergeeks.com.br"> Email </a>
            <a href="tel:+55(49)99107-1791"> Celular </a>
            <a href="https://github.com/skaluno05"> Github </a>
        </div>
    </main>
}