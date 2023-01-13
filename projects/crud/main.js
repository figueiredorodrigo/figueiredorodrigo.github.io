const input = document.querySelector('#input');
const buttonAdd = document.querySelector('.addBtn');
const todoList = document.querySelector('.todoList');
const cleanAll = document.querySelector('.clean');
const plural = document.querySelector('.plural');

// MODAL
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.closeModal');
const saveModal = document.querySelector('.modalBtn');
const modalinput = document.querySelector('#modalinput');

// evento keyUp
input.addEventListener('keyup', (e) => {
    if (input.value != '') {
        buttonAdd.classList.add('active')
    } else {
        buttonAdd.classList.remove('active')
    }

    if (e.keyCode == '13') {
        let inputvalue = input.value;
        let getNotes = localStorage.getItem('New Todo');

        if (getNotes == null) {
            listArray = [];
        } else {
            listArray = JSON.parse(getNotes)
        }

        listArray.push(inputvalue);
        localStorage.setItem('New Todo', JSON.stringify(listArray));

        showTasks();
        input.value = '';
        buttonAdd.classList.remove('active');
    }
});

showTasks();



buttonAdd.addEventListener('click', () => {
    let inputvalue = input.value;
    let getNotes = localStorage.getItem('New Todo');

    if (getNotes == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getNotes)
    }

    listArray.push(inputvalue);
    localStorage.setItem('New Todo', JSON.stringify(listArray));

    showTasks();
    input.value = '';
    buttonAdd.classList.remove('active');
});


function showTasks() { 
    let getNotes = localStorage.getItem('New Todo');

    if (getNotes == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getNotes)
    }

    let newli = '';
    listArray.forEach((element, index) => {
        newli += `<li>${element}<span class="edit" onclick="editTask(${index})"><ion-icon name="create-outline"></ion-icon></span><span class="icon" onclick="deleteTask(${index})">X</span></li>`;
    });

    todoList.innerHTML = newli;

    const taskPendente = document.querySelector('.taskPendente');
    taskPendente.textContent = listArray.length;

    if (listArray.length > 0) {
        cleanAll.classList.add('active');
    } else {
        cleanAll.classList.remove('active')
    }

    if (listArray.length > 1) {
        plural.textContent = ' tarefas pendentes'
    } else {
        plural.textContent = ' tarefa pendente'
    }
}; 

function editTask(index) {  
    modal.style.display = 'flex';

    saveModal.addEventListener('click', () => {
        let inputModal = modalinput.value;
        if (inputModal != ''){
            let getNotes = localStorage.getItem('New Todo');
            listArray = JSON.parse(getNotes);
            listArray[index] = inputModal;

            localStorage.setItem('New Todo', JSON.stringify(listArray));

            modal.style.display = 'none';
            modalinput.value = ''
        } else {
            modalinput.placeholder = 'Digite algo'
        }    
        showTasks();
    })
}


function deleteTask(index) {
    let getNotes = localStorage.getItem('New Todo');
    listArray = JSON.parse(getNotes);
    listArray.splice(index, 1);

    localStorage.setItem('New Todo', JSON.stringify(listArray));

    showTasks();
};

cleanAll.addEventListener('click', () => {
    let getNotes = localStorage.getItem('New Todo');

    if (getNotes == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getNotes);
    }
    listArray = [];
    localStorage.setItem('New Todo', JSON.stringify(listArray));

    showTasks();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalinput.value = ''
})
