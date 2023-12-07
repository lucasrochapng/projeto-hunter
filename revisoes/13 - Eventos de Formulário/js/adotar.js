let formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const validarDados = (nome, telefone, email, renda, residencia, opcao, intencao) => {

    let control = true;

    if(nome.value.trim() == ""){
      nome.style.backgroundColor = "red";
      control = false;
    }

    if(telefone.value.trim() == ""){
      telefone.style.backgroundColor = "red";
      control = false;
    }

    if(email.value.trim() == ""){
      email.style.backgroundColor = "red";
      control = false;
    }

    if(renda == null) {
      let elementoErro = document.querySelector("#erro-renda");
      elementoErro.classList.add(".msg-erro--active");
      control = false;
    }

    return control;

  };

  let nome = document.querySelector("#nome");
  let telefone = document.querySelector("#telefone");
  let email = document.querySelector("#email");
  let renda = document.querySelector("input[name='renda']:checked");
  let residencia = document.querySelector("#residencia");
  let opcao = residencia.options[residencia.selectedIndex];
  let intencao = document.querySelector("#intencao");

  if(validarDados(nome, telefone, email, renda, residencia, opcao, intencao)) {
    let adotante = {
      nome : nome.value.trim(),
      telefone : telefone.value.trim(),
      email : email.value.trim(),
      renda : renda.value,
      residencia : opcao.value,
      intencao : intencao.value,
      idAnimal : "1",
    };
    console.log(adotante);
  } else event.preventDefault();
});


