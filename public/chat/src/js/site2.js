document.getElementById("submit-button").addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;

    // Você pode realizar o envio dos dados para um servidor aqui ou realizar qualquer outra ação desejada com os valores.
    console.log(`Nome: ${nome}`);
    console.log(`Sobrenome: ${sobrenome}`);
    console.log(`Email: ${email}`);
});
