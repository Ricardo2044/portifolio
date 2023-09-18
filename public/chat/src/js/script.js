document.getElementById("submit-button").addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let email = document.getElementById("email").value;

  alert("Nome: " + nome + "\nSobrenome: " + sobrenome + "\nEmail: " + email);
});
