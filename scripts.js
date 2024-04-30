let tasks = [
    { name: "Fazer dever de casa de matemática", day: "Segunda-feira" },
    { name: "Estudar para a prova de ciências", day: "Terça-feira" },
    { name: "Escrever redação de história", day: "Quarta-feira" },
    { name: "Preparar apresentação de geografia", day: "Quinta-feira" },
    { name: "Resolver exercícios de química", day: "Sexta-feira" },
    { name: "Escrever resumo de biologia", day: "Segunda-feira" },
    { name: "Estudar verbos irregulares em inglês", day: "Terça-feira" },
    { name: "Ler capítulo 5 do livro de literatura", day: "Quarta-feira" },
    { name: "Realizar experimento de física", day: "Quinta-feira" },
    { name: "Estudar regras gramaticais em espanhol", day: "Sexta-feira" }
  ];
  
  function addTaskToList(task) {
    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `
      <input type="checkbox" onchange="toggleTaskCompletion(this)"> 
      <span>${task.name}</span>
      <button class="btn btn-danger btn-sm float-end" onclick="removeTask(this)">Remover</button>
    `;
    taskList.appendChild(listItem);
  }
  
  function showTasks(day) {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpa a lista antes de adicionar as tarefas do dia selecionado
    tasks.filter(task => task.day === day).forEach(task => addTaskToList(task));
  }
  
  function toggleTaskCompletion(checkbox) {
    let taskName = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskName.classList.add("completed");
    } else {
      taskName.classList.remove("completed");
    }
  }
  
  function removeTask(button) {
    let listItem = button.parentElement;
    listItem.remove();
  }
  