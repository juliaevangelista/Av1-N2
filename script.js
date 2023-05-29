// Autores: Eronilson, Paulo Henrique e Julia


// Função para marcar uma tarefa como concluída
function toggleTask(event) {
  const taskItem = event.target.parentNode;
  const checkbox = taskItem.querySelector('.checkbox');

  if (taskItem.classList.contains('completed')) {
    taskItem.classList.remove('completed');
  } else {
    taskItem.classList.add('completed');
  }

  if (!checkbox) {
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.className = 'checkbox';
    taskItem.insertBefore(newCheckbox, taskItem.firstChild);
  }
}

  // Função para editar uma tarefa
  function editTask(event) {
    const taskItem = event.target.parentNode;
    const taskText = taskItem.firstChild;
    const newText = prompt('Editar tarefa:', taskText.textContent);
  
    // Verifica se o usuário inseriu um texto
    if (newText !== null && newText !== '') {
      taskText.textContent = newText;
    }
  }
  
  // Função para excluir uma tarefa
  function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.classList.add('deleted');
    setTimeout(function() {
      taskItem.remove();
    }, 500); // Aguarda 500ms antes de remover a tarefa
  }
  
  // Função para adicionar uma nova tarefa
  // Função para adicionar uma nova tarefa
function addTask(event) {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Verifica se o campo de entrada de tarefa está vazio
  if (taskInput.value === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  // Cria um novo item de lista para a tarefa
  const newTask = document.createElement('li');
  newTask.innerText = taskInput.value;

  // Cria um checkbox padrão para a tarefa
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  newTask.insertBefore(checkbox, newTask.firstChild);

  // Cria botões para editar e excluir a tarefa
  const editButton = document.createElement('span');
  editButton.classList.add('edit');
  editButton.innerText = 'Editar';

  const deleteButton = document.createElement('span');
  deleteButton.classList.add('delete');
  deleteButton.innerText = 'Excluir';

  // Adiciona os botões ao item da lista
  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);

  // Adiciona a tarefa à lista
  taskList.appendChild(newTask);

  // Limpa o campo de entrada de tarefa
  taskInput.value = '';
}

  // Obtém o formulário e adiciona um ouvinte de evento para a submissão
  const taskForm = document.getElementById('taskForm');
  taskForm.addEventListener('submit', addTask);
  
  // Obtém a lista de tarefas e adiciona um ouvinte de evento para marcar tarefas como concluídas
  // Obtém a lista de tarefas e adiciona um ouvinte de evento para marcar tarefas como concluídas
const taskList = document.getElementById('taskList');
taskList.addEventListener('click', function(event) {
  const target = event.target;

  if (target.classList.contains('edit')) {
    // Edita a tarefa existente
    editTask(event);
  } else if (target.classList.contains('delete')) {
    // Exclui a tarefa existente
    deleteTask(event);
  } else if (target.classList.contains('checkbox')) {
    // Marca a tarefa como concluída
    toggleTask(event);
  }
});


  

  
  