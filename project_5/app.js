// 1.обработаем кнопку "начать игру"
const startBtn = document.querySelector('#start');
//4. работа с экранами
const screens = document.querySelectorAll('.screen');
//4.3 получаем id
const timeList = document.querySelector('#time-list');
//4.6 для определения отведенного времени на игру необходимо создать переменную
let time = 0; // в HTML необход добавить атрибут таймера
// 8.1 создаем переменную для счета
let score = 0
//5.1 получаем переменну таймера
const timeEl = document.querySelector('#time');
//6.2 получаем доску
const board = document.querySelector('#board');

//набор оттенков
const colors = ['#852999','#39B5E0','#A31ACB','#FF78F0','#F5EA5A','#FF7000','#46C2CB','#30E3CA','#E0F9B5','#2EEB95','#20D450','#29F625'];
// c помощью class добавляем - стиль

//c помощью id добавляем - данные

//2.прослушка события
startBtn.addEventListener('click', (event) => {
// 3.удалаям - #
    event.preventDefault()

//4.1 для показа след экрана обращаемся к массиву из классов! "screens" и добав след класс "up"
screens[0].classList.add('up');
})
// здесь не рассматривается подход такой как добав слушателя для каждой кнопки
//4.2 добавляется один слушатель на весь список, так же в HTML добав id

//4.4 добавили слушателя на всеь блок списка, по факту необходимо на конкретную кнопку 4.5 добавим проверку

  timeList.addEventListener ('click', event => {
//4.5 если кликнув на элемент метод "contains"проверяет есть-ли необходимы класс time-btn
if (event.target.classList.contains
    ('time-btn')){
 time = parseInt(event.target.getAttribute
    ('data-time'))
    screens[1].classList.add('up');
    startGame()
    
   }//getAttribute - получение необходимого атриб
  }) 
  
// 8 добавим событие слушатель для всего поля
board.addEventListener ('click', event =>{
    // необходимо обработать клик только по кругу, укажем проверку
    if (event.target.classList.contains('circle')){
score++
//8.2 необходимо убрать круг с кликом и добавить новый
//8.3 убираем
event.target.remove()
// 8.4 появление нового круга
createRandomCircle()

    }
})

 
  
//5.создаем функ где меняем экран на след.указав поряд номер в массиве
function startGame (){
    //5.2 когда таймер стартует задаем функцию setInterval где каждую сек меняем значение времени
    setInterval(decreaseTime, 1000)
    //6.3 вызываем метод когда стартует игра
    createRandomCircle()
   // timeEl.innerHTML = `00:${time}` // 5.4 функиця фактич дублируется
   setTime(time)
}
//5.3 меняем значение времени
function decreaseTime(){
    //5.6 исправление времени
    if (time === 0){
        finishGame()
    }else{
        let current = --time

        if (current < 10){
            current = `0${current}`
        }
        
         //  timeEl.innerHTML = `00:${current }`//5.4 
         setTime(current)
    }
}

//5.5 combine function
function setTime(value){
    timeEl.innerHTML = `00:${value }`
}

function finishGame(){
    //9 скрываем время, удаляем родителя заголовк - h3
    timeEl.parentNode.classList.add('hide')
board.innerHTML = `<h1>Your account: <span class ="primary">${score}</span></h1>`
}

//6.0 добавление случайн круг
function createRandomCircle(){
    const circle = document.createElement('div')

    const size = getRandomNumber(10,60)
// получение размерности поля
const {width,height} = board.getBoundingClientRect()


    //задаем случайную позицию кругу
     const x = getRandomNumber(0, width - size);
     const y = getRandomNumber(0, height - size);

    circle.classList.add('circle')
    //6.1 круг необходимо поместить в div c id = board
     circle.style.backgroundColor = getRandomColor()
    //6.4 задаем размер круга
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

// 7 функиця задающая случайн размерность круга

function getRandomNumber(min,max){
    return Math.round(Math.random()* (max - min) + min)
}

function getRandomColor (){
const circle = Math.floor(Math.random()*colors.length)
return colors[circle];
}