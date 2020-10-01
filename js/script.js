console.log('projetoToDo');

let addTarefa = document.getElementById('adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada');
let divTarefas = document.querySelector('#tarefas');

function addAcaoFinalizarTarefa() {
  let listaDeBotoes = document.querySelectorAll('.botao-tarefa');

  for (let i = 0; i < listaDeBotoes.length; i++) {
    let botao = listaDeBotoes[i];

    botao.addEventListener('click', function () {
      if (window.confirm('Você tem certeza que deseja excluir?')) {
        botao.parentElement.parentElement.remove();
      }
    });
  }
}
addAcaoFinalizarTarefa();

function criarTarefa() {
  if (inputTarefa.value.trim() == '') {
    //inputTarefa.style.border = "2px solid red"
    return alert('Você deve digitar uma tarefa primeiro!');
  }
  let tarefa = `
  <div class="col-md-4 mb-4">
  <div class="card-tarefa">
    <div class="texto-tarefa">
      ${inputTarefa.value}
      </div>
    <div class="botao-tarefa">
      <img
        src="img/check.png"
        width="32"
        alt="Botão para finalizar tarefa"
        title="Botão para finalizar tarefa"
      />
    </div>
  </div>
</div>
`;

  divTarefas.innerHTML += tarefa;
  // alert('Tarefa Criada: ' + inputTarefa.value);
  inputTarefa.value = '';
}

addTarefa.addEventListener('click', criarTarefa);

inputTarefa.addEventListener('keypress', function (event) {
  console.log(event);
  if (event.key == 'Enter') {
    criarTarefa();
  }
});
// Limpar input
