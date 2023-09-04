// let button = document.querySelector(".btn-card");

// const { error } = require("console");

const acessarLink01 = () => {
    window.location.href = 'https://github.com/Ricardo2044/programacao-jogos';
}

const acessarLink02 = () => {
    window.location.href = 'https://github.com/Ricardo2044/mortalkombate';
}
// button.addEventListener("click", acessarLink01);

const abrirWhatsaap = () => {
    let number = "5521994627896";

    let msg = document.getElementById("msg").value;

    let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;

    window.open(target);
}

const tableProjetos = document.getElementById('tabela-projetos').getElementsByTagName('tbody')[0];

fetch('http://localhost:5200/projetos')
    .then(response => response.json())
    .then(projetos => {
        projetos.forEach(projeto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${projeto.id}</td>
            <td><img src="${projeto.imagem}"></td>
            <td>${projeto.nome}</td>
            <td>${projeto.descricao}</td>
            <td><a href="${projeto.link}" target="_blank">${projeto.link}</a></td>
          
        `;
            tableProjetos.appendChild(linha);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar projetos:', error);
    });



