const item =  document.querySelector('.item');
//для активации элемента, чтобы могли перетаскивать необходимо добавить атрибут - draggable в HTML

// указываем куда будет прикрепляться  активный элемент
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart); //добавляем событие слушатель & Событие dragstart запускается, когда пользователь начинает перетаскивать элемент или выделенный текст.
item.addEventListener('dragend',dragend );// подробнее см.https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event

//необходимо пройтись по всем элементам воспользуемся циклом
for (const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)//курсор мыши наведен на элемент при перетаскивании.
    placeholder.addEventListener('dragenter',dragenter)//перетаскиваемый элемент достигает конечного элемента.
    placeholder.addEventListener('dragleave',dragleave)//курсор мыши покидает пределы перетаскиваемого элемента.
    placeholder.addEventListener('drop',dragdrop)//происходит drop элемента.
}
 

function dragstart (event) {
    //console.log добавили для примера, и проверки наших действий
    //console.log('start', event.target); указываем целевой элемент на котором произошло событие "start", в процессе 
    event.target.classList.add('hold');//ввиуду того что указали стилистику класс, он останется не зависимо от события(start или end),необходимо стиль удалить по окончанию события
    //Добавляем цикл событий
    setTimeout( ()=>event.target.classList.add('hide'),0) //функция запускается не сразу,а по истечения времени 
}


function dragend (event) {
    event.target.classList.remove('hold','hide');// удаляем стиль   
}

function dragover(event){
    event.preventDefault()//сообщает пользовательскому агенту , что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться, как обычно.
   // console.log('курсор наведен');
}

function dragenter(event){
    event.target.classList.add('hovered');
    console.log('элемент достигнут');
}

function dragleave(event){
    event.target.classList.remove('hovered');
    console.log('курсор покидает');
}

function dragdrop(event){
    event.target.append(item)//позволяет вставлять строки с текстом
    event.target.classList.remove('hovered');
    //console.log('курсор наведен');
}